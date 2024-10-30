import { IEditAnnotation } from "../types/functions";

const editAnnotation = ({
  id,
  newText,
  setAnnotations,
  setEditing,
  annotations,
}: IEditAnnotation) => {
  setAnnotations(
    annotations.map((annotation) =>
      annotation.id === id ? { ...annotation, texto: newText } : annotation
    )
  );
  setEditing(null);
};


export {
  editAnnotation
};
