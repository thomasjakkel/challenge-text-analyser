import { Request, Response } from "express"
import { AnalyseText } from "../types/text-analyser.dto"
import { CountWordsQueryParams } from "../types/queryParams"
import {
  CountAnagrams,
  CountCharacters,
  CountLines,
  CountSentences,
  CountWords,
} from "../types/api-types"

export const countCharacters = (
  req: Request<{}, {}, AnalyseText>,
  res: Response<CountCharacters["response"]>
) => {
  const text = req.body.text
  const status: CountCharacters["status"] = 200
  res.status(status).send({ result: 0 })
}

export const countWords = (
  req: Request<{}, {}, AnalyseText, CountWordsQueryParams>,
  res: Response<CountWords["response"]>
) => {
  if (req.query.filter != undefined) {
    if (req.query.filter == "unique") countUniqueWords(req, res)
    else if (req.query.filter == "in-longest-sentence")
      countWordsInLongestSentence(req, res)
    else res.status(404).send()
  }
  const text = req.body.text
  const status: CountWords["status"] = 200
  res.status(status).send({ result: 0 })
}

const countUniqueWords = (
  req: Request<{}, {}, AnalyseText, CountWordsQueryParams>,
  res: Response<CountWords["response"]>
) => {
  const text = req.body.text
  const status: CountWords["status"] = 200
  res.status(status).send({ result: -1 })
}

const countWordsInLongestSentence = (
  req: Request<{}, {}, AnalyseText, CountWordsQueryParams>,
  res: Response<CountWords["response"]>
) => {
  const text = req.body.text
  const status: CountWords["status"] = 200
  res.status(status).send({ result: -2 })
}

export const countSentences = (
  req: Request<{}, {}, AnalyseText>,
  res: Response<CountSentences["response"]>
) => {
  const text = req.body.text
  const status: CountSentences["status"] = 200
  res.status(status).send({ result: 0 })
}

export const countLines = (
  req: Request<{}, {}, AnalyseText>,
  res: Response<CountLines["response"]>
) => {
  const text = req.body.text
  const status: CountLines["status"] = 200
  res.status(status).send({ result: 0 })
}

export const countAnagrams = (
  req: Request<{}, {}, AnalyseText>,
  res: Response<CountAnagrams["response"]>
) => {
  const text = req.body.text
  const status: CountAnagrams["status"] = 200
  res.status(status).send({ result: 0 })
}
