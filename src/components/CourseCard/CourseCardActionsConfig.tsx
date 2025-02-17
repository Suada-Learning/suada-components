import { EditSVG } from '../../icons/Edit'
import Typography from '@mui/material/Typography'
import { ActionConfig, DeleteSpan, DisabledTypography } from './CourseCard.styles'
import {
  IAction,
  IActionHandlerType,
  ICourse,
  IPermissionsBool,
  TranslationFunction,
} from './CourseCard.interface'
import React from 'react'
import { PlayButtonSVG } from '../../icons/PlayButton'
import { PlayGrayButtonSVG } from '../../icons/GrayPlayButton'
import { DeleteSVG } from '../../icons/DeleteIcon'
import { GrayDownloadSVG } from '../../icons/GrayDownloadIcon'
import { DownloadSVG } from '../../icons/DownloadIcon'

const getTypographyAndIcon = (
  isEnabled: boolean,
  Icon: React.ElementType,
  GrayIcon: React.ElementType,
): { TypographyComponent: React.ElementType; IconComponent: React.ElementType } => {
  return {
    TypographyComponent: isEnabled ? Typography : DisabledTypography,
    IconComponent: isEnabled ? Icon : GrayIcon,
  }
}

export const actionConfig = (
  handleClick: IActionHandlerType,
  permission: IPermissionsBool,
  t: TranslationFunction,
): IAction[] => [
  {
    render: (item: ICourse): JSX.Element => {
      return !item.isBought ? (
        <ActionConfig className='edit' onClick={(): void => handleClick('editCourse', item)}>
          <EditSVG />
          <Typography>{t('actions.edit')}</Typography>
        </ActionConfig>
      ) : (
        <React.Fragment />
      )
    },
  },
  {
    // Currently, the text is styled to appear disabled as the feature is not yet implemented
    render: (): JSX.Element => {
      const { TypographyComponent, IconComponent } = getTypographyAndIcon(
        false,
        DownloadSVG,
        GrayDownloadSVG,
      )
      return (
        <ActionConfig>
          <IconComponent />
          <TypographyComponent>{t('actions.download_syllabus')}</TypographyComponent>
        </ActionConfig>
      )
    },
  },
  {
    // The action is disabled if the course does not have an associated video
    render: (item: ICourse): JSX.Element => {
      const { TypographyComponent, IconComponent } = getTypographyAndIcon(
        !!item.video,
        PlayButtonSVG,
        PlayGrayButtonSVG,
      )
      return (
        <ActionConfig onClick={(): void => handleClick('playIntro', item)} disabled={!item.video}>
          <IconComponent />
          <TypographyComponent>{t('actions.play_intro')}</TypographyComponent>
        </ActionConfig>
      )
    },
  },
  {
    hide: !permission.deleteCourse,
    render: (item: ICourse): JSX.Element => (
      <ActionConfig className='delete' onClick={(): void => handleClick('deleteCourse', item.id)}>
        <DeleteSVG />
        <DeleteSpan>{t('actions.delete')}</DeleteSpan>
      </ActionConfig>
    ),
  },
]
