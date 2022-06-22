const app = require('./app')
const {APP_PORT, APP_HOST} = require('./app/config')
app.listen(APP_PORT, APP_HOST, () => {
  console.log(`Server started!! Port is ${APP_PORT}`)
})