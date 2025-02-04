import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import EditSVG from '../../svg/Edit';
import Typography from '@mui/material/Typography';
import { ActionConfig, DeleteSpan, DisabledTypography } from './CourseCard.styles';
import React from 'react';
import PlayButtonSVG from '../../svg/PlayButton';
import PlayGrayButtonSVG from '../../svg/GrayPlayButton';
import DeleteSVG from '../../svg/DeleteIcon';
import GrayDownloadSVG from '../../svg/GrayDownloadIcon';
import DownloadSVG from '../../svg/DownloadIcon';
var getTypographyAndIcon = function (isEnabled, Icon, GrayIcon) {
    return {
        TypographyComponent: isEnabled ? Typography : DisabledTypography,
        IconComponent: isEnabled ? Icon : GrayIcon,
    };
};
export var actionConfig = function (handleClick, permission, t) { return [
    {
        render: function (item) {
            return !item.isBought ? (_jsxs(ActionConfig, { className: 'edit', onClick: function () { return handleClick('editCourse', item); }, children: [_jsx(EditSVG, {}), _jsx(Typography, { children: t('actions.edit') })] })) : (_jsx(React.Fragment, {}));
        },
    },
    {
        // Currently, the text is styled to appear disabled as the feature is not yet implemented
        render: function () {
            var _a = getTypographyAndIcon(false, DownloadSVG, GrayDownloadSVG), TypographyComponent = _a.TypographyComponent, IconComponent = _a.IconComponent;
            return (_jsxs(ActionConfig, { children: [_jsx(IconComponent, {}), _jsx(TypographyComponent, { children: t('actions.download_syllabus') })] }));
        },
    },
    {
        // The action is disabled if the course does not have an associated video
        render: function (item) {
            var _a = getTypographyAndIcon(!!item.video, PlayButtonSVG, PlayGrayButtonSVG), TypographyComponent = _a.TypographyComponent, IconComponent = _a.IconComponent;
            return (_jsxs(ActionConfig, { onClick: function () { return handleClick('playIntro', item); }, disabled: !item.video, children: [_jsx(IconComponent, {}), _jsx(TypographyComponent, { children: t('actions.play_intro') })] }));
        },
    },
    {
        hide: !permission.deleteCourse,
        render: function (item) { return (_jsxs(ActionConfig, { className: 'delete', onClick: function () { return handleClick('deleteCourse', item.id); }, children: [_jsx(DeleteSVG, {}), _jsx(DeleteSpan, { children: t('actions.delete') })] })); },
    },
]; };
//# sourceMappingURL=CourseCardActionsConfig.js.map