"use client";

import { ChangeEvent, KeyboardEvent, useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import { HeaderAnnotation } from "./components/Header";
import { IAnnotation } from "./types";
import { handleAnnotations } from "./functions";
import { Table } from "@/components/Table";
import { Button } from "@/components/Button";
import { Text } from "@/components/Text";
import { Input } from "@/components/Input";

export default function Tabelaannotations() {
  const annotationsController = handleAnnotations;
  const [annotations, setAnnotations] = useState<IAnnotation[]>([]);
  const [newAnnotation, setNewAnnotation] = useState("");
  const [editing, setEditing] = useState<number | null>(null);

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>, id: number) => {
    const updatedText = event.target.value;

    setAnnotations((prevAnnotations) =>
      prevAnnotations.map((annotation) =>
        annotation.id === id ? { ...annotation, text: updatedText } : annotation
      )
    );
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setEditing(null); // Finaliza a edição ao pressionar Enter
    }
  };

  const onClickDeleteAnnotation = (id: number) => {
    annotationsController.delete({ id, setAnnotations, annotations });
  };

  return (
    <div className="container mx-auto p-4">
      <HeaderAnnotation
        createAnnotation={annotationsController.create}
        newAnnotation={newAnnotation}
        setAnnotations={setAnnotations}
        setNewAnnotation={setNewAnnotation}
        annotations={annotations}
      />
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.Cell>
              <Text message="Anotações" />
            </Table.Cell>
            <Table.Cell className="w-[100px]">
              <Text message="Ações" />
            </Table.Cell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {annotations.length > 0 ? (
            annotations.map((anotacao) => (
              <Table.Row key={anotacao.id}>
                <Table.Cell>
                  {editing === anotacao.id ? (
                    <Input.field
                      type="text"
                      value={anotacao.text}
                      onChange={(event) => onChangeInput(event, anotacao.id)}
                      onKeyDown={(event) => handleKeyDown(event)}
                      onBlur={() => setEditing(null)}
                      autoFocus
                    />
                  ) : (
                    anotacao.text
                  )}
                </Table.Cell>
                <Table.Cell>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="mr-2"
                    action={() => setEditing(anotacao.id)}
                    icon={<Pencil className="h-4 w-4" />}
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    action={() => onClickDeleteAnnotation(anotacao.id)}
                    icon={<Trash2 className="h-4 w-4" />}
                  />
                </Table.Cell>
              </Table.Row>
            ))
          ) : (
            <Table.Row className="flex justify-center items-center mt-4">
              <Table.Cell>
                <Text message="Sem dados" />
              </Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table.Root>
    </div>
  );
}
