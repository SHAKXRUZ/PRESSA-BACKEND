// import Router from "express";
// import {
//   adminLogin,
//   qabulQilinganBekor,
//   kutilmoqdaElon,
//   adminSearch,
// } from "../controller/admin.js";

// const router = Router();

// router.post("/login", adminLogin);
// router.put("/elon_bekor/:id", qabulQilinganBekor);
// router.put("/elon_kutilmoqda/:id", kutilmoqdaElon);
// router.post("/admin_search", adminSearch);

// export default router;

const { Router } = require("express");
const {
  adminLogin,
  kutilmoqdaElon,
  qabulQilinganBekor,
  adminSearch,
} = require("../controller/admin.js");

const router = Router();

router.post("/login", adminLogin);
router.put("/elon_kutilmoqda/:id", kutilmoqdaElon);
router.put("/elon_bekor/:id", qabulQilinganBekor);
router.post("/admin_search", adminSearch);

module.exports = router;
