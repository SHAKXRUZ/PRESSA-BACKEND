import Router from "express";
import { loginAdmin } from "../controller/admin_login.js";

import { adminLogiValidation } from "../middleware/user_validation_middleware.js";

const router = Router();

router.post("/admin_login", adminLogiValidation, loginAdmin);

export default router;
