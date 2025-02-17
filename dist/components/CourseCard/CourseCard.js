import { j as jsxRuntimeExports } from '../../_virtual/jsx-runtime.js';
import { StylesCardWrapper, StyledChecked, CardActionBar, CourseStatusContainer, GridItem, GridItemImage, GridItemContent, GridItemWrapper, ItemBlock, GridItemContentHeader, GridItemTitle, StyledItemWrapper, StyledCardBottomContainer, GridItemLessons, StyledCourseCardContent, StyledActionsContainer, StyledActionItem, StyledToolTipContainer, TooltipContent } from './CourseCard.styles.js';
import TooltipHeight from '../../helperFunctions/TooltipHeight.js';
import { EditSVG } from '../../icons/Edit.js';
import { PlayButtonSVG } from '../../icons/PlayButton.js';
import { UnlockSVG } from '../../icons/Unlock.js';
import { GridActionMenu } from '../GridActionMenu/GridActionMenu.js';
import { useTranslation } from '../../node_modules/react-i18next/dist/es/useTranslation.js';
import Checkbox from '../../node_modules/@mui/material/Checkbox/Checkbox.js';
import Tooltip from '../../node_modules/@mui/material/Tooltip/Tooltip.js';
import IconButton from '../../node_modules/@mui/material/IconButton/IconButton.js';
import RecordVoiceOverOutlined from '../../node_modules/@mui/icons-material/esm/RecordVoiceOverOutlined.js';
import GroupsOutlined from '../../node_modules/@mui/icons-material/esm/GroupsOutlined.js';
import GroupOutlined from '../../node_modules/@mui/icons-material/esm/GroupOutlined.js';

var CourseCard = function CourseCard(_a) {
  var _b, _c, _d;
  var item = _a.item,
    $canOpen = _a.$canOpen,
    fromCertificateBuilder = _a.fromCertificateBuilder,
    fromWizard = _a.fromWizard,
    actions = _a.actions,
    groupId = _a.groupId,
    user = _a.user,
    getCourseLevel = _a.getCourseLevel,
    formatDuration = _a.formatDuration,
    actionHandler = _a.actionHandler,
    selectedItem = _a.selectedItem,
    courseoriginalid = _a.courseoriginalid,
    navigate = _a.navigate,
    RedirectToCourse = _a.RedirectToCourse,
    selectItem = _a.selectItem,
    getCourseState = _a.getCourseState,
    gridStyle = _a.gridStyle,
    companyMode = _a.companyMode,
    activeTab = _a.activeTab,
    withTooltips = _a.withTooltips,
    state = _a.state;
  var t = useTranslation().t;
  return jsxRuntimeExports.jsxs(StylesCardWrapper, {
    className: 'wrapper course-card',
    "$canOpen": $canOpen,
    onClick: function onClick() {
      if ($canOpen) {
        if (fromCertificateBuilder) {
          navigate("/certificate-builder/".concat(courseoriginalid));
        } else {
          RedirectToCourse(item);
        }
      }
    },
    children: [fromWizard && selectedItem && selectedItem.includes(item.id) && jsxRuntimeExports.jsx(StyledChecked, {}), jsxRuntimeExports.jsx(CardActionBar, {
      "$switched": !!(gridStyle === 'card'),
      children: jsxRuntimeExports.jsxs("div", {
        style: {
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        },
        children: [jsxRuntimeExports.jsxs("div", {
          style: {
            zIndex: 3,
            alignItems: fromWizard ? 'center' : '',
            transform: fromWizard ? 'none' : 'scale(1)',
            display: fromCertificateBuilder ? 'none' : fromWizard ? 'flex' : 'block'
          },
          children: [fromWizard && jsxRuntimeExports.jsx(Checkbox, {
            onChange: function onChange() {
              return selectItem && selectItem(item.id);
            },
            checked: selectedItem && selectedItem.includes(item.id)
          }), jsxRuntimeExports.jsx(CourseStatusContainer, {
            "$status": item.state === 'published',
            children: item.finished === 3 ? getCourseState(item.state || '') : t('courses_layout.draft')
          })]
        }), actions && actions.length > 0 && jsxRuntimeExports.jsx("div", {
          className: 'action_block',
          children: jsxRuntimeExports.jsx(GridActionMenu, {
            actionConfig: actions,
            row: item
          })
        })]
      })
    }), jsxRuntimeExports.jsxs(GridItem, {
      "$isFromUser": Boolean(groupId || user),
      children: [jsxRuntimeExports.jsx(GridItemImage, {
        children: jsxRuntimeExports.jsx("img", {
          src: item.avatar && item.avatar.link || 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSHw6OeiQMdYX_iXu8otmzMnlbD07xEWr87EMnJ5r4X9vYC-kNr&usqp=CAU'
        })
      }), jsxRuntimeExports.jsxs(GridItemContent, {
        children: [jsxRuntimeExports.jsxs(GridItemWrapper, {
          style: {
            justifyContent: 'space-between'
          },
          children: [jsxRuntimeExports.jsx(ItemBlock, {
            children: item.level && jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
              children: [t('course_details.level'), ": ", getCourseLevel(item.level)]
            })
          }), jsxRuntimeExports.jsxs(ItemBlock, {
            style: {
              color: 'green'
            },
            children: [item.currency, item.price ? item.price.includes('.') ? item.price : "".concat(item.price, ".00") : t('courses_layout.free')]
          })]
        }), jsxRuntimeExports.jsx(GridItemContentHeader, {
          children: jsxRuntimeExports.jsx(GridItemTitle, {
            style: {
              marginTop: '8px'
            },
            children: jsxRuntimeExports.jsx(TooltipHeight, {
              text: item.name,
              lines: 3
            })
          })
        }), jsxRuntimeExports.jsx(StyledItemWrapper, {})]
      })]
    }), jsxRuntimeExports.jsx(StyledCardBottomContainer, {
      style: {
        textTransform: 'capitalize'
      },
      children: jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
        children: [jsxRuntimeExports.jsxs(GridItemLessons, {
          checked: fromWizard && selectedItem && selectedItem.includes(item.id) ? true : false,
          children: [jsxRuntimeExports.jsxs(StyledCourseCardContent, {
            children: [item.numberOfModules, " ", t('general.modules')]
          }), jsxRuntimeExports.jsxs(StyledCourseCardContent, {
            children: [item.numberOfLessons, " ", t('general.lessons')]
          }), jsxRuntimeExports.jsx(StyledCourseCardContent, {
            children: formatDuration(item.duration || 0)
          })]
        }), actionHandler && !item.isBought && jsxRuntimeExports.jsxs(StyledActionsContainer, {
          children: [jsxRuntimeExports.jsxs(StyledActionItem, {
            color: '#20a8c6',
            onClick: function onClick(e) {
              if (typeof actionHandler === 'function') {
                actionHandler('editCourse', item);
              }
              e.stopPropagation();
            },
            style: {
              borderRight: '1px solid #D6DAE0'
            },
            children: [jsxRuntimeExports.jsx(EditSVG, {}), " ", t('actions.edit')]
          }), jsxRuntimeExports.jsxs(StyledActionItem, {
            color: '#d0524b',
            disabled: !item.video,
            onClick: function onClick(e) {
              if (item.video && typeof actionHandler === 'function') {
                actionHandler('playIntro', item);
                e.stopPropagation();
              }
              e.stopPropagation();
            },
            children: [jsxRuntimeExports.jsx(PlayButtonSVG, {}), " ", t('actions.play_intro')]
          }), companyMode && activeTab != 0 && jsxRuntimeExports.jsxs(StyledActionItem, {
            disabled: ((_b = state.userPermission) === null || _b === undefined ? undefined : _b.publishCourse) === false,
            color: item.state === 'published' ? ' #EA382A' : '#00905E',
            style: {
              borderLeft: '1px solid #D6DAE0'
            },
            onClick: function onClick(e) {
              if (actionHandler) {
                actionHandler('publishedUnPublished', item.id, item.state === 'unpublished' ? 'published' : 'unpublished');
              }
              e.stopPropagation();
            },
            children: [jsxRuntimeExports.jsx(UnlockSVG, {}), item.state === 'published' ? t('actions.unpublish') : t('actions.publish')]
          })]
        })]
      })
    }), withTooltips && jsxRuntimeExports.jsxs(StyledToolTipContainer, {
      children: [jsxRuntimeExports.jsx("hr", {
        style: {
          opacity: '.1',
          margin: 0
        }
      }), jsxRuntimeExports.jsxs(GridItemWrapper, {
        style: {
          justifyContent: 'space-around',
          flexDirection: 'row'
        },
        children: [jsxRuntimeExports.jsx(Tooltip, {
          arrow: true,
          title: jsxRuntimeExports.jsxs(TooltipContent, {
            children: [jsxRuntimeExports.jsx("span", {
              children: ((_c = item.coaches) === null || _c === undefined ? undefined : _c.length) && t('general.coaches') || t('general.no_coaches')
            }), jsxRuntimeExports.jsx("div", {
              children: item.coaches && item.coaches.map(function (i, index) {
                return "".concat(i.firstName, " ").concat(i.lastName, " ").concat(index !== 0 && "," || '', " ");
              }) || 0
            })]
          }),
          children: jsxRuntimeExports.jsx(IconButton, {
            style: {
              padding: '9px'
            },
            children: jsxRuntimeExports.jsx(RecordVoiceOverOutlined, {
              fontSize: 'small'
            })
          })
        }), jsxRuntimeExports.jsx(Tooltip, {
          arrow: true,
          title: jsxRuntimeExports.jsxs(TooltipContent, {
            children: [jsxRuntimeExports.jsxs("span", {
              children: [((_d = item.groups) === null || _d === undefined ? undefined : _d.length) || 0, " ", t('general.groups')]
            }), jsxRuntimeExports.jsxs("div", {
              children: [item.groups && item.groups.map(function (group, index) {
                var _a, _b;
                return "\n                        ".concat(group.name, "\n                    ").concat(index === ((_b = (_a = item.groups) === null || _a === undefined ? undefined : _a.length) !== null && _b !== undefined ? _b : 0) - 1 ? '' : ',', "\n                      ");
              }), $canOpen && item.originalId && jsxRuntimeExports.jsx("span", {
                className: 'tooltip-text',
                children: t('general.purchased_course_groups_tooltip')
              })]
            })]
          }),
          children: jsxRuntimeExports.jsx(IconButton, {
            style: {
              padding: '9px'
            },
            children: jsxRuntimeExports.jsx(GroupsOutlined, {
              fontSize: 'small'
            })
          })
        }), jsxRuntimeExports.jsx(Tooltip, {
          arrow: true,
          title: jsxRuntimeExports.jsx(TooltipContent, {
            children: jsxRuntimeExports.jsxs("div", {
              children: [jsxRuntimeExports.jsxs("span", {
                children: [item.numberOfStudents || 0, " ", t('general.students')]
              }), $canOpen && item.originalId && jsxRuntimeExports.jsx("span", {
                className: 'tooltip-text',
                children: t('general.purchased_course_students_tooltip')
              })]
            })
          }),
          children: jsxRuntimeExports.jsx(IconButton, {
            style: {
              padding: '9px'
            },
            children: jsxRuntimeExports.jsx(GroupOutlined, {
              fontSize: 'small'
            })
          })
        })]
      })]
    })]
  }, item.id);
};

export { CourseCard };
//# sourceMappingURL=CourseCard.js.map
