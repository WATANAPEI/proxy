"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useWordApi = (initialUrl, initialWord) => {
    const [word, setWord] = react_1.useState(initialWord);
    const [url, setUrl] = react_1.useState(initialUrl);
    const [isLoading, setIsLoading] = react_1.useState(false);
    const [isError, setIsError] = react_1.useState(false);
    react_1.useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);
            try {
                const response = await fetch(url);
                const json = await response.json();
                const data = json.data;
                const word = {
                    id: data.id,
                    word: data.word,
                    meaning: data.meaning,
                    wordLanguageID: data.word_lang_id,
                    meaningLanguageID: data.meaning_lang_id
                };
                //      console.log(`json: ${JSON.stringify(word)}`);
                //      console.log(`data: ${data}`);
                //      console.log(`word: ${word}`);
                setWord(word);
            }
            catch (error) {
                setIsError(true);
            }
            setIsLoading(false);
        };
        fetchData();
    }, [url]);
    return [{ word, isLoading, isError }, setUrl];
};
exports.default = useWordApi;
//# sourceMappingURL=useWordApi.js.map