// import Router from "express";
// import { elonCreate, getElon, elonHeaderSearch } from "../controller/elon.js";

// import { elonlarValidation } from "../middleware/elon_validation_middleware.js";

// const router = Router();

// router.post("/create", elonlarValidation, elonCreate);
// router.get("/list", getElon);
// router.get("/header_search", elonHeaderSearch);

// export default router;

const { Router } = require("express");
const {
  getElon,
  elonCreate,
  elonHeaderSearch,
} = require("../controller/elon.js");

const router = Router();

router.post("/elon_create", elonCreate);
router.get("/list", getElon);
router.get("/header_search", elonHeaderSearch);

module.exports = router;
