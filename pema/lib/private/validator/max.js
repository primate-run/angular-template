import fail from "#error/fail";
import schemafail from "#error/schemafail";
import is from "@rcompat/is";
export default function max(limit) {
    // validate limit once
    if (typeof limit === "number") {
        if (!is.finite(limit)) {
            throw schemafail("max: limit {0} must be a finite number", limit);
        }
        return (x) => {
            if (typeof x === "number") {
                if (x > limit)
                    throw fail(x, `${x} is greater than max (${limit})`);
            }
            else if (typeof x === "string" || Array.isArray(x)) {
                if (x.length > limit) {
                    const unit = typeof x === "string" ? "characters" : "items";
                    throw fail(x, `max ${limit} ${unit}`);
                }
            }
            else {
                throw fail(x, "invalid type");
            }
        };
    }
    // bigint
    return (x) => {
        if (typeof x === "bigint") {
            if (x > limit)
                throw fail(x, `${x} is greater than max (${limit})`);
        }
        else {
            throw fail(x, "invalid type");
        }
    };
}
//# sourceMappingURL=max.js.map