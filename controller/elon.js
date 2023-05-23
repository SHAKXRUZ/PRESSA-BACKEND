// import pool from "../config/db_config.js";

// const getElon = async (req, res) => {
//   try {
//     let elonList = await pool.query("select * from elon");
//     res.status(201).send(elonList.rows);
//   } catch {
//     res.send({ msg: "Error" });
//   }
// };

// const elonHeaderSearch = async (req, res) => {
//   try {
//     const { search } = req.headers;

//     let searchToLowerCase = search.toLowerCase();

//     let searchValidation = searchToLowerCase.trim();

//     let objIsmsharif = await pool.query(
//       "select * from elon where ismsharif = $1",
//       [searchValidation]
//     );

//     let objVaqt = await pool.query("select * from elon where vaqt = $1", [
//       searchValidation,
//     ]);

//     let objSana = await pool.query("select * from elon where sana = $1", [
//       searchValidation,
//     ]);

//     let objOnline = await pool.query(
//       "select * from elon where tadbir_turi = $1",
//       [searchValidation]
//     );

//     let objYunalish = await pool.query(
//       "select * from elon where yunalish = $1",
//       [searchValidation]
//     );

//     if (
//       !objVaqt.rows[0] &&
//       !objSana.rows[0] &&
//       !objOnline.rows[0] &&
//       !objYunalish.rows[0]
//     ) {
//       return res.status(201).send(objIsmsharif.rows);
//     } else if (
//       !objIsmsharif.rows[0] &&
//       !objSana.rows[0] &&
//       !objOnline.rows[0] &&
//       !objYunalish.rows[0]
//     ) {
//       return res.status(201).send(objVaqt.rows);
//     } else if (
//       !objIsmsharif.rows[0] &&
//       !objVaqt.rows[0] &&
//       !objOnline.rows[0] &&
//       !objYunalish.rows[0]
//     ) {
//       return res.status(201).send(objSana.rows);
//     } else if (
//       !objIsmsharif.rows[0] &&
//       !objVaqt.rows[0] &&
//       !objSana.rows[0] &&
//       !objYunalish.rows[0]
//     ) {
//       return res.status(201).send(objOnline.rows);
//     } else if (
//       !objIsmsharif.rows[0] &&
//       !objVaqt.rows[0] &&
//       !objSana.rows[0] &&
//       !objOnline.rows[0]
//     ) {
//       return res.status(201).send(objYunalish.rows);
//     }
//   } catch {
//     res.send({ msg: "Error" });
//   }
// };

// const elonCreate = async (req, res) => {
//   try {
//     const {
//       sanaValue,
//       vaqtValue,
//       bulimValue,
//       ichkiBulimValue,
//       radioValue,
//       link,
//       ismsharif,
//       professiya,
//       telifon1,
//       telifon2,
//       description,
//       mavzumatni,
//       elon_img_url,
//     } = req.body;

//     let sanaValueValidation =
//       sanaValue.trim() === ""
//         ? res.status(401).send({ msg: "sana kiriting?" })
//         : sanaValue.trim();

//     let vaqtValueValidation =
//       vaqtValue.trim() === ""
//         ? res.status(401).send({ msg: "vaqt kiriting?" })
//         : vaqtValue.trim();

//     let bulimValueValidation =
//       bulimValue.trim() === ""
//         ? res.status(401).send({ msg: "yunalish kiriting?" })
//         : bulimValue.trim().toLowerCase();

//     let ichkiBulimValueValidation =
//       ichkiBulimValue.trim() === ""
//         ? res.status(401).send({ msg: "ichki yunalish kiriting?" })
//         : ichkiBulimValue.trim().toLowerCase();

//     let radioValueValidation =
//       radioValue.trim() === ""
//         ? res.status(401).send({ msg: "tadbir turi kiriting?" })
//         : radioValue.trim();

//     let linkValidation =
//       link.trim() === ""
//         ? res.status(401).send({ msg: "link kiriting?" })
//         : link.trim();

//     let ismsharifValidation =
//       ismsharif.trim() === ""
//         ? res.status(401).send({ msg: "ismsharif kiriting?" })
//         : ismsharif.trim().toLowerCase();

//     let professiyaValidation =
//       professiya.trim() === ""
//         ? res.status(401).send({ msg: "professiya kiriting?" })
//         : professiya.trim().toLowerCase();

//     let telifon1Validation =
//       telifon1.trim() === ""
//         ? res.status(401).send({ msg: "telifon nommer kiriting?" })
//         : telifon1.trim();

//     let telifon2Validation =
//       telifon2.trim() === ""
//         ? res.status(401).send({ msg: "telifon nommer kiriting?" })
//         : telifon2.trim();

//     let descriptionValidation =
//       description.trim() === ""
//         ? res.status(401).send({ msg: "description nommer kiriting?" })
//         : description.trim();

//     let mavzumatniValidation =
//       mavzumatni.trim() === ""
//         ? res.status(401).send({ msg: "mavzumatni kiriting?" })
//         : mavzumatni.trim();

//     let elon_img_urlValidation =
//       elon_img_url.trim() === ""
//         ? res.status(401).send({ msg: "images kiriting?" })
//         : elon_img_url.trim();

//     await pool.query(
//       `INSERT INTO elon(sana, vaqt, yunalish, ichki_yunalish, tadbir_turi, link, ismsharif,
//         professiya, telifon1, telifon2, elon_description, mavzumatni, img_url)
//          VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`,
//       [
//         sanaValueValidation,
//         vaqtValueValidation,
//         bulimValueValidation,
//         ichkiBulimValueValidation,
//         radioValueValidation,
//         linkValidation,
//         ismsharifValidation,
//         professiyaValidation,
//         telifon1Validation,
//         telifon2Validation,
//         descriptionValidation,
//         mavzumatniValidation,
//         elon_img_urlValidation,
//       ]
//     );

//     res.status(201).send({ msg: "Create elon!" });
//   } catch {
//     res.send({ msg: "Error" });
//   }
// };

// export { elonCreate, getElon, elonHeaderSearch };

// SEQUELIZE BACKEND CODE

const { Elon } = require("../model");

Elon.sync({ force: false });

const getElon = async (_, res) => {
  try {
    let elon = await Elon.findAll();
    res.json(elon);
  } catch {
    res.send({ msg: "Error" });
  }
};

const elonCreate = async (req, res) => {
  try {
    const {
      sana,
      vaqt,
      yunalishValue,
      ichki_yunalishValue,
      tadbir_turiValue,
      link,
      ismsharifValue,
      professiyasi,
      telifon1,
      telifon2,
      elon_description,
      mavzumatni,
      img_url,
    } = req.body;

    let ismsharif = ismsharifValue.toLowerCase();
    let yunalish = yunalishValue.toLowerCase();
    let ichki_yunalish = ichki_yunalishValue.toLowerCase();
    let tadbir_turi = tadbir_turiValue.toLowerCase();
    let professiya = professiyasi.toLowerCase();

    await Elon.create({
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
    });

    return res.status(201).send({ msg: "Create elon!" });
  } catch {
    res.send({ msg: "Error" });
  }
};

const elonHeaderSearch = async (req, res) => {
  try {
    const { search } = req.headers;

    let searchToLowerCase = search.toLowerCase();

    let searchValidation = searchToLowerCase.trim();

    let objIsmsharif = await Elon.findAll({
      where: { ismsharif: searchValidation },
    });

    let objVaqt = await Elon.findAll({
      where: { vaqt: searchValidation },
    });

    let objSana = await Elon.findAll({
      where: { sana: searchValidation },
    });

    let objOnline = await Elon.findAll({
      where: { tadbir_turi: searchValidation },
    });

    let objYunalish = await Elon.findAll({
      where: { yunalish: searchValidation },
    });

    if (!objVaqt[0] && !objSana[0] && !objOnline[0] && !objYunalish[0]) {
      return res.status(201).send(objIsmsharif);
    } else if (
      !objIsmsharif[0] &&
      !objSana[0] &&
      !objOnline[0] &&
      !objYunalish[0]
    ) {
      return res.status(201).send(objVaqt);
    } else if (
      !objIsmsharif[0] &&
      !objVaqt[0] &&
      !objOnline[0] &&
      !objYunalish[0]
    ) {
      return res.status(201).send(objSana);
    } else if (
      !objIsmsharif[0] &&
      !objVaqt[0] &&
      !objSana[0] &&
      !objYunalish[0]
    ) {
      return res.status(201).send(objOnline);
    } else if (
      !objIsmsharif[0] &&
      !objVaqt[0] &&
      !objSana[0] &&
      !objOnline[0]
    ) {
      return res.status(201).send(objYunalish);
    }
  } catch {
    res.send({ msg: "Error" });
  }
};

module.exports = {
  getElon,
  elonCreate,
  elonHeaderSearch,
};
