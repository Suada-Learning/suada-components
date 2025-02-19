import React, { ReactElement, useState, MouseEvent } from 'react'
import { Wrapper, Title, PopoverContent } from './styled-components'
import Popover from '@mui/material/Popover'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { IUser } from '../CourseCard/CourseCard.interface'
import { useTranslation } from '../Providers/TranslationProvider/TranslationProvider'
import ProfilePicture from '../ProfilePicture/ProfilePicture'
import { Logout, MyProfile } from '../../svg'

export const ProfileDropdown = ({
  user,
  logout,
  navigate,
}: {
  user: IUser
  logout: () => void
  navigate: (path: string) => void
}): ReactElement => {
  const { t } = useTranslation()
  const [anchorEl, setAnchorEl] = useState<Element | null>(null)

  const handleClick = (event: MouseEvent<HTMLSpanElement>): void => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = (): void => {
    setAnchorEl(null)
  }

  const handleProfileClick = (): void => {
    handleClose()
    navigate(`/user-profile/${user.id}`)
  }

  const onLogoutClick = (): void => {
    handleClose()
    logout()
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <div>
      <Wrapper role='button' open={open} aria-describedby={id} onClick={handleClick}>
        <ProfilePicture
          imgSource={
            user.avatarThumbnail ||
            user.avatar ||
            'https://ib-assets-public.s3.eu-west-2.amazonaws.com/profilePicture.svg'
          }
          width={25}
          height={25}
        />
        <Title>{`${user.firstName} ${user.lastName}`}</Title>
        <ExpandMoreIcon
          style={{
            color: '#02020f',
            transition: 'transform 0.3s',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </Wrapper>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        slotProps={{
          paper: {
            style: {
              borderRadius: 8,
            },
          },
        }}
      >
        <PopoverContent>
          <div onClick={handleProfileClick}>
            <div>
              <MyProfile />
            </div>
            <span>{`${t('general.my')} ${t('general.profile')}`}</span>
          </div>
          <div onClick={onLogoutClick}>
            <div>
              <Logout />
            </div>
            <span>{t('actions.log_out')}</span>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
