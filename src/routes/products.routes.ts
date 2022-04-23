import { Router } from "express";
import {
  createProduct,
  updateProduct,
} from "../controllers/products.controller";
import { schemaValition } from "../middlewares/schemaValidator.middleware";
import {
  CreateProductSchema,
  UpdateProductSchema,
} from "../schemas/product.schema";

const router = Router();

router.post("/products", schemaValition(CreateProductSchema), createProduct);
router.put("/products/:id", schemaValition(UpdateProductSchema), updateProduct);

export default router;
