// const path = require("path")

const express = require("express") // it will load the express package in our app

const port = 8001

//creating app object
const app = express()

// middlewares

const middleware1 = (req, res, next) => {
  console.log("I am middleware1")
  next()
}

const middleware2 = (req, res, next) => {
  console.log("I am middleware2")
  next()
}

app.use(middleware1) // application-level middleware

// route creation

// home route
app.get("/", (req, res) => {
  res.send("Hello there") //text
})

app.get("/home", (req, res) => {
  res.send("<h1>Home Page<h1>")
})

// middleware2 applies only to this routes

app.get("/product", middleware2, (req, res) => {
  res.send("<h1>Choose from our Products ...</h1>")
})

app.get("/contact", middleware2, (req, res) => {
  res.send("<h1>Contact No: +91-999999999</h1>")
})

app.listen(port)
