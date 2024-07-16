export type Paths = {
  "/counters/characters": { post: Operations["CountCharacters"] }
  /** @description Counting words. Use filter to specify which words should be counted */
  "/counters/words": { post: Operations["CountWords"] }
  "/counters/sentences": { post: Operations["CountSentences"] }
  "/counters/lines": { post: Operations["CountLines"] }
  "/counters/anagrams": { post: Operations["LongestAnagram"] }
  "/task-items/characters": { post: Operations["MostUsedCharacter"] }
  "/task-items/words": { post: Operations["MostUsedWord"] }
  "/task-items/reading-time": { post: Operations["AverageReadingTime"] }
  "/task-items/anagrams": { post: Operations["LongestAnagram"] }
  "/task-items/palindromes": {
    post: Operations["LongestPalindromicSubstring"]
  }
}

type Components = {
  AnalyseText: string[]
}

export type Operations = {
  CountCharacters: {
    requestBody: {
      content: {
        "application/json": Components["AnalyseText"]
      }
    }
    responses: {
      message: number
      status: 200
    }
  }
  CountWords: {
    query?: {
      /** @description filter which words should be counted */
      filter?: "unique" | "in-longest-sentence"
    }
    requestBody: {
      content: {
        "application/json": Components["AnalyseText"]
      }
    }
    responses: {
      message: number
      status: 200
    }
  }
  CountSentences: {
    requestBody: {
      content: {
        "application/json": Components["AnalyseText"]
      }
    }
    responses: {
      message: number
      status: 200
    }
  }
  CountLines: {
    requestBody: {
      content: {
        "application/json": Components["AnalyseText"]
      }
    }
    responses: {
      message: number
      status: 200
    }
  }
  CountAnagrams: {
    requestBody: {
      content: {
        "application/json": Components["AnalyseText"]
      }
    }
    responses: {
      message: number
      status: 200
    }
  }
  MostUsedCharacter: {
    requestBody: {
      content: {
        "application/json": Components["AnalyseText"]
      }
    }
    responses: {
      message: string
      status: 200
    }
  }
  MostUsedWord: {
    requestBody: {
      content: {
        "application/json": Components["AnalyseText"]
      }
    }
    responses: {
      message: string
      status: 200
    }
  }
  AverageReadingTime: {
    requestBody: {
      content: {
        "application/json": Components["AnalyseText"]
      }
    }
    responses: {
      message: number
      status: 200
    }
  }
  LongestAnagram: {
    requestBody: {
      content: {
        "application/json": Components["AnalyseText"]
      }
    }
    responses: {
      message: string
      status: 200
    }
  }
  LongestPalindromicSubstring: {
    requestBody: {
      content: {
        "application/json": Components["AnalyseText"]
      }
    }
    responses: {
      message: string
      status: 200
    }
  }
}
