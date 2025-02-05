import { ICourse } from '../CourseCard/CourseCard.interface'

export interface IAction {
  render: (item: ICourse) => JSX.Element
  hide?: boolean
}

export interface IKebabAction {
  id: number
  color: string
  tooltipText: string
  disabled: boolean
  onClick: () => void
  component: React.JSX.Element
}

export interface IGridActionMenuProps {
  actionConfig?: IAction[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  row?: any
  icon?: JSX.Element
  button?: JSX.Element
}
