import {Request, Response, NextFunction, RequestHandler} from 'express'

type AsyncRequestHandler = (req: Request, res: Response, next: NextFunction) => Promise<any> | any

export type ErrorContext = {
    controller: string
    method: string
    path: string
}

export type ContextualError = Error & {
    context?: ErrorContext
}

export const asyncHandler = (name:string, requestHandler: AsyncRequestHandler): RequestHandler => {
    return (req: Request, res: Response, next: NextFunction)=> {
        Promise.resolve(requestHandler(req, res, next)).catch((err: unknown) => {
            const contextualError: ContextualError = err instanceof Error
                ? err
                : new Error('Unknown error')
            
            contextualError.context = {
                controller: name,
                method: req.method,
                path: req.originalUrl
            }

            next(contextualError)
        })
    }
}

export class ApiError extends Error {
    statusCode: number
    data: unknown
    success: boolean
    constructor(statusCode: number, message: string = "Something went wrong", data: unknown = null) {
        super(message)
        this.statusCode = statusCode
        this.data = data
        this.success = false
    }
}

export class ApiResponse<T = unknown> {
    statusCode: number
    data?: T
    message : string
    success: boolean
    constructor(statusCode: number = 200, message: string = "", data?: T) {
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400
    }
}
