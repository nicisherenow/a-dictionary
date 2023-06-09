export const findUsableMp3 = (array: any) => {
  let sample = ''

  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i].audio.endsWith('us.mp3') || array[i].audio.endsWith('us.ogg')) {
      sample = array[i].audio
      return sample
    } else if (array[i].audio.endsWith('uk.mp3')) {
      sample = array[i].audio
      return sample
    }
  }

  return sample
}
export type Definitions = {
  definition: string
  synonyms: string[]
  antonyms: string[]
  example: string
}

export type WordObj = {
  starter: string
  definitions: string[]
  synonyms: string[]
  mp3Url: string
};

export type Meanings = {
  partOfSpeech: string
  definitions: Definitions[]
  synonyms: string[]
  antonyms: string[]
}

export type WordInfo = {
  license: Object
  meanings: Meanings[]
  phonetic: string
  phonetics: object[]
  sourceUrls: string[]
  word: string
}
