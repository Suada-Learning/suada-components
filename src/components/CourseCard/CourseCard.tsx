import { ReactElement } from 'react'
import { Checkbox, IconButton } from '@mui/material'
import { Tooltip } from '@mui/material'
import { GroupOutlined, GroupsOutlined, RecordVoiceOverOutlined } from '@mui/icons-material'

import {
  CardActionBar,
  CourseStatusContainer,
  GridItemLessons,
  ItemBlock,
  StyledActionItem,
  StyledActionsContainer,
  StyledCardBottomContainer,
  StyledChecked,
  StyledCourseCardContent,
  StyledItemWrapper,
  StyledToolTipContainer,
  StylesCardWrapper,
  TooltipContent,
  GridItem,
  GridItemImage,
  GridItemContent,
  GridItemWrapper,
  GridItemContentHeader,
  GridItemTitle,
} from './CourseCard.styles'
import TooltipHeight from '../../helperFunctions/TooltipHeight'
import { Edit } from '../../icons/Edit'
import { PlayButton } from '../../icons/PlayButton'
import { Unlock } from '../../icons/Unlock'
import { Group, ICourseCardProps, IUser } from './CourseCard.interface'
import { useTranslation } from 'react-i18next'
import { GridActionMenu } from '../GridActionMenu'

export const CourseCard = ({
  item,
  $canOpen,
  fromCertificateBuilder,
  fromWizard,
  actions,
  groupId,
  user,
  getCourseLevel,
  formatDuration,
  actionHandler,
  selectedItem,
  courseoriginalid,
  navigate,
  RedirectToCourse,
  selectItem,
  getCourseState,
  gridStyle,
  companyMode,
  activeTab,
  withTooltips,
  state,
}: ICourseCardProps): ReactElement => {
  const { t } = useTranslation()
  return (
    <StylesCardWrapper
      className='wrapper course-card'
      key={item.id}
      $canOpen={$canOpen}
      onClick={(): void => {
        if ($canOpen) {
          if (fromCertificateBuilder) {
            navigate(`/certificate-builder/${courseoriginalid}`)
          } else {
            RedirectToCourse(item)
          }
        }
      }}
    >
      {fromWizard && selectedItem && selectedItem.includes(item.id) && <StyledChecked />}
      <CardActionBar $switched={!!(gridStyle === 'card')}>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              zIndex: 3,
              alignItems: fromWizard ? 'center' : '',
              transform: fromWizard ? 'none' : 'scale(1)',
              display: fromCertificateBuilder ? 'none' : fromWizard ? 'flex' : 'block',
            }}
          >
            {fromWizard && (
              <Checkbox
                onChange={(): void => selectItem && selectItem(item.id)}
                checked={selectedItem && selectedItem.includes(item.id)}
              />
            )}
            <CourseStatusContainer $status={item.state === 'published'}>
              {item.finished === 3 ? getCourseState(item.state || '') : t('courses_layout.draft')}
            </CourseStatusContainer>
          </div>
          {actions && actions.length > 0 && (
            <div className='action_block'>
              <GridActionMenu actionConfig={actions} row={item} />
            </div>
          )}
        </div>
      </CardActionBar>
      <GridItem $isFromUser={Boolean(groupId || user)}>
        <GridItemImage>
          <img
            src={
              (item.avatar && item.avatar.link) ||
              'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSHw6OeiQMdYX_iXu8otmzMnlbD07xEWr87EMnJ5r4X9vYC-kNr&usqp=CAU'
            }
          />
        </GridItemImage>
        <GridItemContent>
          <GridItemWrapper style={{ justifyContent: 'space-between' }}>
            <ItemBlock>
              {item.level && (
                <>
                  {t('course_details.level')}: {getCourseLevel(item.level as string)}
                </>
              )}
            </ItemBlock>
            <ItemBlock style={{ color: 'green' }}>
              {item.currency}
              {item.price
                ? item.price.includes('.')
                  ? item.price
                  : `${item.price}.00`
                : t('courses_layout.free')}
            </ItemBlock>
          </GridItemWrapper>
          <GridItemContentHeader>
            <GridItemTitle style={{ marginTop: '8px' }}>
              <TooltipHeight text={item.name} lines={3} />
            </GridItemTitle>
          </GridItemContentHeader>
          <StyledItemWrapper></StyledItemWrapper>
        </GridItemContent>
      </GridItem>
      <StyledCardBottomContainer style={{ textTransform: 'capitalize' }}>
        <>
          <GridItemLessons
            checked={fromWizard && selectedItem && selectedItem.includes(item.id) ? true : false}
          >
            <StyledCourseCardContent>
              {item.numberOfModules} {t('general.modules')}
            </StyledCourseCardContent>
            <StyledCourseCardContent>
              {item.numberOfLessons} {t('general.lessons')}
            </StyledCourseCardContent>
            <StyledCourseCardContent>{formatDuration(item.duration || 0)}</StyledCourseCardContent>
          </GridItemLessons>

          {actionHandler && !item.isBought && (
            <StyledActionsContainer>
              <StyledActionItem
                color='#20a8c6'
                onClick={(e: React.MouseEvent<HTMLButtonElement>): void => {
                  if (typeof actionHandler === 'function') {
                    actionHandler('editCourse', item)
                  }
                  e.stopPropagation()
                }}
                style={{ borderRight: '1px solid #D6DAE0' }}
              >
                <Edit /> {t('actions.edit')}
              </StyledActionItem>
              <StyledActionItem
                color='#d0524b'
                disabled={!item.video}
                onClick={(e: React.MouseEvent<HTMLButtonElement>): void => {
                  if (item.video && typeof actionHandler === 'function') {
                    actionHandler('playIntro', item)
                    e.stopPropagation()
                  }
                  e.stopPropagation()
                }}
              >
                <PlayButton /> {t('actions.play_intro')}
              </StyledActionItem>

              {companyMode && activeTab != 0 && (
                <StyledActionItem
                  disabled={state.userPermission?.publishCourse === false}
                  color={item.state === 'published' ? ' #EA382A' : '#00905E'}
                  style={{ borderLeft: '1px solid #D6DAE0' }}
                  onClick={(e: React.MouseEvent<HTMLButtonElement>): void => {
                    if (actionHandler) {
                      actionHandler(
                        'publishedUnPublished',
                        item.id,
                        item.state === 'unpublished' ? 'published' : 'unpublished',
                      )
                    }
                    e.stopPropagation()
                  }}
                >
                  <Unlock />
                  {item.state === 'published' ? t('actions.unpublish') : t('actions.publish')}
                </StyledActionItem>
              )}
            </StyledActionsContainer>
          )}
        </>
      </StyledCardBottomContainer>
      {withTooltips && (
        <StyledToolTipContainer>
          <hr style={{ opacity: '.1', margin: 0 }} />
          <GridItemWrapper style={{ justifyContent: 'space-around', flexDirection: 'row' }}>
            <Tooltip
              arrow
              title={
                <TooltipContent>
                  <span>
                    {(item.coaches?.length && t('general.coaches')) || t('general.no_coaches')}
                  </span>
                  <div>
                    {(item.coaches &&
                      (item.coaches as IUser[]).map(
                        (i, index: number) =>
                          `${i.firstName} ${i.lastName} ${(index !== 0 && `,`) || ''} `,
                      )) ||
                      0}
                  </div>
                </TooltipContent>
              }
            >
              <IconButton style={{ padding: '9px' }}>
                <RecordVoiceOverOutlined fontSize='small' />
              </IconButton>
            </Tooltip>

            <Tooltip
              arrow
              title={
                <TooltipContent>
                  <span>
                    {item.groups?.length || 0} {t('general.groups')}
                  </span>
                  <div>
                    {item.groups &&
                      item.groups.map(
                        (group: Group, index: number) => `
                        ${group.name}
                    ${index === (item.groups?.length ?? 0) - 1 ? '' : ','}
                      `,
                      )}
                    {$canOpen && item.originalId && (
                      <span className='tooltip-text'>
                        {t('general.purchased_course_groups_tooltip')}
                      </span>
                    )}
                  </div>
                </TooltipContent>
              }
            >
              <IconButton style={{ padding: '9px' }}>
                <GroupsOutlined fontSize='small' />
              </IconButton>
            </Tooltip>

            <Tooltip
              arrow
              title={
                <TooltipContent>
                  <div>
                    <span>
                      {item.numberOfStudents || 0} {t('general.students')}
                    </span>
                    {$canOpen && item.originalId && (
                      <span className='tooltip-text'>
                        {t('general.purchased_course_students_tooltip')}
                      </span>
                    )}
                  </div>
                </TooltipContent>
              }
            >
              <IconButton style={{ padding: '9px' }}>
                <GroupOutlined fontSize='small' />
              </IconButton>
            </Tooltip>
          </GridItemWrapper>
        </StyledToolTipContainer>
      )}
    </StylesCardWrapper>
  )
}
