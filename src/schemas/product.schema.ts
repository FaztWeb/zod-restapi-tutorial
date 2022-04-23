import { z } from "zod";

export const CreateProductSchema = z.object({
  body: z.object({
    name: z.string().nonempty(),
    price: z.number().nonnegative(),
  }),
});

export const UpdateProductSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    price: z.number().nonnegative().optional(),
  }),
  params: z.object({
    id: z.string().min(3),
  }),
  query: z.object({
    title: z.string(),
  }),
});

export type CreateProductType = z.infer<typeof CreateProductSchema>["body"];

export type UpdateProductBodyType = z.infer<typeof UpdateProductSchema>["body"];
export type UpdateProductParamsType = z.infer<
  typeof UpdateProductSchema
>["params"];
export type UpdateProductQueryType = z.infer<
  typeof UpdateProductSchema
>["query"];
