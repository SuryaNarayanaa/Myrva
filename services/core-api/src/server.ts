import app from './app'
import { PORT } from './config/env'

const server = app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})

const shutdown = (signal: NodeJS.Signals) => {
    console.log(`Received ${signal}. Shutting down gracefully...`)
    server.close(() => {
        process.exit(0)
    })
}

process.on('SIGINT', () => shutdown('SIGINT'))
process.on('SIGTERM', () => shutdown('SIGTERM'))