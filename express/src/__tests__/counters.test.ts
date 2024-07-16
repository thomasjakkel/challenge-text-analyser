import request, { Response } from "supertest"
import app from "../app"
import {
  CountAnagrams,
  CountCharacters,
  CountLines,
  CountSentences,
  CountWords,
} from "../types/api-types"
import {
  elevenSentences,
  hundredChars,
  hundredWords,
  tenLines,
  tenUniqueWords,
  tenWordsInLongestSentence,
  twoAnagrams,
} from "../mockData"

describe("COUNTERS", () => {
  describe("5. Count the total number of characters", () => {
    const status: CountCharacters["status"] = 200
    const responseType: CountCharacters["response"]["result"] = 0

    let response: Response
    beforeAll(async () => {
      response = await request(app)
        .post("/counters/characters")
        .send(hundredChars)
    })

    it("should respond with the correct type", () => {
      expect(typeof response.body.result).toEqual(typeof responseType)
    })

    it("should respond with the correct status code", () => {
      expect(response.status).toBe(status)
    })

    it("should count all characters in a given text correctly", () => {
      expect(response.body.result).toBe(100)
    })
  })

  describe("1. Implement the logic for counting words", () => {
    const status: CountWords["status"] = 200
    const responseType: CountWords["response"]["result"] = 0

    let response: Response
    beforeAll(async () => {
      response = await request(app).post("/counters/words").send(hundredWords)
    })

    it("should respond with the correct type", () => {
      expect(typeof response.body.result).toEqual(typeof responseType)
    })

    it("should respond with the correct status code", () => {
      expect(response.status).toBe(status)
    })

    it("should count all words in a given text correctly", () => {
      expect(response.body.result).toBe(100)
    })

    it("should respond with 404 for a wrong query parameter", async () => {
      response = await request(app)
        .post("/counters/words?filter=wrongFilter")
        .send(hundredWords)

      expect(response.status).toBe(404)
    })
  })

  describe("2. Calculate the number of unique words in the text", () => {
    const status: CountWords["status"] = 200
    const responseType: CountWords["response"]["result"] = 0

    let response: Response
    beforeAll(async () => {
      response = await request(app)
        .post("/counters/words?filter=unique")
        .send(tenUniqueWords)
    })

    it("should respond with the correct type", () => {
      expect(typeof response.body.result).toEqual(typeof responseType)
    })

    it("should respond with the correct status code", () => {
      expect(response.status).toBe(status)
    })

    it("should count the number of unique words in a given text correctly", () => {
      expect(response.body.result).toBe(10)
    })
  })

  describe("3. Count the number of sentences in the given text", () => {
    const status: CountSentences["status"] = 200
    const responseType: CountSentences["response"]["result"] = 0

    let response: Response
    beforeAll(async () => {
      response = await request(app)
        .post("/counters/sentences")
        .send(elevenSentences)
    })

    it("should respond with the correct type", () => {
      expect(typeof response.body.result).toEqual(typeof responseType)
    })

    it("should respond with the correct status code", () => {
      expect(response.status).toBe(status)
    })

    it("should count all sentences in a given text correctly", () => {
      expect(response.body.result).toBe(11)
    })
  })

  describe("4. Determine the number of words in the longest sentence", () => {
    const status: CountWords["status"] = 200
    const responseType: CountWords["response"]["result"] = 0

    let response: Response
    beforeAll(async () => {
      response = await request(app)
        .post("/counters/words?fiter=in-longest-sentence")
        .send(tenWordsInLongestSentence)
    })

    it("should respond with the correct type", () => {
      expect(typeof response.body.result).toEqual(typeof responseType)
    })

    it("should respond with the correct status code", () => {
      expect(response.status).toBe(status)
    })

    it("should count number of words in the longest sentence in a given text correctly", () => {
      expect(response.body.result).toBe(10)
    })
  })

  describe("6. Calculate the number of lines in the text", () => {
    const status: CountLines["status"] = 200
    const responseType: CountLines["response"]["result"] = 0

    let response: Response
    beforeAll(async () => {
      response = await request(app).post("/counters/lines").send(tenLines)
    })

    it("should respond with the correct type", () => {
      expect(typeof response.body.result).toEqual(typeof responseType)
    })

    it("should respond with the correct status code", () => {
      expect(response.status).toBe(status)
    })

    it("should count all lines in a given text correctly", () => {
      expect(response.body.result).toBe(10)
    })
  })

  describe("7. Identify and count the number of anagrams in the text", () => {
    const status: CountAnagrams["status"] = 200
    const responseType: CountAnagrams["response"]["result"] = 0

    let response: Response
    beforeAll(async () => {
      response = await request(app).post("/counters/anagrams").send(twoAnagrams)
    })

    it("should respond with the correct type", () => {
      expect(typeof response.body.result).toEqual(typeof responseType)
    })

    it("should respond with the correct status code", () => {
      expect(response.status).toBe(status)
    })

    it("should count the number of anagrams in a given text correctly", () => {
      expect(response.body.result).toBe(2)
    })
  })
})
