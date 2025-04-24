import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Container, ItemWrapper, PathItem } from './styled-components'
import { IBreadcrumbItemV2, IBreadcrumbPropsV2 } from './types'
import { ChevronRightIcon } from '../../icons'

const BreadcrumbWithRouter: React.FC<IBreadcrumbPropsV2> = ({ data }) => {
  const navigate = useNavigate()

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    link: string,
    state: object | undefined = {},
  ): void => {
    event.preventDefault()
    navigate(link, { state })
  }

  if (!data) return null

  return (
    <Container>
      {data.map((item: IBreadcrumbItemV2, index) => (
        <React.Fragment key={index}>
          <PathItem>
            {item.icon}
            {item.link ? (
              <a href={item.link} onClick={(e): void => handleClick(e, item.link!, item.state)}>
                {item.label}
              </a>
            ) : (
              <ItemWrapper>{item.label}</ItemWrapper>
            )}
          </PathItem>
          {index < data.length - 1 && (index === 0 ? <ChevronRightIcon /> : <span> / </span>)}
        </React.Fragment>
      ))}
    </Container>
  )
}

const BreadcrumbWithoutRouter: React.FC<IBreadcrumbPropsV2> = ({ data }) => {
  if (!data) return null

  return (
    <Container>
      {data.map((item: IBreadcrumbItemV2, index) => (
        <React.Fragment key={index}>
          <PathItem>
            {item.icon}
            {item.link ? (
              <a href={item.link}>{item.label}</a>
            ) : (
              <ItemWrapper>{item.label}</ItemWrapper>
            )}
          </PathItem>
          {index < data.length - 1 && (index === 0 ? <ChevronRightIcon /> : <span> / </span>)}
        </React.Fragment>
      ))}
    </Container>
  )
}

export const Breadcrumb: React.FC<IBreadcrumbPropsV2> = props => {
  const isInRouterContext = React.useMemo(() => {
    try {
      useLocation()
      return true
    } catch (e) {
      return false
    }
  }, [])

  try {
    if (isInRouterContext) {
      return <BreadcrumbWithRouter {...props} />
    }
  } catch (e) {
    console.warn('Router context not detected, using regular links in breadcrumb')
  }

  return <BreadcrumbWithoutRouter {...props} />
}
