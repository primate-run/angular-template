import ParseError from "#ParseError";
export default (suffix) => (x) => {
    if (!x.endsWith(suffix)) {
        throw new ParseError([{
                input: x,
                message: `"${x}" does not end with "${suffix}"`,
                path: "",
            }]);
    }
};
//# sourceMappingURL=ends-with.js.map