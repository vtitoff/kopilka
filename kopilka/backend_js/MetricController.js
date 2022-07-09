import {collectDefaultMetrics, register} from "prom-client";
collectDefaultMetrics();

class MetricController {
    async metrics(req, res) {
        try {
            res.set('Content-Type', register.contentType);
            res.end(await register.metrics());
        } catch (err) {
            res.status(500).end(err);
        }
    }
}


export default new MetricController();