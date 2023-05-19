import Router from "express";
import { adminLogin } from "../controller/admin.js";

// import { adminValidation } from "../middleware/elon_validation_middleware.js";

const router = Router();

router.post("/login", adminLogin);

export default router;
