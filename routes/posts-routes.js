const express = require("express");
const { check } = require("express-validator");

const auth = require("../middleware/auth");

const postsControllers = require("../controllers/posts-controllers");

const router = express.Router();

router.get("/:pid", postsControllers.getPostById);

router.use(auth);

router.post("/", [check("title").not().isEmpty(), check("content").isLength({ min: 5 })], postsControllers.createPost);

router.delete("/:pid", postsControllers.deletePost);

module.exports = router;