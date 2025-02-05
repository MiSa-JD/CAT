import styles from './MeowBox.module.css'
import DoReMi from '../scripts/drmfslsd'
import { useState } from 'react'

export default function TextField({
  text = 'Type Something!',
  classNames
}: {
  text: string
  classNames: string
}) {
  let [item, setItem] = useState('')

  function DetectInput({ input }: { input: string }) {
    if (item.length < input.length) {
      DoReMi({ src: '/assets/meow.ogg' })
    } else {
    }
    setItem(input)
  }
  return (
    <label className={`${classNames}`}>
      <textarea
        className={`${styles.textField}`}
        placeholder={text}
        onInput={e => DetectInput({ input: e.currentTarget.value })}
      />
    </label>
  )
}
