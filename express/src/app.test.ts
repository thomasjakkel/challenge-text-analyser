import request from "supertest"
import app from "./app"
import { CountCharacters } from "./types/api-types"
import { Response } from "express"
import { AnalyseText } from "./types/text-analyser.dto"
import { hundredChars } from "./types/mockData"

describe("5. Count the total number of characters", () => {
  const status: CountCharacters["status"] = 200
  const responseType: CountCharacters["response"]["result"] = 0

  it("should respond with the correct type", async () => {
    const response = await request(app)
      .post("/counters/characters")
      .send(hundredChars)
    expect(typeof response.body.result).toEqual(typeof responseType)
  })

  it("should respond with the correct status code", async () => {
    const response = await request(app)
      .post("/counters/characters")
      .send(hundredChars)
    expect(response.status).toBe(status)
  })

  it("should count all characters in a given text correctly", async () => {
    const response = await request(app)
      .post("/counters/characters")
      .send(hundredChars)
    expect(response.body.result).toBe(100)
  })
})

// 1. Implement the logic for counting words.
// 2. Calculate the number of unique words in the text.
// 3. Count the number of sentences in the given text.
// 4. Determine the number of words in the longest sentence.
// 5. Count the total number of characters in the text.
// 6. Calculate the number of lines in the text.
// 7. Identify and count the number of anagrams in the text.

// ### Text Analysis Task Items
// 1. Find the most used character in the text.
// 2. Determine the most frequent word in the text.
// 3. Calculate the average reading time for the text (assume an average reading speed).
// 4. Identify and count the longest anagram in the text.
// 5. Find the longest palindromic substring in the text.
