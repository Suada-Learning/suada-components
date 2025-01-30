import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Checkbox, IconButton } from "@mui/material";
import { Tooltip } from "@mui/material";
import { GroupOutlined, GroupsOutlined, RecordVoiceOverOutlined, } from "@mui/icons-material";
import { CardActionBar, CourseStatusContainer, GridItemLessons, ItemBlock, StyledActionItem, StyledActionsContainer, StyledCardBottomContainer, StyledChecked, StyledCourseCardContent, StyledItemWrapper, StyledToolTipContainer, StylesCardWrapper, TooltipContent, GridItem, GridItemImage, GridItemContent, GridItemWrapper, GridItemContentHeader, GridItemTitle, } from "./CourseCard.styles";
import TooltipHeight from "../../helperFunctions/TooltipHeight";
import EditSVG from "../../svg/Edit";
import PlayButtonSVG from "../../svg/PlayButton";
import UnlockSVG from "../../svg/Unlock";
import { useTranslation } from "react-i18next";
import { GridActionMenu } from "../GridActionMenu";
export var CourseCard = function (_a) {
    var _b, _c, _d;
    var item = _a.item, $canOpen = _a.$canOpen, fromCertificateBuilder = _a.fromCertificateBuilder, fromWizard = _a.fromWizard, actions = _a.actions, groupId = _a.groupId, user = _a.user, getCourseLevel = _a.getCourseLevel, formatDuration = _a.formatDuration, actionHandler = _a.actionHandler, selectedItem = _a.selectedItem, courseoriginalid = _a.courseoriginalid, navigate = _a.navigate, RedirectToCourse = _a.RedirectToCourse, selectItem = _a.selectItem, getCourseState = _a.getCourseState, gridStyle = _a.gridStyle, companyMode = _a.companyMode, activeTab = _a.activeTab, withTooltips = _a.withTooltips, state = _a.state;
    var t = useTranslation().t;
    return (_jsxs(StylesCardWrapper, { className: "wrapper course-card", "$canOpen": $canOpen, onClick: function () {
            if ($canOpen) {
                if (fromCertificateBuilder) {
                    navigate("/certificate-builder/".concat(courseoriginalid));
                }
                else {
                    RedirectToCourse(item);
                }
            }
        }, children: [fromWizard && selectedItem && selectedItem.includes(item.id) && (_jsx(StyledChecked, {})), _jsx(CardActionBar, { "$switched": !!(gridStyle === "card"), children: _jsxs("div", { style: {
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }, children: [_jsxs("div", { style: {
                                zIndex: 3,
                                alignItems: fromWizard ? "center" : "",
                                transform: fromWizard ? "none" : "scale(1)",
                                display: fromCertificateBuilder
                                    ? "none"
                                    : fromWizard
                                        ? "flex"
                                        : "block",
                            }, children: [fromWizard && (_jsx(Checkbox, { onChange: function () { return selectItem && selectItem(item.id); }, checked: selectedItem && selectedItem.includes(item.id) })), _jsx(CourseStatusContainer, { "$status": item.state === "published", children: item.finished === 3
                                        ? getCourseState(item.state)
                                        : t("courses_layout.draft") })] }), actions && actions.length > 0 && (_jsx("div", { className: "action_block", children: _jsx(GridActionMenu, { actionConfig: actions, row: item }) }))] }) }), _jsxs(GridItem, { "$isFromUser": Boolean(groupId || user), children: [_jsx(GridItemImage, { children: _jsx("img", { src: (item.avatar && item.avatar.link) ||
                                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSHw6OeiQMdYX_iXu8otmzMnlbD07xEWr87EMnJ5r4X9vYC-kNr&usqp=CAU" }) }), _jsxs(GridItemContent, { children: [_jsxs(GridItemWrapper, { style: { justifyContent: "space-between" }, children: [_jsx(ItemBlock, { children: item.level && (_jsxs(_Fragment, { children: [t("course_details.level"), ":", " ", getCourseLevel(item.level)] })) }), _jsxs(ItemBlock, { style: { color: "green" }, children: [item.currency, item.price
                                                ? item.price.includes(".")
                                                    ? item.price
                                                    : "".concat(item.price, ".00")
                                                : t("courses_layout.free")] })] }), _jsx(GridItemContentHeader, { children: _jsx(GridItemTitle, { style: { marginTop: "8px" }, children: _jsx(TooltipHeight, { text: item.name, lines: 3 }) }) }), _jsx(StyledItemWrapper, {})] })] }), _jsx(StyledCardBottomContainer, { style: { textTransform: "capitalize" }, children: _jsxs(_Fragment, { children: [_jsxs(GridItemLessons, { checked: fromWizard && selectedItem && selectedItem.includes(item.id)
                                ? true
                                : false, children: [_jsxs(StyledCourseCardContent, { children: [item.numberOfModules, " ", t("general.modules")] }), _jsxs(StyledCourseCardContent, { children: [item.numberOfLessons, " ", t("general.lessons")] }), _jsx(StyledCourseCardContent, { children: formatDuration(item.duration || 0) })] }), actionHandler && !item.isBought && (_jsxs(StyledActionsContainer, { children: [_jsxs(StyledActionItem, { color: "#20a8c6", onClick: function (e) {
                                        if (typeof actionHandler === "function") {
                                            actionHandler("editCourse", item);
                                        }
                                        e.stopPropagation();
                                    }, style: { borderRight: "1px solid #D6DAE0" }, children: [_jsx(EditSVG, {}), " ", t("actions.edit")] }), _jsxs(StyledActionItem, { color: "#d0524b", disabled: !item.video, onClick: function (e) {
                                        if (item.video && typeof actionHandler === "function") {
                                            actionHandler("playIntro", item);
                                            e.stopPropagation();
                                        }
                                        e.stopPropagation();
                                    }, children: [_jsx(PlayButtonSVG, {}), " ", t("actions.play_intro")] }), companyMode && activeTab != 0 && (_jsxs(StyledActionItem, { disabled: ((_b = state.userPermission) === null || _b === void 0 ? void 0 : _b.publishCourse) === false, color: item.state === "published" ? " #EA382A" : "#00905E", style: { borderLeft: "1px solid #D6DAE0" }, onClick: function (e) {
                                        if (actionHandler) {
                                            actionHandler("publishedUnPublished", item.id, item.state === "unpublished"
                                                ? "published"
                                                : "unpublished");
                                        }
                                        e.stopPropagation();
                                    }, children: [_jsx(UnlockSVG, {}), item.state === "published"
                                            ? t("actions.unpublish")
                                            : t("actions.publish")] }))] }))] }) }), withTooltips && (_jsxs(StyledToolTipContainer, { children: [_jsx("hr", { style: { opacity: ".1", margin: 0 } }), _jsxs(GridItemWrapper, { style: { justifyContent: "space-around", flexDirection: "row" }, children: [_jsx(Tooltip, { arrow: true, title: _jsxs(TooltipContent, { children: [_jsx("span", { children: (((_c = item.coaches) === null || _c === void 0 ? void 0 : _c.length) && t("general.coaches")) ||
                                                t("general.no_coaches") }), _jsx("div", { children: (item.coaches &&
                                                item.coaches.map(function (i, index) {
                                                    return "".concat(i.firstName, " ").concat(i.lastName, " ").concat((index !== 0 && ",") || "", " ");
                                                })) ||
                                                0 })] }), children: _jsx(IconButton, { style: { padding: "9px" }, children: _jsx(RecordVoiceOverOutlined, { fontSize: "small" }) }) }), _jsx(Tooltip, { arrow: true, title: _jsxs(TooltipContent, { children: [_jsxs("span", { children: [((_d = item.groups) === null || _d === void 0 ? void 0 : _d.length) || 0, " ", t("general.groups")] }), _jsxs("div", { children: [item.groups &&
                                                    item.groups.map(function (group, index) { return "\n                        ".concat(group.name, "\n                        ").concat(index === item.groups.length - 1 ? "" : ",", "\n                      "); }), $canOpen && item.originalId && (_jsx("span", { className: "tooltip-text", children: t("general.purchased_course_groups_tooltip") }))] })] }), children: _jsx(IconButton, { style: { padding: "9px" }, children: _jsx(GroupsOutlined, { fontSize: "small" }) }) }), _jsx(Tooltip, { arrow: true, title: _jsx(TooltipContent, { children: _jsxs("div", { children: [_jsxs("span", { children: [item.numberOfStudents || 0, " ", t("general.students")] }), $canOpen && item.originalId && (_jsx("span", { className: "tooltip-text", children: t("general.purchased_course_students_tooltip") }))] }) }), children: _jsx(IconButton, { style: { padding: "9px" }, children: _jsx(GroupOutlined, { fontSize: "small" }) }) })] })] }))] }, item.id));
};
//# sourceMappingURL=CourseCard.js.map