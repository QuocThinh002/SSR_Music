import express, { Express, Request, Response } from 'express'

import * as initDatabase from './databases/database'

const app: Express = express()
const port: number = 3000

app.set('views', './views')
app.set('view engine', 'pug')

// init database
initDatabase

app.get('/topics', (req: Request, res: Response) => {
    
    res.render('client/pages/topics')
})

app.listen(port, () => {
    console.log(`App listenning on port ${port}`)
})