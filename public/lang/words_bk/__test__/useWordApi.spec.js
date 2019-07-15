"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const enzyme_1 = require("enzyme");
// @ts-ignore
const useWordApi_tsx_1 = __importDefault(require("../hooks/useWordApi.tsx"));
describe("test hooks", () => {
    let mockWordSuccessResponse;
    let mockWordFailedResponse;
    let mockSuccessJsonPromise;
    let mockFailedJsonPromise;
    let mockFetchPromise;
    let mockReactComponent;
    let mockSuccessResponse;
    let mockFailedResponse;
    beforeEach(() => {
        mockWordSuccessResponse = {
            id: 100,
            word: "sucess word",
            meaning: "success meaning",
            wordLanguageID: 1,
            meaningLanguageID: 2
        };
        mockWordFailedResponse = {};
        mockSuccessJsonPromise = Promise.resolve(mockWordSuccessResponse);
        mockFailedJsonPromise = Promise.resolve(mockWordFailedResponse);
        mockSuccessResponse = new Response(new Blob([JSON.stringify({ json: () => mockSuccessJsonPromise })], {
            type: "application/json"
        }));
        mockFailedResponse = new Response(new Blob([JSON.stringify({ json: () => mockFailedJsonPromise })], {
            type: "application/json"
        }));
        mockFetchPromise = (status) => {
            return new Promise((resolve, reject) => {
                if (status === "success") {
                    resolve(mockSuccessResponse);
                }
                else {
                    reject(mockFailedResponse);
                }
            });
        };
        mockReactComponent = (hook) => {
            return react_1.default.createElement("div", Object.assign({}, hook));
        };
    });
    it("returns WordResponse and setUrl function", done => {
        //console.log(mockReactComponent);
        jest.spyOn(window, 'fetch').mockImplementation(() => mockFetchPromise("success"));
        const wrapper = enzyme_1.mount(mockReactComponent(useWordApi_tsx_1.default));
    });
    it.todo("accesses specified url and return response");
    it.todo("display loading text during loading");
    it.todo("display error message when load failed");
});
//# sourceMappingURL=useWordApi.spec.js.map