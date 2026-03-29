import express, { Request, Response } from 'express'
import sampleRoutes from './routes/sample.route'
import { ApiError, ApiResponse } from './utils'
import errorHandler from './middlewares/errorHandler'
import morgan from 'morgan'
import { NODE_ENV } from './config/env'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

if(NODE_ENV == 'development') {
    app.use(morgan("dev"))
} 

app.get('/', (_req: Request, res: Response) => {
    res.status(200).json(new ApiResponse(200, 'Core API is up and running'))
})

app.use('/api/v1', sampleRoutes)

app.use((_req: Request, _res: Response, next) => {
    next(new ApiError(404, 'Route not found'))
})

app.use(errorHandler)

export default app