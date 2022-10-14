//Notes Router handle incoming request from /notes
const express = require("express");
const notesRouter = express.Router();
const { get, save, remove } = require("../controller/note");

//Desinate different endpoints to its desired middleware function from Controller
notesRouter.route("/").get(get).post(save);
notesRouter.route("/:id").delete(remove);

module.exports = notesRouter;
