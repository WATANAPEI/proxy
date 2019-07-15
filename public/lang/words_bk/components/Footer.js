"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styles_1 = require("@material-ui/core/styles");
const useStyles = styles_1.makeStyles((theme) => styles_1.createStyles({
    footerBar: {
        width: "100%",
        textAlign: "right"
    }
}));
function Footer({ text }) {
    const classes = useStyles();
    return (react_1.default.createElement("div", { className: classes.footerBar },
        react_1.default.createElement("h3", null, text)));
}
exports.default = Footer;
//# sourceMappingURL=Footer.js.map