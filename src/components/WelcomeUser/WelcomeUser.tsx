import React, { ReactElement } from 'react'
import { IWelcomeUsersProps } from './welcomeUser.interface'
import { Content, Title } from './styled-components'
import ProfilePicture from '../ProfilePicture/ProfilePicture'

export const WelcomeUser = ({ isOpened, user }: IWelcomeUsersProps): ReactElement => {
  return (
    <Content isOpened={isOpened}>
      <ProfilePicture
        imgSource={
          user.avatar ||
          'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png'
        }
        width={isOpened ? 70 : 60}
        height={isOpened ? 70 : 60}
      />
      <Title isOpened={isOpened}>
        {isOpened
          ? `Hello, ${user.firstName} ${user.lastName}`
          : `${user.firstName.charAt(0)}${user.lastName.charAt(0)}`}
      </Title>
    </Content>
  )
}
