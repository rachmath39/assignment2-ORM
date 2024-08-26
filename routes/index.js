const auth = require("../middleware/auth.middleware");
const router = require("express").Router();

router.use(require("./auth"));

router.use(auth);

router.use("/movies", require("./movies"));
// router.use("/customers", require("./users"));

module.exports = router;
