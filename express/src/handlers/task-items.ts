import { Request, Response } from "express"
import { AnalyseText } from "../types/text-analyser.dto"
import {
  AverageReadingTime,
  LongestAnagram,
  LongestPalindromicSubstring,
  MostUsedCharacter,
  MostUsedWord,
} from "../types/api-types"
import {
  averageReadingTimeAlgorithm,
  longestAnagramAlgorithm,
  longestPalindromicSubstringAlgorithm,
  mostUsedCharacterAlgorithm,
  mostUsedWordAlgorithm,
} from "./algorithms"

export const mostUsedCharacter = (
  req: Request<{}, {}, AnalyseText>,
  res: Response<MostUsedCharacter["response"]>
) => {
  const resultValue = mostUsedCharacterAlgorithm(req.body.text)
  const status: MostUsedCharacter["status"] = 200
  res.status(status).send({ result: resultValue })
}

export const mostUsedWord = (
  req: Request<{}, {}, AnalyseText>,
  res: Response<MostUsedWord["response"]>
) => {
  const resultValue = mostUsedWordAlgorithm(req.body.text)
  const status: MostUsedWord["status"] = 200
  res.status(status).send({ result: resultValue })
}

export const averageReadingTime = (
  req: Request<{}, {}, AnalyseText>,
  res: Response<AverageReadingTime["response"]>
) => {
  const resultValue = averageReadingTimeAlgorithm(req.body.text)
  const status: AverageReadingTime["status"] = 200
  res.status(status).send({ result: resultValue })
}

export const longestAnagram = (
  req: Request<{}, {}, AnalyseText>,
  res: Response<LongestAnagram["response"]>
) => {
  const resultValue = longestAnagramAlgorithm(req.body.text)
  const status: LongestAnagram["status"] = 200
  res.status(status).send({ result: resultValue })
}

export const longestPalindromicSubstring = (
  req: Request<{}, {}, AnalyseText>,
  res: Response<LongestPalindromicSubstring["response"]>
) => {
  const resultValue = longestPalindromicSubstringAlgorithm(req.body.text)
  const status: LongestPalindromicSubstring["status"] = 200
  res.status(status).send({ result: resultValue })
}
