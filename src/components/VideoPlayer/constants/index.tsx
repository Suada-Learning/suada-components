import { PlaybackSpeedItem } from '../PlaybackSpeedMenu.interface'

export const PLAYBACK_SPEED_LIST: PlaybackSpeedItem[] = [
  {
    label: 'playback_speed.2x',
    value: 2.0,
  },
  {
    label: 'playback_speed.1_75x',
    value: 1.75,
  },
  {
    label: 'playback_speed.1_5x',
    value: 1.5,
  },
  {
    label: 'playback_speed.1_25x',
    value: 1.25,
  },
  {
    label: 'general.normal',
    value: 1.0,
  },
  {
    label: 'playback_speed.0_75x',
    value: 0.75,
  },
  {
    label: 'playback_speed.0_5x',
    value: 0.5,
  },
]

// Seconds the rewind/forward controls and the arrow-key shortcuts jump by.
// Drives the tooltips, both seek handlers and the on-screen seek indicator.
// RewindIcon draws "15" as fixed glyph paths, so changing this also means
// redrawing src/icons/Rewind.tsx.
export const SEEK_INTERVAL_SECONDS = 15
