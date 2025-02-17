import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Edit } from '../../svg/Edit';
import Typography from '@mui/material/Typography';
import { ActionConfig, DeleteSpan, DisabledTypography } from './CourseCard.styles';
import React from 'react';
import { PlayButton } from '../../svg/PlayButton';
import { PlayGrayButton } from '../../svg/GrayPlayButton';
import { Delete } from '../../svg/Delete';
import { GrayDownload } from '../../svg/GrayDownloadIcon';
import { DownloadIcon } from '../../svg/DownloadIcon';
var getTypographyAndIcon = function (isEnabled, Icon, GrayIcon) {
    return {
        TypographyComponent: isEnabled ? Typography : DisabledTypography,
        IconComponent: isEnabled ? Icon : GrayIcon,
    };
};
export var actionConfig = function (handleClick, permission, t) { return [
    {
        render: function (item) {
            return !item.isBought ? (_jsxs(ActionConfig, { className: 'edit', onClick: function () { return handleClick('editCourse', item); }, children: [_jsx(Edit, {}), _jsx(Typography, { children: t('actions.edit') })] })) : (_jsx(React.Fragment, {}));
        },
    },
    {
        // Currently, the text is styled to appear disabled as the feature is not yet implemented
        render: function () {
            var _a = getTypographyAndIcon(false, DownloadIcon, GrayDownload), TypographyComponent = _a.TypographyComponent, IconComponent = _a.IconComponent;
            return (_jsxs(ActionConfig, { children: [_jsx(IconComponent, {}), _jsx(TypographyComponent, { children: t('actions.download_syllabus') })] }));
        },
    },
    {
        // The action is disabled if the course does not have an associated video
        render: function (item) {
            var _a = getTypographyAndIcon(!!item.video, PlayButton, PlayGrayButton), TypographyComponent = _a.TypographyComponent, IconComponent = _a.IconComponent;
            return (_jsxs(ActionConfig, { onClick: function () { return handleClick('playIntro', item); }, disabled: !item.video, children: [_jsx(IconComponent, {}), _jsx(TypographyComponent, { children: t('actions.play_intro') })] }));
        },
    },
    {
        hide: !permission.deleteCourse,
        render: function (item) { return (_jsxs(ActionConfig, { className: 'delete', onClick: function () { return handleClick('deleteCourse', item.id); }, children: [_jsx(Delete, {}), _jsx(DeleteSpan, { children: t('actions.delete') })] })); },
    },
]; };
//# sourceMappingURL=CourseCardActionsConfig.js.map