export interface IBreadcrumbV2 {
  title: string
}
export interface IBreadcrumbItemV2 {
  label: string
  link?: string
  icon?: React.ReactNode
  state?: { id: number; name: string } | object
}

export interface IBreadcrumbPropsV2 {
  data: IBreadcrumbItemV2[]
}
