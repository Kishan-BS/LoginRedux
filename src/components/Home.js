import React from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'

function Home() {
  const storedData = useSelector(state => state)
  const url = 'https://jsonplaceholder.typicode.com/users'
  const data = {
    email: storedData.email,
    password: storedData.password
  }
  const axios = require('axios')
  let reqInstance = axios.create({
    headers: {
      header1: data.email,
      header2: data.password
    }
  })

  // axios.post(url,data,reqInstance).then((res)=>console.log(res)).catch((err)=>console.log(err))
  reqInstance.post(url, data).then((res) => console.log(res))
  return (
    <div><h1>Adding</h1>
    <h3>EMAIL:{data.email}</h3>
    <h3>password:{data.password}</h3>
    </div>
  )
}

export default Home