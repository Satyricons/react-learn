const express = require("express")
const app = express()
const http = require("http")
const {Server} = require("socket.io")
const server = http.createServer(app)
const io = new Server(server, {
	cors: {
		origin: "http://localhost:3000",
		methods: ["GET", "POST"]
	}
})
const fileUpload = require('express-fileupload')
app.use(fileUpload({}))
app.use(express.static('public'))
const bodyParser = require("body-parser")

const mongoose = require("mongoose")
const {MONGO_URI} = require("./config/key")
const passport = require('passport')
const bodyRout = require("./routes/body")
const authRout = require("./routes/auth")
mongoose.connect(MONGO_URI).then(() => console.log("Успешное подключение к удаленной базе данных MongoDB")).catch(error => (console.log(error)))
app.use(passport.initialize())
require('./midleware/passport')(passport)
app.use(require('cors')())
app.use(require('morgan')('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyRout)
app.use('/auth', authRout)


//socket.io
let clients = 0;
let usersConnect = []
io.on('connection', function (socket) {
	clients++

	socket.on("iam", (data) => {
		usersConnect.push({userId: data, socketId: socket.id})
		// console.log(usersConnect.length)

		io.sockets.emit('broadcast', {
			description: clients + ' clients connected!- ' + socket.id,
			countConnections: clients,
			usersConnect: usersConnect
		})
	})

	socket.on("msgToServer", (data) => {
		console.log("Поступило сообщению юзеру № ")
		console.log(data)
		socket.broadcast.emit("msgToClient", data)
	})

	socket.on('disconnect', function () {
		clients--

		let newUsers = []
		usersConnect.map(e => {
			if (!(e.socketId === socket.id)) newUsers.push(e)
		})
		usersConnect = newUsers
		io.sockets.emit('broadcast', {
			description: clients + ' clients disconnected! - ' + socket.id,
			countConnections: clients,
			usersConnect: usersConnect
		})
	})
})


server.listen(8000, () => console.log("Слушаю 8000 порт..."))