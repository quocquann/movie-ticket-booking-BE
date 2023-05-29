import db from '../common/connect.js'

class ShowTimeController {
  getShowTimeById(req, res) {
    const showTimeId = req.params.showTimeId
    db.query(`SELECT SuatChieu.MaSuatChieu,
                       Phim.TenPhim,
                       SuatChieu.GioBatDau,
                       SuatChieu.GioKetThuc,
                       SuatChieu.NgayChieu,
                       PhongChieu.TenPhongChieu,
                       RapChieu.TenRapChieu,
                       RapChieu.DiaChi
                       FROM Phim JOIN SuatChieu
                       ON Phim.MaPhim = SuatChieu.MaPhim JOIN PhongChieu
                       ON SuatChieu.MaPhongChieu = PhongChieu.MaPhongChieu JOIN RapChieu
                       ON PhongChieu.MaRapChieu = RapChieu.MaRapChieu WHERE SuatChieu.MaSuatChieu = '${showTimeId}'`, (err, data) => {
      if (err) {
        res.json("Loi server")
      }
      res.json(data)
    })
  }

  getShowTimesByMovieId(req, res) {
    const movieId = req.query.movieId

    if (movieId) {
      db.query(`SELECT SuatChieu.MaSuatChieu,
                       Phim.TenPhim,
                       SuatChieu.GioBatDau,
                       SuatChieu.GioKetThuc,
                       SuatChieu.NgayChieu,
                       PhongChieu.TenPhongChieu,
                       RapChieu.TenRapChieu,
                       RapChieu.DiaChi
                       FROM Phim JOIN SuatChieu
                       ON Phim.MaPhim = SuatChieu.MaPhim JOIN PhongChieu
                       ON SuatChieu.MaPhongChieu = PhongChieu.MaPhongChieu JOIN RapChieu
                       ON PhongChieu.MaRapChieu = RapChieu.MaRapChieu WHERE Phim.MaPhim = '${movieId}'`, (err, data) => {
        if (err) {
          res.json("Loi server")
        }
        res.json(data)
      })
    }
  }
}

export default new ShowTimeController