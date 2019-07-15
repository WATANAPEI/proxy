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
const style_css_1 = __importDefault(require("../styles/style.css"));
function WordCard(word) {
    const [isFlipped, setIsFlipped] = react_1.useState(false);
    function handleClick(event) {
        if (!isFlipped) {
            event.currentTarget.style.transform = "rotateY(180deg)";
            setIsFlipped(true);
        }
        else {
            event.currentTarget.style.transform = "rotateY(0deg)";
            setIsFlipped(false);
        }
    }
    return (react_1.default.createElement("div", { className: style_css_1.default.flipCard },
        react_1.default.createElement("div", { id: "flipCardInner", className: style_css_1.default.flipCardInner, onClick: handleClick },
            react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", { className: style_css_1.default.flipCardFront }, word.word),
                react_1.default.createElement("div", { className: style_css_1.default.flipCardBack }, word.meaning)))));
}
exports.default = WordCard;
//# sourceMappingURL=WordCard.js.map