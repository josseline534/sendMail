import 'dotenv/config'
import express, { Request, Response } from 'express'
import cors from 'cors'
import emailRoutes from './api/email/routes'

const app = express()
const port = 3005

app.use(cors())

app.get('/', (_req: Request, res: Response) => res.send('Health Check!'))
app.use(express.json())

app.use('/api/v1/emails', emailRoutes)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))