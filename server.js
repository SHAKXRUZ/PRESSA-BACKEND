import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import adminRouter from "./router/admin_router.js";

dotenv.config();
const PORT = process.env.PORT || 5001;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/admin", adminRouter);

app.listen(PORT, () => {
  console.log(PORT);
});
