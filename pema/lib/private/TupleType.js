import fail from "#fail";
import GenericType from "#GenericType";
import OptionalType from "#OptionalType";
import next from "#path/next";
export default class TupleType extends GenericType {
    #items;
    constructor(items) {
        super();
        this.#items = items;
    }
    get name() {
        return "tuple";
    }
    optional() {
        return new OptionalType(this);
    }
    parse(x, options = {}) {
        if (!Array.isArray(x))
            throw fail("array", x, options);
        const items = this.#items;
        const len = items.length;
        // validate each expected item
        for (let i = 0; i < len; i++)
            items[i].parse(x[i], next(i, options));
        // reject extra items
        if (x.length > len)
            throw fail("undefined", x[len], next(len, options));
        return x;
    }
    toJSON() {
        return {
            type: this.name,
            of: this.#items.map(i => i.toJSON()),
        };
    }
}
//# sourceMappingURL=TupleType.js.map