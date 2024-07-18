import { NextFunction, Request, Response } from "express"

export const logger = (req: Request, _res: Response, next: NextFunction) => {
  console.log(`Received ${req.method} ${req.url}`)
  next()
}
