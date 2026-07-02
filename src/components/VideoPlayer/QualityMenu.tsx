import { FC } from 'react'

import { QualityMenuProps } from './QualityMenu.interface'
import {
  StyledQualityMenuWrapper,
  StyledQualityMenu,
  StyledQualityItem,
} from './QualityMenu.styles'
import useMenuToggle from './useMenuToggle'
import { SettingsOutlinedIcon, VideoCheckmarkIcon } from '../../icons'
import { useTranslation } from '../Providers/TranslationProvider/TranslationProvider'

const QualityMenu: FC<QualityMenuProps> = ({
  levels,
  selectedLevel,
  onLevelChange,
  menuWrapperClassName,
  labelIconClassName,
  customMenuWrapperStyles,
  customMenuStyles,
}) => {
  const { menuRef, isVisible: isMenuActive, menuPosition, toggleMenu } = useMenuToggle()
  const { t } = useTranslation()

  // Single-rendition or non-HLS sources have nothing to switch between.
  if (levels.length <= 1) return null

  return (
    <StyledQualityMenuWrapper
      ref={menuRef}
      className={menuWrapperClassName}
      style={customMenuWrapperStyles}
    >
      <SettingsOutlinedIcon className={labelIconClassName} onClick={toggleMenu} fill='#ffffff' />

      {isMenuActive && (
        <StyledQualityMenu $position={menuPosition} style={customMenuStyles}>
          <h2>{t('general.quality')}</h2>
          {levels.map(({ label, value }) => (
            <StyledQualityItem
              key={value}
              onClick={(): void => {
                onLevelChange(value)
                toggleMenu()
              }}
            >
              {label}
              {value === selectedLevel && <VideoCheckmarkIcon />}
            </StyledQualityItem>
          ))}
        </StyledQualityMenu>
      )}
    </StyledQualityMenuWrapper>
  )
}

export default QualityMenu
