import ParseError from "#ParseError";
export default (prefix) => (x) => {
    if (!x.startsWith(prefix)) {
        throw new ParseError([{
                input: x,
                message: `"${x}" does not start with "${prefix}"`,
                path: "",
            }]);
    }
};
//# sourceMappingURL=starts-with.js.map