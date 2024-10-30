import { ICreateAnnotation } from "../types/functions";

const createNewAnnotation = ({ newAnnotation, setAnnotations, annotations }: ICreateAnnotation) => {
  setAnnotations([...annotations, { id: Date.now(), text: newAnnotation }]);
};

export {
  createNewAnnotation
}
