import request, { Response } from "supertest"
import app from "../app"
import {
  AverageReadingTime,
  LongestAnagram,
  LongestPalindromicSubstring,
  MostUsedCharacter,
  MostUsedWord,
} from "../types/api-types"
import {
  averageReadingTimeOneMinute,
  longestAnagram,
  longestPalindromicSubstring,
  mostUsedCharL,
  mostUsedWordLorem,
  tenLines,
} from "../mockData"

describe("TASK ITEMS", () => {
  describe("1. Find the most used character in the text", () => {
    const status: MostUsedCharacter["status"] = 200
    const responseType: MostUsedCharacter["response"]["result"] = ""

    let response: Response
    beforeAll(async () => {
      response = await request(app)
        .post("/task-items/characters")
        .send(mostUsedCharL)
    })

    it("should respond with the correct type", () => {
      expect(typeof response.body.result).toEqual(typeof responseType)
    })

    it("should respond with the correct status code", () => {
      expect(response.status).toBe(status)
    })

    it("should find the most used character in a given text correctly", () => {
      expect(response.body.result).toBe("l")
    })
  })

  describe("2. Determine the most frequent word in the text", () => {
    const status: MostUsedWord["status"] = 200
    const responseType: MostUsedWord["response"]["result"] = ""

    let response: Response
    beforeAll(async () => {
      response = await request(app)
        .post("/task-items/words")
        .send(mostUsedWordLorem)
    })

    it("should respond with the correct type", () => {
      expect(typeof response.body.result).toEqual(typeof responseType)
    })

    it("should respond with the correct status code", () => {
      expect(response.status).toBe(status)
    })

    it("should find the most used word in a given text correctly", () => {
      expect(response.body.result).toBe("lorem")
    })
  })

  describe("3. Calculate the average reading time for the text", () => {
    const status: AverageReadingTime["status"] = 200
    const responseType: AverageReadingTime["response"]["result"] = 0

    let response: Response
    beforeAll(async () => {
      response = await request(app)
        .post("/task-items/reading-time")
        .send(averageReadingTimeOneMinute)
    })

    it("should respond with the correct type", () => {
      expect(typeof response.body.result).toEqual(typeof responseType)
    })

    it("should respond with the correct status code", () => {
      expect(response.status).toBe(status)
    })

    // 220 words per minute
    it("should calculate the average reading time in [min] in a given text correctly", () => {
      expect(response.body.result).toBe(1)
    })
  })

  describe("4. Identify and count the longest anagram in the text", () => {
    const status: LongestAnagram["status"] = 200
    const responseType: LongestAnagram["response"]["result"] = ""

    let response: Response
    beforeAll(async () => {
      response = await request(app)
        .post("/task-items/anagrams")
        .send(longestAnagram)
    })

    it("should respond with the correct type", () => {
      expect(typeof response.body.result).toEqual(typeof responseType)
    })

    it("should respond with the correct status code", () => {
      expect(response.status).toBe(status)
    })

    it("should find the longest anagram in a given text correctly", () => {
      expect(response.body.result).toBe("abcdefgihj")
    })
  })

  describe("5. Find the longest palindromic substring in the text", () => {
    const status: LongestPalindromicSubstring["status"] = 200
    const responseType: LongestPalindromicSubstring["response"]["result"] = ""

    let response: Response
    beforeAll(async () => {
      response = await request(app)
        .post("/task-items/palindromes")
        .send(longestPalindromicSubstring)
    })

    it("should respond with the correct type", () => {
      expect(typeof response.body.result).toEqual(typeof responseType)
    })

    it("should respond with the correct status code", () => {
      expect(response.status).toBe(status)
    })

    it("should find the longest palindromic substring in a given text correctly", () => {
      expect(response.body.result).toBe("rentttner")
    })
  })
})
