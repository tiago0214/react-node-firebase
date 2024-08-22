import http from 'node:http'
import { Transform } from 'node:stream'

class InverseNumber extends Transform{
  _transform(chunk, enconding, callback){
    const transformed = Number(chunk.toString()) * -1

    console.log(transformed)

    callback(null,Buffer.from(String(transformed)))
  }
}

const server = http.createServer(async (req,res) => {
 const buffer = [];

 for await (const chunk of req){
  buffer.push(chunk);
 }

 const fullStreamContent = Buffer.concat(buffer).toString()

 console.log(fullStreamContent)

 return res.end(fullStreamContent)
})

server.listen(3333)