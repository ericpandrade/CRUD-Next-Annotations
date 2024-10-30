import * as yup from "yup"

const annotationSchema = yup.object({
  newAnnotation: yup.string().required()
}).required();

export type IFormDataAnnotation = yup.InferType<typeof annotationSchema>

export {
  annotationSchema
}
