import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useState } from 'react';
import { ExpansionMenuItem, ExpansionMenuItemList } from './styled-components';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/system';
import { useTranslation } from '../Providers/TranslationProvider/TranslationProvider';
var ExpansionPanelCustom = styled(Accordion)(function () { return ({
    backgroundColor: 'transparent',
    color: '#06c68f',
    padding: '4px 8px',
    boxShadow: 'none',
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
    '&.Mui-expanded': {
        margin: '0 !important',
    },
    '& .MuiAccordionSummary-root': {
        height: '44px !important',
        minHeight: 'unset !important',
    },
}); });
var ExpansionPanelSummaryCustom = styled(AccordionSummary)(function () { return ({
    fontSize: '14px',
    backgroundColor: 'transparent',
    color: 'black',
    borderRadius: '4px',
    padding: '10px 14px',
    '.MuiAccordionSummary-content': {
        margin: '0 !important',
    },
    '& svg': {
        color: '#ababab !important',
    },
    transition: 'color .3s ease',
    '&:hover': {
        backgroundColor: '#EAF5F2',
    },
    '& .MuiIconButton-root': {
        color: 'inherit',
    },
}); });
var ExpansionPanelDetailsCustom = styled(AccordionDetails)(function () { return ({
    color: 'black ',
    padding: '0',
    '& a:hover': {
        backgroundColor: '#EAF5F2',
        color: 'black',
    },
    '& a.active': {
        backgroundColor: '#EAF5F2',
        color: '#06c68f',
        '& svg path': {
            fill: '#06c68f',
        },
    },
}); });
var Typo = styled(Typography)(function () { return ({
    display: 'flex',
    fontSize: '16px',
    fontFamily: 'Open Sans',
    fontWeight: '500',
}); });
var useStyles = makeStyles(function () { return ({
    root: {
        marginLeft: 15,
    },
    navlink: {
        '&:hover': {
            backgroundColor: '#EAF5F2',
        },
    },
    closed: {
        visibility: 'hidden',
    },
}); });
var ExpansionNavMenu = function (props) {
    var _a;
    var t = useTranslation().t;
    var _b = useState(''), expanded = _b[0], setExpanded = _b[1];
    var classes = useStyles();
    return (_jsx(_Fragment, { children: props.item.canView && (_jsxs(ExpansionPanelCustom, { square: true, expanded: expanded === "panel".concat(props.index), onChange: function (_, newExpanded) { return setExpanded(newExpanded ? "panel".concat(props.index) : ''); }, children: [_jsx(ExpansionPanelSummaryCustom, { "aria-controls": 'panel3d-content', id: 'panel3d-header', expandIcon: props.isOpened ? _jsx(ExpandMoreIcon, {}) : false, children: _jsxs(Typo, { children: [props.item.icon, props.isOpened && (_jsx("span", { className: classes.root, children: t("navigation.".concat(props.item.title)) }))] }) }), _jsx(ExpansionPanelDetailsCustom, { children: _jsx(ExpansionMenuItemList, { children: (_a = props.item.children) === null || _a === void 0 ? void 0 : _a.map(function (i, index) {
                            return (_jsx(React.Fragment, { children: i.canView && (_jsx(ExpansionMenuItem, { "$isOpened": props.isOpened, children: _jsxs(NavLink, { to: i.path || '', children: [i.icon, props.isOpened && (_jsx("span", { className: classes.root, children: t("navigation.".concat(i.title)) }))] }) }, index)) }, index));
                        }) }) })] }, props.index)) }));
};
export default ExpansionNavMenu;
//# sourceMappingURL=ExpansionNavMenu.js.map