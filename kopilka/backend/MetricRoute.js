import Router from "express";
import MetricController from "./MetricController.js";

const metricRouter = new Router()


metricRouter.get('/', MetricController.metrics)


export default metricRouter;