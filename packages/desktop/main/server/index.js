import { createServer } from 'http'
// import express from 'express'
import iIP from 'internal-ip'
import detect from 'detect-port'
import { configureServerIO } from './wss'
import { configureWSS } from './wss'

const startDeckServer = async () => {
  // const app = express()
  const deckServer = createServer()
  // const io = await configureServerIO(deckServer)
  const wss = await configureWSS(deckServer)
  console.log(`io dict keys: ${Object.keys(io.httpServer)}`)
  const port = await detect(8332)
  const localIP = await iIP.v4()
  const address = `http://${localIP}:${port}`
  const server = deckServer.listen(port, '0.0.0.0', () => console.log(`
  deckServer listening on port ${port}
  It's accessible on LAN at address ${address}`))
  
  return {
    server: server,
    io, io,
    address: address,
  }
}

export {
  startDeckServer
}
