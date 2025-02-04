export interface IAction {
  id?: string
  label?: string | JSX.Element
  width?: string
  hide?: boolean
  disablePadding?: boolean
  numeric?: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render: (item: any, index?: number) => JSX.Element
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
