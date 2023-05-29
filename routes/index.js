
import movieRouter from '../routes/movies.js'
import showTimeRouter from '../routes/showTimes.js'
import seatStatus from '../routes/seatStatuses.js'
import accessRouter from '../routes/access.js'

const route = (app) => {
  app.use('/api/movies', movieRouter)
  app.use('/api/showTime', showTimeRouter)
  app.use('/api/seatStatus', seatStatus)
  app.use('/api/access', accessRouter)
}

export default route;