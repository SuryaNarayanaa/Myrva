import { ApiResponse, asyncHandler } from '../utils'
import { Request, Response } from 'express'


export const sampleController = asyncHandler('sampleContoller', async (_req: Request, res: Response) => {
    /* Sample Controller Structure 
    if needed to Throw an error
    if(condition) {
        throw new BadRequestError("message needed")
        or throw new ApiError(statusCode, "message")
    }
    */
    throw new Error("Hello There")
    res.status(200).json(new ApiResponse<string>(200, 'Sample Controller', "Hello This is data"))
})