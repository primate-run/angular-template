import DefaultType from "#DefaultType";
import fail from "#fail";
import ParsedKey from "#ParsedKey";
import ParseError from "#ParseError";
import join from "#path/join";
import next from "#path/next";
import VirtualType from "#VirtualType";
import is from "@rcompat/is";
export default class PartialType extends VirtualType {
    #spec;
    constructor(spec) {
        super();
        this.#spec = spec;
    }
    get name() {
        return "partial";
    }
    get schema() {
        return this.#spec;
    }
    default(value) {
        return new DefaultType(this, value);
    }
    parse(x, options = {}) {
        if (!is.dict(x))
            throw fail("object", x, options);
        const input = x;
        const out = {};
        const issues = [];
        for (const key of Object.keys(this.#spec)) {
            // skip missing/undefined keys (partial semantics)
            if (!(key in input) || input[key] === undefined)
                continue;
            try {
                const parsed = this.#spec[key].parse(input[key], next(key, options));
                if (parsed !== undefined)
                    out[key] = parsed;
            }
            catch (e) {
                if (e instanceof ParseError) {
                    // child already rebased to /<key> via nextOptions -> just collect
                    if (e.issues && e.issues.length)
                        issues.push(...e.issues);
                }
                else {
                    // wrap non-ParseError into a properly-pathed issue at /<key>
                    const message = e && typeof e.message === "string"
                        ? e.message
                        : String(e);
                    issues.push({
                        input: input[key],
                        message: message,
                        path: join(options[ParsedKey] ?? "", key),
                    });
                }
            }
        }
        if (issues.length > 0)
            throw new ParseError(issues);
        return out;
    }
    toJSON() {
        return { type: this.name, of: { type: "string" } };
    }
}
//# sourceMappingURL=PartialType.js.map