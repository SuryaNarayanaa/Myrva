import {Request, Response, NextFunction, RequestHandler} from 'express'

type AsyncRequestHandler = (req: Request, res: Response, next: NextFunction) => Promise<void> | void

export const asyncHandler = (requestHandler: AsyncRequestHandler): RequestHandler => {
    return (req: Request, res: Response, next: NextFunction): void => {
        Promise.resolve(requestHandler(req, res, next)).catch(next)
    }
}


export class ApiError extends Error {
    statusCode: number
    data: null
    success: boolean
    constructor(statusCode: number, message: string = "Something went wrong") {
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.success = false
    }
}
