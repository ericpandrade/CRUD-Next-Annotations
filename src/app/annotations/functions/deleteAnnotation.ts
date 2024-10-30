import { IDeleteAnnotation } from "../types/functions";

const deleteAnnotation = ({ id, setAnnotations, annotations }: IDeleteAnnotation) => {
  setAnnotations(annotations.filter((annotation) => annotation.id !== id));
};

export {
  deleteAnnotation
}
