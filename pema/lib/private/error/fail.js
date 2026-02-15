import ParseError from "#ParseError";
export default function fail(input, msg) {
    return new ParseError([{ input, message: msg, path: "" }]);
}
//# sourceMappingURL=fail.js.map