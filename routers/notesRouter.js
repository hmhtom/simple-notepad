//Notes Router handle incoming request from /notes
const express = require("express");
const notesRouter = express.Router();
const { get, save, remove } = require("../controller/note");

module.exports = notesRouter;
