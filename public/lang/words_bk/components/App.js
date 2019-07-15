"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
// @ts-ignore
const HeaderBar_tsx_1 = __importDefault(require("./HeaderBar.tsx"));
// @ts-ignore
const Main_tsx_1 = __importDefault(require("./Main.tsx"));
// @ts-ignore
const SideBar_tsx_1 = __importDefault(require("./SideBar.tsx"));
const Grid_1 = __importDefault(require("@material-ui/core/Grid"));
const styles_1 = require("@material-ui/core/styles");
const useStyles = styles_1.makeStyles((theme) => styles_1.createStyles({
    headerBar: {
        height: "20vh"
    },
    sideBar: {
        height: "80vh"
    },
    main: {
        height: "80vh"
    }
}));
function App() {
    const classes = useStyles();
    return (react_1.default.createElement(Grid_1.default, { container: true, spacing: 2, className: classes.headerBar },
        react_1.default.createElement(Grid_1.default, { item: true, xs: 12 },
            react_1.default.createElement(HeaderBar_tsx_1.default, { text: "Lang Project" })),
        react_1.default.createElement(Grid_1.default, { item: true, xs: 3, className: classes.sideBar },
            react_1.default.createElement(SideBar_tsx_1.default, { text: "sidebar" })),
        react_1.default.createElement(Grid_1.default, { item: true, xs: 9, className: classes.main },
            react_1.default.createElement(Main_tsx_1.default, null))));
}
exports.App = App;
//# sourceMappingURL=App.js.map