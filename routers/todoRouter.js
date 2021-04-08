const router = require("express").Router();
const todoControllers = require("../controllers/todoControllers");
// const { verifyToken } = require("../controllers/authController");

router.get("/", todoControllers.getAllTodo);
router.get("/:id", todoControllers.getTodo);
router.post("/", todoControllers.createTodo);
router.patch("/:id", todoControllers.updateTodo);
router.patch("/:id", todoControllers.toggleCompleted);
router.delete("/:id", todoControllers.deleteTodo);

module.exports = router;
