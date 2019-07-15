"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const test_utils_1 = require("@material-ui/core/test-utils");
// @ts-ignore
const HeaderBar_tsx_1 = __importDefault(require("../components/HeaderBar.tsx"));
const AppBar_1 = __importDefault(require("@material-ui/core/AppBar"));
describe("HeaderBar", () => {
    it("display the received text", () => {
        const testStr = "this is test";
        const wrapper = test_utils_1.createShallow()(react_1.default.createElement(HeaderBar_tsx_1.default, { text: testStr }));
        expect(wrapper.text()).toEqual(testStr);
        //    expect(shallow).toMatchSnapshot();
    });
    it("has an AppBar", () => {
        const testStr = "this is test";
        const wrapper = test_utils_1.createMount()(react_1.default.createElement(HeaderBar_tsx_1.default, { text: testStr }));
        expect(wrapper.find(AppBar_1.default)).toHaveLength(1);
    });
});
//# sourceMappingURL=HeaderBar.spec.js.map