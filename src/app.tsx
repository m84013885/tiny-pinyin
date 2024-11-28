import { useState, useMemo } from 'preact/hooks'
import { getPinyinForString } from 'tiny-pinyin-mw'

export function App() {
  const [value, setValue] = useState('')

  const pinyin = useMemo(() => {
    const tokens = getPinyinForString(value)
    return tokens.map(token => token).join(' ')
  }, [value])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <input style={{ width: '50%', height: '2rem', fontSize: '1.5rem' }} type="text" value={value} onInput={(e) => setValue((e.target as HTMLInputElement).value)} />
      <div style={{ fontSize: '1.5rem', paddingTop: '10px' }}>{pinyin}</div>
    </div>
  )
}
