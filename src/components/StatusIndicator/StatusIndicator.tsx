import React, { ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
import { GridStatusEnums, IStatusWrapperProps } from './status.interface'
import { CompanyStatusContainer, StatusWrapper } from './styled-components'

export const StatusIndicator = ({
  status = GridStatusEnums.SUSPENDED,
}: IStatusWrapperProps): ReactElement => {
  return (
    <StatusWrapper status={status}>
      {status.charAt(0) + status.slice(1).toLowerCase()}
    </StatusWrapper>
  )
}

export const CompanyStatusIndicator = ({
  $isActive = true,
}: {
  $isActive: boolean
}): ReactElement => {
  const { t } = useTranslation()
  return (
    <CompanyStatusContainer $isActive={$isActive}>
      {$isActive ? t('general.active') : t('general.disabled')}
    </CompanyStatusContainer>
  )
}
