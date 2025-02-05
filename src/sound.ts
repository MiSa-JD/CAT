class StaticAudio {
  static audioContext = new AudioContext()
}

export default async function soundplay({
  src,
  pitch = 1.0
}: {
  src: string
  pitch: number
}) {
  const audioContextRef = StaticAudio.audioContext
  if (audioContextRef.state === 'suspended') {
    await audioContextRef.resume()
  }

  try {
    const response = await fetch(src)
    const arrayBuffer = await response.arrayBuffer()
    const audioBuffer = await audioContextRef.decodeAudioData(arrayBuffer)

    const source = audioContextRef.createBufferSource()
    source.buffer = audioBuffer
    source.playbackRate.value = pitch
    source.connect(audioContextRef.destination)
    source.start(0)
  } catch (error) {
    console.error('audio play fail:', error)
  }
}
