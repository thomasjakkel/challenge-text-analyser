import { Request, Response } from "express"
import { AnalyseText } from "../types/text-analyser.dto"
import {
  AverageReadingTime,
  LongestAnagram,
  LongestPalindromicSubstring,
  MostUsedCharacter,
  MostUsedWord,
} from "../types/api-types"

export const mostUsedCharacter = (
  req: Request<{}, {}, AnalyseText>,
  res: Response<MostUsedCharacter["response"]>
) => {
  const text = req.body.text
  const status: MostUsedCharacter["status"] = 200
  res.status(status).send({ result: "" })
}

export const mostUsedWord = (
  req: Request<{}, {}, AnalyseText>,
  res: Response<MostUsedWord["response"]>
) => {
  const text = req.body.text
  const status: MostUsedWord["status"] = 200
  res.status(status).send({ result: "" })
}

export const averageReadingTime = (
  req: Request<{}, {}, AnalyseText>,
  res: Response<AverageReadingTime["response"]>
) => {
  const text = req.body.text
  const status: AverageReadingTime["status"] = 200
  res.status(status).send({ result: 0 })
}

export const longestAnagram = (
  req: Request<{}, {}, AnalyseText>,
  res: Response<LongestAnagram["response"]>
) => {
  const text = req.body.text
  const status: LongestAnagram["status"] = 200
  res.status(status).send({ result: "" })
}

export const longestPalindromicSubstring = (
  req: Request<{}, {}, AnalyseText>,
  res: Response<LongestPalindromicSubstring["response"]>
) => {
  const text = req.body.text
  const status: LongestPalindromicSubstring["status"] = 200
  res.status(status).send({ result: "" })
}
