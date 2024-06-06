import express from "express";
import {app} from "../index.js"
// const app =  // express()
const port = 3000
/*
app.get('/', (req, res) => {
  res.send({msg:'Hello World!'})
})
*/
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})