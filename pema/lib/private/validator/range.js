import ParseError from "#ParseError";
import is from "@rcompat/is";
const fail = (input, msg) => new ParseError([{ input, message: msg, path: "" }]);
export default function range(from, to) {
    if (!is.finite(from) || !is.finite(to)) {
        throw new TypeError("range(): from and to must be finite numbers");
    }
    return (x) => {
        if (typeof x !== "number" && typeof x !== "bigint") {
            throw fail(x, "invalid type");
        }
        if (x < from || x > to) {
            throw new ParseError([{
                    input: x,
                    message: `${x} is out of range`,
                    path: "",
                }]);
        }
    };
}
;
//# sourceMappingURL=range.js.map