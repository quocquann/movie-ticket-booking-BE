import db from '../common/connect.js'

class SeatStatusController {

  getSeatStatusByShowTimeId(req, res) {

    const showTimeId = req.query.showTimeId;

    if (showTimeId) {
      db.query(`SELECT Ghe.MaGhe, Ghe.TenGhe, TrangThaiGhe.TrangThai FROM SuatChieu JOIN PhongChieu 
                ON SuatChieu.MaPhongChieu = PhongChieu.MaPhongChieu JOIN Ghe
                ON PhongChieu.MaPhongChieu = Ghe.MaPhongChieu JOIN TrangThaiGhe
                ON Ghe.MaGhe = TrangThaiGhe.MaGhe AND SuatChieu.MaSuatChieu = TrangThaiGhe.MaSuatChieu
                WHERE SuatChieu.MaSuatChieu = '${showTimeId}'`, (err, data) => {
        if (err) {
          res.status(500).json(err)
        }
        res.status(200).json(data)
      })
    }
  }

  //[PUT]
  updateSeatStatus(req, res) {
    const seatIds = req.body.seatIds
    const showTimeId = req.body.showTimeId
    seatIds.forEach((seatId) => {
      db.query(`UPDATE TrangThaiGhe SET TrangThaiGhe.TrangThai = 2 WHERE MaGhe = '${seatId}' AND MaSuatChieu = '${showTimeId}'`, (err) => {
        if (err) {
          res.status(500).json(err)
        }
        res.status(200)
      })
    })

  }
}

export default new SeatStatusController