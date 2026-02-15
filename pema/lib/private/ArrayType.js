import DefaultType from "#DefaultType";
import error from "#error";
import schemafail from "#error/schemafail";
import fail from "#fail";
import GenericType from "#GenericType";
import OptionalType from "#OptionalType";
import ParsedKey from "#ParsedKey";
import ParseError from "#ParseError";
import join from "#path/join";
import next from "#path/next";
import rebase from "#path/rebase";
import PrimitiveType from "#PrimitiveType";
import length from "#validator/length";
import max from "#validator/max";
import min from "#validator/min";
import unique from "#validator/unique";
function isPrimitive(x) {
    return x instanceof PrimitiveType;
}
export default class ArrayType extends GenericType {
    #item;
    #validators;
    constructor(item, validators = []) {
        super();
        this.#item = item;
        this.#validators = validators;
    }
    get name() {
        return "array";
    }
    optional() {
        return new OptionalType(this);
    }
    default(value) {
        return new DefaultType(this, value);
    }
    derive(_next) {
        const Constructor = this.constructor;
        return new Constructor(this.#item, [...this.#validators, ..._next.validators ?? []]);
    }
    /**
     * Member values are unique — only for primitive subtypes.
     *
     * @throws `SchemaError` if the subtype is not a primitive.
     * @returns ArrayType<T>
     */
    unique() {
        if (!isPrimitive(this.#item)) {
            throw schemafail("unique: subtype {0} must be primitive", this.#item.name);
        }
        return this.derive({ validators: [unique] });
    }
    min(limit) {
        if (limit < 0) {
            throw schemafail("min: {0} must be positive", limit);
        }
        return this.derive({ validators: [min(limit)] });
    }
    max(limit) {
        if (limit < 0) {
            throw schemafail("max: {0} must be positive", limit);
        }
        return this.derive({ validators: [max(limit)] });
    }
    length(from, to) {
        return this.derive({ validators: [length(from, to)] });
    }
    parse(x, options = {}) {
        if (!Array.isArray(x))
            throw fail("array", x, options);
        const base = options[ParsedKey] ?? "";
        const item = this.#item;
        const len = x.length;
        for (let i = 0; i < len; i++) {
            // sparse array check
            if (!(i in x)) {
                throw new ParseError([{
                        ...error(item.name, undefined, options)[0],
                        path: join(base, i),
                    }]);
            }
            item.parse(x[i], next(i, options));
        }
        const validators = this.#validators;
        for (let i = 0; i < validators.length; i++) {
            try {
                validators[i](x);
            }
            catch (e) {
                if (e instanceof ParseError) {
                    const rebased = (e.issues ?? [])
                        .map(issue => ({ ...issue, path: rebase(base, issue.path) }));
                    throw new ParseError(rebased);
                }
                throw e;
            }
        }
        return x;
    }
    toJSON() {
        return { type: this.name, of: this.#item.toJSON() };
    }
}
//# sourceMappingURL=ArrayType.js.map