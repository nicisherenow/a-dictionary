export const findUsableMp3 = (array: any) => {
  let sample = ''

  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i].audio.endsWith('us.mp3')) {
      sample = array[i].audio
      return sample
    } else if (array[i].audio.endsWith('uk.mp3')) {
      sample = array[i].audio
      return sample
    }
  }

  return sample
}
