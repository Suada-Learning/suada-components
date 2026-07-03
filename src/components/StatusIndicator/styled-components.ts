import { styled } from 'styled-components'
import { GridStatusEnums, IStatusWrapperProps } from './status.interface'

export const StatusWrapper = styled.div<IStatusWrapperProps>`
  display: flex;
  align-items: center;
  text-align: center;
  width: 92px;
  font-size: 12px;
  padding: 4px 12px;
  border-radius: 4px;
  display: inline-block;

  background: ${({ status }): string => {
    switch (status) {
      case GridStatusEnums.ACTIVE:
        return '#e5f4ef'
      case GridStatusEnums.SUSPENDED:
        return '#fdebea'
      case GridStatusEnums.PENDING:
        return 'rgba(207, 207, 9, 0.1)'
      case GridStatusEnums.APPROVED:
        return '#e5f4ef'
      case GridStatusEnums.DECLINED:
      case GridStatusEnums.TRY_AGAIN:
        return '#fdebea'
      case GridStatusEnums.UNPUBLISHED:
        return '#FDEBEA'
      case GridStatusEnums.PUBLISHED:
        return '#E5F4EF'
      case GridStatusEnums.DRAFT:
        return 'rgba(0, 0, 0, 0.1)'
      default:
        return 'transparent'
    }
  }};

  color: ${({ status }): string => {
    switch (status) {
      case GridStatusEnums.ACTIVE:
        return '#00905e'
      case GridStatusEnums.SUSPENDED:
        return '#ea382a'
      case GridStatusEnums.PENDING:
        return 'rgb(207, 207, 9)'
      case GridStatusEnums.UNPUBLISHED:
        return '#EA382A'
      case GridStatusEnums.APPROVED:
        return '#00905E'
      case GridStatusEnums.DECLINED:
      case GridStatusEnums.TRY_AGAIN:
        return '#EA382A'
      case GridStatusEnums.PUBLISHED:
        return '#00905E'
      case GridStatusEnums.DRAFT:
        return 'rgba(0, 0, 0, 0.5)'
      default:
        return 'transparent'
    }
  }};
`

export const CompanyStatusContainer = styled.div<{ $isActive: boolean }>`
  font-size: 13px;
  color: #fff;
  height: 32px;
  padding: 4px 12px;
  text-transform: capitalize;
  border-radius: 4px;
  background: ${({ $isActive }): string => ($isActive ? '#08C694' : '#EA382A')};
  display: flex;
  align-items: center;
  justify-content: center;
`
