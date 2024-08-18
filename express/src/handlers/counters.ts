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
import {
  countAnagramsAlgorithm,
  countCharactersAlgorithm,
  countLinesAlgorithm,
  countSentencesAlgorithm,
  countUniqueWordsAlgorithm,
  countWordsAlgorithm,
  countWordsInLongestSentenceAlgorithm,
} from "./algorithms"

export const countCharacters = (
  req: Request<{}, {}, AnalyseText>,
  res: Response<CountCharacters["response"]>
) => {
  const resultValue = countCharactersAlgorithm(req.body.text)
  const status: CountCharacters["status"] = 200
  res.status(status).send({ result: resultValue })
}

export const countWords = (
  req: Request<{}, {}, AnalyseText, CountWordsQueryParams>,
  res: Response<CountWords["response"]>
) => {
  let resultValue = 0
  const status: CountWords["status"] = 200
  if (JSON.stringify(req.query) === "{}") {
    resultValue = countWordsAlgorithm(req.body.text)
    res.status(status).send({ result: resultValue })
  } else if (req.query.filter === undefined) {
    res.status(404).send()
  } else if (req.query.filter == "unique") {
    resultValue = countUniqueWordsAlgorithm(req.body.text)
    res.status(status).send({ result: resultValue })
  } else if (req.query.filter == "in-longest-sentence") {
    resultValue = countWordsInLongestSentenceAlgorithm(req.body.text)
    res.status(status).send({ result: resultValue })
  } else {
    res.status(404).send()
  }
}

export const countSentences = (
  req: Request<{}, {}, AnalyseText>,
  res: Response<CountSentences["response"]>
) => {
  const resultValue = countSentencesAlgorithm(req.body.text)
  const status: CountSentences["status"] = 200
  res.status(status).send({ result: resultValue })
}

export const countLines = (
  req: Request<{}, {}, AnalyseText>,
  res: Response<CountLines["response"]>
) => {
  const resultValue = countLinesAlgorithm(req.body.text)
  const status: CountLines["status"] = 200
  res.status(status).send({ result: resultValue })
}

export const countAnagrams = (
  req: Request<{}, {}, AnalyseText>,
  res: Response<CountAnagrams["response"]>
) => {
  const resultValue = countAnagramsAlgorithm(req.body.text)
  const status: CountAnagrams["status"] = 200
  res.status(status).send({ result: resultValue })
}
