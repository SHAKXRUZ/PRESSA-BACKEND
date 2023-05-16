import Router from "express";
import { elonCreate, getElon } from "../controller/elon.js";

import { elonlarValidation } from "../middleware/elon_validation_middleware.js";

const router = Router();

router.post("/create", elonlarValidation, elonCreate);
router.get("/list", getElon);

export default router;
