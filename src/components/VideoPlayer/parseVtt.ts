export interface SubtitleEntry {
  start: number
  end: number
  text: string
}

export function parseVTT(content: string): SubtitleEntry[] {
  const lines = content.split(/\r?\n/)
  const entries: SubtitleEntry[] = []

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('-->')) {
      const times = lines[i].split(' --> ')

      if (times.length === 2) {
        const start = hmsToSeconds(times[0])
        const end = hmsToSeconds(times[1])

        let text = ''
        i++

        while (i < lines.length && lines[i].trim() !== '') {
          text += lines[i] + ' '
          i++
        }

        entries.push({
          start,
          end,
          text: text.trim(),
        })
      }
    }
  }

  function hmsToSeconds(str: string): number {
    const p = str.split(':')
    let s = 0,
      m = 1
    while (p.length > 0) {
      s += m * parseFloat(p.pop() || '0')
      m *= 60
    }
    return s
  }

  return entries
}
