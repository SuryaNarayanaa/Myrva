import Express, {Request, Response} from 'express'

const app = Express()

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({success: true, message: "Core Api is up and running"})
})


export default app