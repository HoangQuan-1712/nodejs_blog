const Course = require("../models/Course");

class SiteController {
  // GET /home
  async home(req, res) {
    try {
      const courses = await Course.find({});
      res.json(courses);
    } catch (err) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  // GET /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();