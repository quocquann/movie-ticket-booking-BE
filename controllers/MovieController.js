

import db from "../common/connect.js"

class MovieController {


  getAllMovies(req, res) {
    const pageNumber = req.query.page || 1;
    const pageSize = 10;
    if (pageNumber) {
      db.query(`SELECT * FROM Phim LIMIT ${pageSize} OFFSET ${pageSize * (pageNumber - 1)}`, (err, data) => {
        if (err) {
          res.status(500).json(err)
        }
        res.status(200).json(data);
      })
    }
    else {
      db.query(`SELECT * FROM Phim`, (err, data) => {
        if (err) {
          res.status(500).json(err)
        }
        res.status(200).json(data);
      })
    }
  }

  getMovieById(req, res) {
    const id = req.params.id
    if (id) {
      db.query(`SELECT * FROM Phim WHERE Phim.MaPhim = '${id}'`, (err, data) => {
        if (err) {
          res.status(500).json(err)
        }
        res.status(200).json(data);
      })
    }
  }

  getTotalPageOfMovie(req, res) {
    const pageSize = 10
    db.query('SELECT COUNT(*) as Total from Phim', (err, data) => {
      if (err) {
        res.status(500).json(err)
      }
      res.status(200).json(Math.ceil(data[0].Total / pageSize))
    })
  }
}

export default new MovieController