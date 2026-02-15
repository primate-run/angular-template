import fail from "#error/fail";
import schemafail from "#error/schemafail";
import ParseError from "#ParseError";
import is from "@rcompat/is";
export default function length(from, to) {
    if (!is.finite(from) || !is.finite(to)) {
        throw schemafail("length: {0} and {1} must be finite numbers", from, to);
    }
    if (from < 0 || to < 0) {
        throw schemafail("length: {0} and {1} must be positive", from, to);
    }
    if (from > to) {
        throw schemafail("length: {0} must be lower than {1}", from, to);
    }
    return (x) => {
        if (typeof x !== "string" && !Array.isArray(x)) {
            throw fail(x, "invalid type");
        }
        if (x.length < from || x.length > to) {
            throw new ParseError([{
                    input: x,
                    message: "length out of range",
                    path: "",
                }]);
        }
    };
}
;
//# sourceMappingURL=length.js.map