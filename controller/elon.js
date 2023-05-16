import pool from "../config/db_config.js";

const getElon = async (req, res) => {
  try {
    let elonList = await pool.query("select * from elon");
    res.status(201).send(elonList.rows);
  } catch {
    res.send({ msg: "Error" });
  }
};

const elonHeaderSearch = async (req, res) => {
  try {
    const { search } = req.body;

    let searchValidation =
      search.trim() === ""
        ? res.status(401).send({ msg: "Text kiriting?" })
        : search.trim();

    let searchElonObj = await pool.query(
      "select * from elon where ismsharif = $1",
      [searchValidation]
    );
    console.log(searchElonObj.rows);
    res.status(201).send(searchElonObj.rows[0]);
  } catch {
    res.send({ msg: "Error" });
  }
};

const elonCreate = async (req, res) => {
  try {
    const {
      sanaValue,
      vaqtValue,
      bulimValue,
      ichkiBulimValue,
      radioValue,
      link,
      ismsharif,
      professiya,
      telifon1,
      telifon2,
      description,
      mavzumatni,
      elon_img_url,
    } = req.body;

    let sanaValueValidation =
      sanaValue.trim() === ""
        ? res.status(401).send({ msg: "sana kiriting?" })
        : sanaValue.trim();

    let vaqtValueValidation =
      vaqtValue.trim() === ""
        ? res.status(401).send({ msg: "vaqt kiriting?" })
        : vaqtValue.trim();

    let bulimValueValidation =
      bulimValue.trim() === ""
        ? res.status(401).send({ msg: "yunalish kiriting?" })
        : bulimValue.trim();

    let ichkiBulimValueValidation =
      ichkiBulimValue.trim() === ""
        ? res.status(401).send({ msg: "ichki yunalish kiriting?" })
        : ichkiBulimValue.trim();

    let radioValueValidation =
      radioValue.trim() === ""
        ? res.status(401).send({ msg: "tadbir turi kiriting?" })
        : radioValue.trim();

    let linkValidation =
      link.trim() === ""
        ? res.status(401).send({ msg: "link kiriting?" })
        : link.trim();

    let ismsharifValidation =
      ismsharif.trim() === ""
        ? res.status(401).send({ msg: "ismsharif kiriting?" })
        : ismsharif.trim();

    let professiyaValidation =
      professiya.trim() === ""
        ? res.status(401).send({ msg: "professiya kiriting?" })
        : professiya.trim();

    let telifon1Validation =
      telifon1.trim() === ""
        ? res.status(401).send({ msg: "telifon nommer kiriting?" })
        : telifon1.trim();

    let telifon2Validation =
      telifon2.trim() === ""
        ? res.status(401).send({ msg: "telifon nommer kiriting?" })
        : telifon2.trim();

    let descriptionValidation =
      description.trim() === ""
        ? res.status(401).send({ msg: "description nommer kiriting?" })
        : description.trim();

    let mavzumatniValidation =
      mavzumatni.trim() === ""
        ? res.status(401).send({ msg: "mavzumatni kiriting?" })
        : mavzumatni.trim();

    let elon_img_urlValidation =
      elon_img_url.trim() === ""
        ? res.status(401).send({ msg: "images kiriting?" })
        : elon_img_url.trim();

    await pool.query(
      `INSERT INTO elon(sana, vaqt, yunalish, ichki_yunalish, tadbir_turi, link, ismsharif, 
        professiya, telifon1, telifon2, elon_description, mavzumatni, img_url)
         VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`,
      [
        sanaValueValidation,
        vaqtValueValidation,
        bulimValueValidation,
        ichkiBulimValueValidation,
        radioValueValidation,
        linkValidation,
        ismsharifValidation,
        professiyaValidation,
        telifon1Validation,
        telifon2Validation,
        descriptionValidation,
        mavzumatniValidation,
        elon_img_urlValidation,
      ]
    );

    res.status(201).send({ msg: "Create elon!" });
  } catch {
    res.send({ msg: "Error" });
  }
};

export { elonCreate, getElon, elonHeaderSearch };

// delete from elon where id = 'bb92dcb4-e02a-4c84-ad84-d36bf0ae196f';

// update elon set tasdiqlangan = true where id = '89a46a25-b9c1-4e52-8f8a-e79f64cfbf04';
