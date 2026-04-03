const Job = require("../models/Job");

exports.addJob = async (req, res) => {
  const job = new Job(req.body);
  await job.save();
  res.send(job);
};

exports.getJobs = async (req, res) => {
  const jobs = await Job.find();
  res.send(jobs);
};