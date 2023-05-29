
import express from "express"
import movieController from "../controllers/MovieController.js"
const router = express.Router();

router.get("/", movieController.getAllMovies)
router.get("/getTotalPageOfMovie", movieController.getTotalPageOfMovie)
router.get("/:id", movieController.getMovieById)


export default router