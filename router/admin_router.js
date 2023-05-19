import Router from "express";
import { adminLogin } from "../controller/admin.js";

const router = Router();

router.post("/login", adminLogin);

export default router;
