import { DataBase } from "./database.js"
import { randomUUID } from 'node:crypto'

const database = new DataBase();

export const routes = [
  {
    method: 'GET',
    path: '/users',
    handler: (req, res) =>{
      const users = database.select('users');

      return res.end(JSON.stringify(users));
    }
  },
  {
    method: 'POST',
    path: '/users',
    handler: (req, res) =>{
      const { name, age } = req.body

      const user = {
        id: randomUUID(),
        name,
        age
      }

      database.insert('users', user);

      return res.writeHead(201).end()
    }
  }
]