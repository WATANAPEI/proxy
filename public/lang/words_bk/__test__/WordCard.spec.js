"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const enzyme_1 = require("enzyme");
// @ts-ignore
const WordCard_tsx_1 = __importDefault(require("../components/WordCard.tsx"));
describe("<WordCard />", () => {
    let testWord;
    beforeEach(() => {
        testWord = {
            id: 1,
            word: "test word",
            meaning: "test meaning",
            wordLanguageID: 1,
            meaningLanguageID: 2
        };
    });
    it("has 4 divs with flipCard/flipCardInner/flipCardFront/flipCardBack class", () => {
        const wrapper = enzyme_1.mount(react_1.default.createElement(WordCard_tsx_1.default, Object.assign({}, testWord)));
        expect(wrapper.find(".flipCard")).toHaveLength(1);
        expect(wrapper.find(".flipCardInner")).toHaveLength(1);
        expect(wrapper.find(".flipCardFront")).toHaveLength(1);
        expect(wrapper.find(".flipCardBack")).toHaveLength(1);
        //console.log(`wrapper: ${wrapper.debug()}`);
        wrapper.unmount();
    });
    it("has a card with word", () => {
        const wrapper = enzyme_1.mount(react_1.default.createElement(WordCard_tsx_1.default, Object.assign({}, testWord)));
        expect(wrapper.find(".flipCardFront").text()).toEqual(testWord.word);
        wrapper.unmount();
    });
    it("has a card with meaning", () => {
        const wrapper = enzyme_1.mount(react_1.default.createElement(WordCard_tsx_1.default, Object.assign({}, testWord)));
        expect(wrapper.find(".flipCardBack").text()).toEqual(testWord.meaning);
        wrapper.unmount();
    });
    it("check the mount rendering doesn't change before and after click", () => {
        const wrapper = enzyme_1.mount(react_1.default.createElement(WordCard_tsx_1.default, Object.assign({}, testWord)));
        const wrapperString = wrapper.debug();
        wrapper.find(".flipCardInner").simulate("click");
        expect(wrapper.debug()).toEqual(wrapperString);
        wrapper.find(".flipCardInner").simulate("click");
        expect(wrapper.debug()).toEqual(wrapperString);
        //    console.log(`wrapperString: ${wrapperString}`);
    });
});
//# sourceMappingURL=WordCard.spec.js.map