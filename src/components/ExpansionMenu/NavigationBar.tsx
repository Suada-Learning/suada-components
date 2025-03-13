import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Container } from './styled-components'

import ExpansionItem from './ExpansionItem'
import ExpansionNavMenu from './ExpansionNavMenu'

import { IExpansionItemProps } from './ExpansionItem.interface'
import { IPermissionsBool, IUser, IUserCompany } from '../CourseCard/CourseCard.interface'
import { getAllNavigation } from './routerConfig'

const mockUser: IUser = {
  id: 'user1',
  role: 'SUPER_ADMIN',
  companyId: 'company1',
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@gmail.com',
}

const NavigationBarComponent: React.FC<IExpansionItemProps> = ({
  isOpened,
  currentUser,
  checkRole,
  state,
}) => {
  const role = checkRole && checkRole(currentUser?.role as string, !!currentUser?.companyId)
  const routerData = getAllNavigation(
    state?.userPermission || ({} as IPermissionsBool),
    state?.currentUser || (mockUser as IUser),
    state?.selectedCompany as IUserCompany,
  )

  return (
    <Container $isOpened={isOpened as boolean}>
      {routerData.map((item, index) =>
        item.children ? (
          <ExpansionNavMenu item={item} index={index} key={index} isOpened={isOpened} role={role} />
        ) : (
          <ExpansionItem item={item} index={index} key={index} isOpened={isOpened} role={role} />
        ),
      )}
    </Container>
  )
}

export const NavigationBar: React.FC<IExpansionItemProps> = props => (
  <NavigationBarComponent {...props} />
)
