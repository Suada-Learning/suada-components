export interface IRangeSliderProps {
  label?: string
  style?: React.CSSProperties
  name?: string
  value?: number[]
  onRangeChange: (newValue: number | number[], name: string) => void
  min?: number
  max?: number
}
