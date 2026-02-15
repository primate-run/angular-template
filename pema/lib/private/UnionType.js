import DefaultType from "#DefaultType";
import fail from "#fail";
import GenericType from "#GenericType";
import isParsedType from "#is-parsed-type";
import OptionalType from "#OptionalType";
import ParseError from "#ParseError";
import assert from "@rcompat/assert";
const print = (type) => {
    const parsed = isParsedType(type);
    if (parsed) {
        return type.name;
    }
    const type_of = typeof type;
    if (type_of === "string") {
        return `"${type}"`;
    }
    if (type_of === "bigint") {
        return `${type}n`;
    }
    if (type_of === "object") {
        return `{ ${Object.entries(type)
            .map(([name, subtype]) => `${name}: ${print(subtype)}`)
            .join(", ")} }`;
    }
    return type;
};
const union_error = (types) => `\`${types.map(t => isParsedType(t) ? t.name : print(t)).join(" | ")}\``;
export default class UnionType extends GenericType {
    #of;
    constructor(of) {
        assert.true(of.length > 1, "union type must have at least two members");
        super();
        this.#of = of;
    }
    get name() {
        return "union";
    }
    get schema() {
        return this.#of;
    }
    optional() {
        return new OptionalType(this);
    }
    default(value) {
        return new DefaultType(this, value);
    }
    parse(x, options = {}) {
        for (const type of this.#of) {
            try {
                type.parse(x, options);
                return x;
            }
            catch (e) {
                if (!(e instanceof ParseError)) {
                    throw e;
                }
                // continue to next
            }
        }
        // all types failed
        throw fail(union_error(this.#of), x, options);
    }
    toJSON() {
        return { type: this.name, of: this.#of.map(t => t.toJSON()) };
    }
}
//# sourceMappingURL=UnionType.js.map