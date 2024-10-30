import { createNewAnnotation } from "./createAnnotation";
import { editAnnotation } from "./editAnnotation";
import { deleteAnnotation } from "./deleteAnnotation"
import { checkIfAlreadyExistsAnnotation } from "./treatmentAnnotation";

export const handleAnnotations = {
  edit: editAnnotation,
  create: createNewAnnotation,
  delete: deleteAnnotation,
  treatment: {
    checkIfAlreadyExistsAnnotation
  }
};
