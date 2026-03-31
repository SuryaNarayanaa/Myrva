class BadRequestError extends Error {
    statusCode: number
    data: null
    success: boolean
    constructor(message: string = "Bad Request") {
        super(message)
        this.statusCode = 400
        this.data = null
        this.success = false
    }
}

class NotFoundError extends Error {
    statusCode: number
    data: null
    success: boolean
    constructor(message: string = "Not Found") {
        super(message)
        this.statusCode = 404
        this.data = null
        this.success = false
    }
}

class ResourceConflict extends Error {
    statusCode: number
    data: null
    success: boolean
    constructor(message: string = "Conflicted Resource") {
        super(message)
        this.statusCode = 409
        this.data = null
        this.success = false
    }
}

export {BadRequestError, NotFoundError, ResourceConflict}