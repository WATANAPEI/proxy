"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styles_1 = require("@material-ui/core/styles");
const Paper_1 = __importDefault(require("@material-ui/core/Paper"));
const MenuList_1 = __importDefault(require("@material-ui/core/MenuList"));
const MenuItem_1 = __importDefault(require("@material-ui/core/MenuItem"));
const useStyles = styles_1.makeStyles((theme) => styles_1.createStyles({
    sideBar: {
        color: "red",
        margin: "0 5px",
        height: "100%"
    },
    li: {
        listStyle: "none"
    }
}));
function SideBar({ text }) {
    const classes = useStyles();
    return (react_1.default.createElement(Paper_1.default, { className: classes.sideBar },
        react_1.default.createElement(MenuList_1.default, { className: classes.li },
            react_1.default.createElement(MenuItem_1.default, null,
                text,
                "1"),
            react_1.default.createElement(MenuItem_1.default, null,
                text,
                "2"))));
}
exports.default = SideBar;
//# sourceMappingURL=SideBar.js.map