import pool from "../config/db_config.js";

const elonCreate = async (req, res) => {
  try {
    const {
      sana,
      vaqt,
      yunalish,
      ichki_yunalish,
      tadbir_turi,
      link,
      ismsharif,
      professiya,
      telifon1,
      telifon2,
      elon_description,
      mavzumatni,
      img_url,
    } = req.body;

    let sanaValidation =
      sana.trim() === ""
        ? res.status(401).send({ msg: "sana kiriting?" })
        : sana.trim();

    let vaqtValidation =
      vaqt.trim() === ""
        ? res.status(401).send({ msg: "vaqt kiriting?" })
        : vaqt.trim();

    let yunalishValidation =
      yunalish.trim() === ""
        ? res.status(401).send({ msg: "yunalish kiriting?" })
        : yunalish.trim();

    let ichki_yunalishValidation =
      ichki_yunalish.trim() === ""
        ? res.status(401).send({ msg: "ichki yunalish kiriting?" })
        : ichki_yunalish.trim();

    let tadbir_turiValidation =
      tadbir_turi.trim() === ""
        ? res.status(401).send({ msg: "tadbir turi kiriting?" })
        : tadbir_turi.trim();

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

    let elon_descriptionValidation =
      elon_description.trim() === ""
        ? res.status(401).send({ msg: "description nommer kiriting?" })
        : elon_description.trim();

    let mavzumatniValidation =
      mavzumatni.trim() === ""
        ? res.status(401).send({ msg: "mavzumatni kiriting?" })
        : mavzumatni.trim();

    let img_urlValidation =
      img_url.trim() === ""
        ? res.status(401).send({ msg: "images kiriting?" })
        : img_url.trim();

    await pool.query(
      `INSERT INTO elon(sana, vaqt, yunalish, ichki_yunalish, tadbir_turi, link, ismsharif, 
        professiya, telifon1, telifon2, elon_description, mavzumatni, img_url)
         VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`,
      [
        sanaValidation,
        vaqtValidation,
        yunalishValidation,
        ichki_yunalishValidation,
        tadbir_turiValidation,
        linkValidation,
        ismsharifValidation,
        professiyaValidation,
        telifon1Validation,
        telifon2Validation,
        elon_descriptionValidation,
        mavzumatniValidation,
        img_urlValidation,
      ]
    );

    res.status(201).send({ msg: "Create elon!" });
  } catch {
    res.send({ msg: "Error" });
  }
};

export { elonCreate };
