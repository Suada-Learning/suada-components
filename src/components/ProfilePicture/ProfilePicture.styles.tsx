import styled from 'styled-components'
import { IProfilePictureProps } from './profilePicture.interface'

export const ProfilePictureWrapper = styled.figure<IProfilePictureProps>`
  overflow: hidden;
  border-radius: 50%;
  width: ${({ width }): string => `${width}px;`};
  height: ${({ height }): string => `${height}px;`};
  box-shadow: ${({ shadow }): string => (shadow ? `0px 10px 10px rgba(0,0,0,0.2);` : `none`)};
`
