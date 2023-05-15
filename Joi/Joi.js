import elonValidation from "../validation/elon_validation.js";

router.post("/elon/create", (req, res) => {
  console.log(req.body);
  res.status(201).send("Zor");
  const { error } = elonValidation(req.body);

  if (error) {
    console.log(error);
    return res.status(400).json({ msg: error.details[0].message });
  }
});
