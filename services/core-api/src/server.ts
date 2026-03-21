import app from './app'
import {PORT} from './config/env'

app.listen(PORT, (err) => {
    if (err) {
        console.error("Error starting the server: ", err)
        process.exit(1)
    }
    console.log(`Server is running on http://localhost:${PORT}`)
})