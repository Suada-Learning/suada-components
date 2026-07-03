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

// Translation fallbacks for playback speed labels
const getTranslationFallback = (key: string): string => {
  const translations: Record<string, string> = {
    'general.playback_speed': 'Playback Speed',
    "general.normal": "Normal",
    'playback_speed.2x': '2x',
    'playback_speed.1_75x': '1.75x',
    'playback_speed.1_5x': '1.5x',
    'playback_speed.1_25x': '1.25x',
    'playback_speed.1x': '1x',
    'playback_speed.0_75x': '0.75x',
    'playback_speed.0_5x': '0.5x',
  }
  return translations[key] || key
}

const PlaybackSpeedMenu: FC<PlaybackSpeedMenuProps> = ({
  playbackSpeed,
  onPlaybackSpeedChange,
  menuWrapperClassName,
  labelIconClassName,
  customMenuWrapperStyles,
  customMenuStyles,
}) => {
  const { menuRef, isVisible: isMenuActive, menuPosition, toggleMenu } = useMenuToggle()

  return (
    <StyledPlaybackMenuWrapper
      ref={menuRef}
      className={menuWrapperClassName}
      style={customMenuWrapperStyles}
    >
      <MeterIcon className={labelIconClassName} onClick={toggleMenu} />

      {isMenuActive && (
        <StyledPlaybackMenu $position={menuPosition} style={customMenuStyles}>
          <h2>{getTranslationFallback('general.playback_speed')}</h2>
          {PLAYBACK_SPEED_LIST.map(({ label, value }, index) => (
            <StyledPlaybackSpeedItem
              key={index}
              onClick={(): void => {
                onPlaybackSpeedChange(value)
                toggleMenu()
              }}
            >
              {getTranslationFallback(label)}
              {value === playbackSpeed && <VideoCheckmarkIcon />}
            </StyledPlaybackSpeedItem>
          ))}
        </StyledPlaybackMenu>
      )}
    </StyledPlaybackMenuWrapper>
  )
}

export default PlaybackSpeedMenu
