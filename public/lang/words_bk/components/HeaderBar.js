"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styles_1 = require("@material-ui/core/styles");
const AppBar_1 = __importDefault(require("@material-ui/core/AppBar"));
const Toolbar_1 = __importDefault(require("@material-ui/core/Toolbar"));
const Typography_1 = __importDefault(require("@material-ui/core/Typography"));
const useStyles = styles_1.makeStyles((theme) => styles_1.createStyles({
    root: {
        flexGrow: 1
    }
}));
function HeaderBar({ text }) {
    const classes = useStyles();
    return (react_1.default.createElement("div", { className: classes.root },
        react_1.default.createElement(AppBar_1.default, { color: "default", position: "static" },
            react_1.default.createElement(Toolbar_1.default, null,
                react_1.default.createElement(Typography_1.default, { variant: "h6", color: "inherit" }, text)))));
}
exports.default = HeaderBar;
//# sourceMappingURL=HeaderBar.js.map