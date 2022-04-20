const User = require("../controller/userControl");
const verifyToken = require("../middleware/auth");
const router = (app) => {
  app.post("/register", User.register);
  app.post("/login", User.login);
};
module.exports = router;
