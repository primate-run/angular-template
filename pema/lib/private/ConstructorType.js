import DefaultType from "#DefaultType";
import fail from "#fail";
import GenericType from "#GenericType";
export default class ConstructorType extends GenericType {
    #type;
    constructor(t) {
        super();
        this.#type = t;
    }
    get name() {
        return "constructor";
    }
    default(value) {
        return new DefaultType(this, value);
    }
    parse(x, options = {}) {
        if (!(x instanceof this.#type))
            throw fail(this.name, x, options);
        return x;
    }
    toJSON() {
        return {
            type: "newable",
            of: this.#type.name,
        };
    }
}
//# sourceMappingURL=ConstructorType.js.map