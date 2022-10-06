

import express,{Request, Response} from 'express'

//importando o index.ts de routes
import mainRoutes from './routes/index'

//importando o PATH para acessar a pasta public
import path from 'path'

import mustache from 'mustache-express'

//USANDO EXPRESS
const server = express()

server.set('view engine', 'mustache')

server.use(express.static(path.join(__dirname,'../public')))

server.set('views',path.join(__dirname,'views'))

server.engine('mustache', mustache())

server.use(mainRoutes)

server.use( (req:Request, res:Response) =>{
    res.status(404).send('Página não encontrada')
})

server.listen(4000)






