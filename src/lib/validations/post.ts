// import * as z from "zod";
import * as yup from "yup";

// export const PostValidation = z.object({
//   title: z
//     .string()
//     .min(3, { message: "Le titre doit contenir au minimum 3 caractères." })
//     .max(30, { message: "Le titre doit contenir au maximum 30 caractères." }),
//   content: z
//     .string()
//     .min(3, { message: "Le contenu doit contenir au minimum 3 caractères." })
//     .max(1000, {
//       message: "Le contenu doit contenir au maximum 1000 caractères.",
//     }),
// });

export const Postschema = yup
  .object({
    title: yup.string().min(3).max(30).required(),
    content: yup.string().min(3).max(1000).required(),
  })
  .required();
