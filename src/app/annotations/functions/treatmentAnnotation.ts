import { IAnnotationCheckIfAlreadyExists } from "../types/functions";

const checkIfAlreadyExistsAnnotation = ({ annotations, newAnnotation }: IAnnotationCheckIfAlreadyExists) => {
  const annotationAlreadyExists = annotations.some(
    (annotation) => annotation.text === newAnnotation
  );

  return annotationAlreadyExists
}

export {
  checkIfAlreadyExistsAnnotation
}
