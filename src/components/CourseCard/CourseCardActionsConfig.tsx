import { Edit } from '../../icons/Edit'
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
import { PlayButton } from '../../icons/PlayButton'
import { PlayGrayButton } from '../../icons/GrayPlayButton'
import { Delete } from '../../icons/Delete'
import { GrayDownload } from '../../icons/GrayDownloadIcon'
import { DownloadIcon } from '../../icons/DownloadIcon'

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
          <Edit />
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
        DownloadIcon,
        GrayDownload,
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
        PlayButton,
        PlayGrayButton,
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
        <Delete />
        <DeleteSpan>{t('actions.delete')}</DeleteSpan>
      </ActionConfig>
    ),
  },
]
