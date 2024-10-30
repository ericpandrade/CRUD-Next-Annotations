import React from "react";
import { ICreateAnnotation } from "../../types/functions";
import { IAnnotation, IFormAnnotation } from "../../types";
import { Title } from "@/components/Title";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  annotationSchema,
  IFormDataAnnotation,
} from "@/app/schema/annotations";
import { useToast } from "@/hooks/use-toast";
import { handleAnnotations } from "../../functions";

type IProps = {
  newAnnotation: string;
  setNewAnnotation: React.Dispatch<React.SetStateAction<string>>;
  createAnnotation: ({
    setAnnotations,
    annotations,
  }: ICreateAnnotation) => void;
  setAnnotations: React.Dispatch<React.SetStateAction<IAnnotation[]>>;
  annotations: IAnnotation[];
};

export const HeaderAnnotation = ({
  createAnnotation,
  annotations,
  setAnnotations,
}: IProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IFormDataAnnotation>({ resolver: yupResolver(annotationSchema) });
  const { toast } = useToast();

  const annotationsController = handleAnnotations;

  const onSubmit = ({ newAnnotation }: IFormAnnotation) => {
    const existsAnnotation =
      annotationsController.treatment.checkIfAlreadyExistsAnnotation({
        annotations,
        newAnnotation,
      });

    if (existsAnnotation) {
      toast({
        variant: "destructive",
        title: "Opa! Essa anotação já está cadastrada.",
        description: "Por favor, tente alterar o nome dessa anotação!",
      });

      return;
    }

    createAnnotation({
      newAnnotation,
      setAnnotations,
      annotations,
    });

    reset();
  };

  return (
    <>
      <Title className="mb-4" message="Anotações" />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex mb-4">
          <div className="w-full mr-4">
            <Input.field
              type="text"
              placeholder="Nova anotação"
              className="mr-2"
              stateWatchKey="newAnnotation"
              register={register}
            />

            {errors.newAnnotation && (
              <Input.error
                message="Esse campo é obrigatório!"
                className="ml-1"
              />
            )}
          </div>

          <Button type="submit" label="Adicionar" />
        </div>
      </form>
    </>
  );
};
