import db from '../common/connect.js'
import jwt from 'jsonwebtoken'

class AccessController {

  isLogged(req, res, next) {
    const token = req.headers.authorization.split(' ')[1]
    const userId = jwt.verify(token, process.env.SECRET)
    db.query(`SELECT MaKH from KhachHang WHERE MaKH = '${userId}'`, (err, data) => {
      if (err) {
        res.status(404)
      }
      next()
    })
  }

  login(req, res) {
    const userName = req.body.userName
    const password = req.body.password
    db.query(`SELECT MaKH, TenKH FROM KhachHang WHERE KhachHang.TenDangNhap = '${userName}' AND KhachHang.MatKhau = '${password}'`, (err, data) => {
      if (err) {
        res.status(404)
      }
      const accessToken = jwt.sign(data[0].MaKH, process.env.SECRET)
      const result = { ...data[0], accessToken }
      res.json(result)
    })
  }
}

export default new AccessController