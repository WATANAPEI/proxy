"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const test_utils_1 = require("@material-ui/core/test-utils");
// @ts-ignore
const SideBar_tsx_1 = __importDefault(require("../components/SideBar.tsx"));
const MenuList_1 = __importDefault(require("@material-ui/core/MenuList"));
const MenuItem_1 = __importDefault(require("@material-ui/core/MenuItem"));
describe("</SideBar />", () => {
    it("has a MenuList and MenuItems", () => {
        const testText = "sideBar text";
        const wrapper = test_utils_1.createShallow()(react_1.default.createElement(SideBar_tsx_1.default, { text: testText }));
        expect(wrapper.find(MenuList_1.default)).toHaveLength(1);
        expect(wrapper.find(MenuItem_1.default)).toBeTruthy();
    });
    it("render received texts", () => {
        const testText = "sideBar text";
        const wrapper = test_utils_1.createShallow()(react_1.default.createElement(SideBar_tsx_1.default, { text: testText }));
        //    console.log(wrapper.text());
        expect(wrapper.text()).toEqual(expect.stringContaining(testText));
    });
});
//# sourceMappingURL=SideBar.spec.js.map