import { FC } from 'react'

import { PLAYBACK_SPEED_LIST } from './constants'
import { PlaybackSpeedMenuProps } from './PlaybackSpeedMenu.interface'
import {
  StyledPlaybackMenuWrapper,
  StyledPlaybackMenu,
  StyledPlaybackSpeedItem,
} from './PlaybackSpeedMenu.styles'
import useMenuToggle from './useMenuToggle'
import { MeterIcon, VideoCheckmarkIcon } from '../../icons'
import { useTranslation } from '../Providers/TranslationProvider/TranslationProvider'

const PlaybackSpeedMenu: FC<PlaybackSpeedMenuProps> = ({
  playbackSpeed,
  onPlaybackSpeedChange,
  menuWrapperClassName,
  labelIconClassName,
  customMenuWrapperStyles,
  customMenuStyles,
}) => {
  const { menuRef, isVisible: isMenuActive, menuPosition, toggleMenu } = useMenuToggle()
  const { t } = useTranslation()

  return (
    <StyledPlaybackMenuWrapper
      ref={menuRef}
      className={menuWrapperClassName}
      style={customMenuWrapperStyles}
    >
      <MeterIcon className={labelIconClassName} onClick={toggleMenu} />

      {isMenuActive && (
        <StyledPlaybackMenu $position={menuPosition} style={customMenuStyles}>
          <h2>{t('general.playback_speed')}</h2>
          {PLAYBACK_SPEED_LIST.map(({ label, value }, index) => (
            <StyledPlaybackSpeedItem
              key={index}
              onClick={(): void => {
                onPlaybackSpeedChange(value)
                toggleMenu()
              }}
            >
              {t(label)}
              {value === playbackSpeed && <VideoCheckmarkIcon />}
            </StyledPlaybackSpeedItem>
          ))}
        </StyledPlaybackMenu>
      )}
    </StyledPlaybackMenuWrapper>
  )
}

export default PlaybackSpeedMenu
