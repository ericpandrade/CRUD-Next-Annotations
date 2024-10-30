import { Dispatch, SetStateAction } from "react"
import { IAnnotation } from ".."

type IEditAnnotation = {
  id: number,
  newText: string,
  setAnnotations: Dispatch<SetStateAction<IAnnotation[]>>,
  setEditing: Dispatch<SetStateAction<number | null>>,
  annotations: IAnnotation[]
}

type ICreateAnnotation = {
  newAnnotation: string,
  setAnnotations: Dispatch<SetStateAction<IAnnotation[]>>,
  annotations: IAnnotation[]
}

type IDeleteAnnotation = {
  id: number,
  setAnnotations: Dispatch<SetStateAction<IAnnotation[]>>,
  annotations: IAnnotation[]
}

type IAnnotationCheckIfAlreadyExists = {
  annotations: IAnnotation[],
  newAnnotation: string;
}

export type {
  IEditAnnotation,
  ICreateAnnotation,
  IDeleteAnnotation,
  IAnnotationCheckIfAlreadyExists
}
