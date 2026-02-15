import error from "#error";
import ParseError from "#ParseError";
export default function fail(...args) {
    return new ParseError(error(...args));
}
//# sourceMappingURL=fail.js.map