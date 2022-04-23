import { Router } from "express";
import { login } from "../controllers/auth.controller";
import { schemaValition } from "../middlewares/schemaValidator.middleware";
import {loginSchema} from '../schemas/auth.schema'

const router = Router();

router.post("/login", schemaValition(loginSchema), login);

export default router;
