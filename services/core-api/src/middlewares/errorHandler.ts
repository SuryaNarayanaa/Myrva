
import { ApiError, ApiResponse, ContextualError } from '../utils'
import { ErrorRequestHandler } from 'express'
import { ZodError } from 'zod'

const errorHandler: ErrorRequestHandler = (err, req, res, _next) => {
  if (err instanceof ZodError) {
    const errors = err.issues.map((issue) => ({ message: issue.message, path: issue.path }))
    return res.status(400).json({ success: false, message: 'Validation failed', errors })
  }

  const contextualError = err as ContextualError

  const context = contextualError.context ?? {
    controller: 'unknownController',
    method: req.method,
    path: req.originalUrl
  }

  // Use The context for log The error for analaysis 
  // logger.error(`Error: ${err.message} in ${context.controller} in ${context.path} for {context.method} as {err.stack}`)
  // logger.error({ message: err.message, ....  })

  let error = err
  if (!(err instanceof ApiError)) {
    const statusCode = 500
    const message = error instanceof Error ? error.message : 'Something went wrong'
    error = new ApiError(statusCode, message)
  }

  const response = new ApiResponse(error.statusCode, error.message)

  return res.status(error.statusCode).json({ ...response, success: false })
}

export default errorHandler
