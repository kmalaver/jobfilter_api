const express = require("express");

const data = require("../data.json");

function api(app) {
  const router = express.Router();
  app.use("/api", router);

  router.get("/", async (req, res, next) => {
    try {
      const jobs = await Promise.resolve(data);

      res.status(200).json({
        data: jobs,
        message: "jobs listed",
      });
    } catch (error) {
      next(error);
    }
  });
}

module.exports = api;
