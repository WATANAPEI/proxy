"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
// @ts-ignore
const WordCard_tsx_1 = __importDefault(require("./WordCard.tsx"));
const styles_1 = require("@material-ui/core/styles");
const Grid_1 = __importDefault(require("@material-ui/core/Grid"));
const ArrowBack_1 = __importDefault(require("@material-ui/icons/ArrowBack"));
const ArrowForward_1 = __importDefault(require("@material-ui/icons/ArrowForward"));
const Button_1 = __importDefault(require("@material-ui/core/Button"));
// @ts-ignore
const useWordApi_tsx_1 = __importDefault(require("../hooks/useWordApi.tsx"));
const useStyles = styles_1.makeStyles((theme) => styles_1.createStyles({
    mainContainer: {
        width: "100%",
        height: "100%",
        alignItems: "center"
    },
    navCard: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },
    wordCardGrid: {
        width: "100%",
        height: "100%"
    }
}));
function Main() {
    const classes = useStyles();
    const [id, setId] = react_1.useState(2);
    const [{ word, isLoading, isError }, doFetch] = useWordApi_tsx_1.default("http://localhost:3000/words/1", {
        id: 1,
        word: "aa",
        meaning: "bb",
        wordLanguageID: 1,
        meaningLanguageID: 2
    });
    return (react_1.default.createElement(Grid_1.default, { container: true, spacing: 2, className: classes.mainContainer },
        react_1.default.createElement(Grid_1.default, { item: true, xs: 1, className: classes.navCard },
            react_1.default.createElement(Button_1.default, { onClick: () => {
                    if (id > 1) {
                        setId(id - 1);
                        doFetch(`http://localhost:3000/words/${id}`);
                    }
                } },
                react_1.default.createElement(ArrowBack_1.default, null))),
        react_1.default.createElement(Grid_1.default, { item: true, xs: 10, className: classes.wordCardGrid },
            isError && react_1.default.createElement("div", null, "Something went wrong ..."),
            isLoading ? react_1.default.createElement("div", null, "Loading...") : react_1.default.createElement(WordCard_tsx_1.default, Object.assign({}, word))),
        react_1.default.createElement(Grid_1.default, { item: true, xs: 1, className: classes.navCard },
            react_1.default.createElement(Button_1.default, { onClick: () => {
                    setId(id + 1);
                    doFetch(`http://localhost:3000/words/${id}`);
                } },
                react_1.default.createElement(ArrowForward_1.default, null)))));
}
exports.default = Main;
//# sourceMappingURL=Main.js.map