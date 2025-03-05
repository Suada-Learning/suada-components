import React, { ReactElement } from 'react'
import { IProfilePictureProps } from './profilePicture.interface'
import { ProfilePictureWrapper } from './ProfilePicture.styles'

const ProfilePicture = ({
  imgSource,
  shadow,
  width,
  height,
}: IProfilePictureProps): ReactElement => (
  <ProfilePictureWrapper shadow={shadow} width={width} height={height}>
    <img src={imgSource} alt={imgSource} />
  </ProfilePictureWrapper>
)

export default ProfilePicture
