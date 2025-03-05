import React from 'react'
import { Container, ItemWrapper, PathItem } from './styled-components'
import { useNavigate } from 'react-router'
import { IBreadcrumbItemV2, IBreadcrumbPropsV2 } from './types'
import { ChevronRightIcon } from '../../icons'

export const Breadcrumb: React.FC<IBreadcrumbPropsV2> = ({ data }) => {
  const navigate = useNavigate()

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    link: string,
    state: object | undefined = {},
  ): void => {
    event.preventDefault()
    navigate(link, {
      state,
    })
  }

  if (!data) return

  return (
    <Container>
      {data.map((item: IBreadcrumbItemV2, index) => (
        <React.Fragment key={index}>
          <PathItem>
            {item.icon}
            {item.link ? (
              <a href='/' onClick={(e): void => handleClick(e, item.link!, item.state)}>
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
