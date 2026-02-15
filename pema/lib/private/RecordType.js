import expected from "#expected";
import fail from "#fail";
import GenericType from "#GenericType";
import OptionalType from "#OptionalType";
import ParsedKey from "#ParsedKey";
import ParseError from "#ParseError";
import join from "#path/join";
import next from "#path/next";
import is from "@rcompat/is";
export default class RecordType extends GenericType {
    #key;
    #value;
    constructor(k, v) {
        super();
        this.#key = k;
        this.#value = v;
    }
    optional() {
        return new OptionalType(this);
    }
    get name() {
        return "record";
    }
    parse(x, options = {}) {
        if (!is.dict(x))
            throw fail("object", x, options);
        const key_name = this.#key.name;
        const keys = Object.keys(x);
        const symbols = Object.getOwnPropertySymbols(x);
        const base = options[ParsedKey] ?? "";
        if (key_name === "string" || key_name === "number") {
            // no key may be a symbol
            if (symbols.length > 0) {
                throw new ParseError([{
                        input: x,
                        message: expected(`${key_name} key`, symbols[0]),
                        path: base,
                    }]);
            }
            keys.forEach(k => {
                if (key_name === "string" && is.numeric(k)) {
                    throw new ParseError([{
                            input: x,
                            message: expected("string key", +k),
                            path: join(base, k),
                        }]);
                }
                if (key_name === "number" && !is.numeric(k)) {
                    throw new ParseError([{
                            input: x,
                            message: expected("number key", k),
                            path: join(base, k),
                        }]);
                }
                this.#value.parse(x[k], next(k, options));
            });
        }
        if (key_name === "symbol") {
            // disallow any non-symbol keys
            if (keys.length > 0) {
                throw new ParseError([{
                        input: x,
                        message: expected("symbol key", keys[0]),
                        path: join(base, keys[0]),
                    }]);
            }
            symbols.forEach(k => {
                this.#value.parse(x[k], options);
            });
        }
        return x;
    }
    toJSON() {
        return {
            type: this.name,
            key: this.#key.toJSON(),
            value: this.#value.toJSON(),
        };
    }
}
//# sourceMappingURL=RecordType.js.map