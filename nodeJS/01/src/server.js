import http from 'node:http';
import {json} from './middleware/json.js'
import {randomUUID} from 'node:crypto'
import { Database } from './database/database.js';

const dataBase = new Database()

const server = http.createServer(async(req,res)=>{
  const {method,url} = req

  await json(req,res)

  if(method === "GET" && url === "/users"){
    const users = dataBase.select("users")

    return res.end(JSON.stringify(users))
  }

  if(method === "POST" && url === "/users"){
    const { email, name } = req.body

    const user = {
      id: randomUUID(),
      name,
      email,
    }

    dataBase.insert('users',user)

    return res.writeHead(201).end()
  }

  return res.writeHead(404).end('Not found')
});

server.listen(3333);
