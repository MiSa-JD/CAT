import soundplay from '../sound'

let count: number = 0
const pitches = [0, 1, 2, 3, 4, 5.5, 7.5, 8.75]

export default function DoReMi({ src }: { src: string }) {
  if (count >= 8) count = 0
  soundplay({ src: src, pitch: 1 + 0.1 * pitches[count] })

  ++count
}
