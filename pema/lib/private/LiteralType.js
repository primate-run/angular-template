import fail from "#fail";
import GenericType from "#GenericType";
export default class LiteralType extends GenericType {
    #literal;
    constructor(literal) {
        super();
        this.#literal = literal;
    }
    static new(literal) {
        return new LiteralType(literal);
    }
    static get Literal() {
        return undefined;
    }
    get name() {
        return JSON.stringify(this.#literal);
    }
    parse(x, options = {}) {
        if (x !== this.#literal)
            throw fail(this.name, x, options);
        return x;
    }
    toJSON() {
        return {
            type: "literal",
            value: this.#literal,
        };
    }
}
//# sourceMappingURL=LiteralType.js.map