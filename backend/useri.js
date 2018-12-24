var User = require('./user.js')

module.exports.insertarProducto = function(callback){
let user = new User({
    name: 'Juan',
    username: 'juan@hotmail.com',
    password: '123'
  })

user.save((error) => {
  if (error)callback(error)
  callback(null, "Producto guardado")
})
}
