import express from 'express'
import * as Controller from "../controllers/main.controller.js"

const router = express.Router();

router.get('/search/:col', Controller.searchAll);
router.get('/count/:col', Controller.countDocs);
router.get("/chart/:col", Controller.getChartData);


export default router;