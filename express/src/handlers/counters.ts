import { Request, Response } from "express"
import { AnalyseText } from "../types/text-analyser.dto"
import { CountWordsQueryParams } from "../types/queryParams"
import { CountCharacters, CountWords } from "../types/api-types"

export const countCharacters = (
  req: Request<{}, {}, AnalyseText>,
  res: Response<CountCharacters["response"]>
) => {
  const text = req.body.text
  const status: CountCharacters["status"] = 200
  res.status(status).send(0)
}

export const countWords = (
  req: Request<{}, {}, AnalyseText, CountWordsQueryParams>,
  res: Response<CountWords["response"]>
) => {
  const text = req.body.text
  const filter = req.query.filter
  const status: CountWords["status"] = 200
  res.status(status).send(0)
}
