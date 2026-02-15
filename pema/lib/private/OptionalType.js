import VirtualType from "#VirtualType";
export default class OptionalType extends VirtualType {
    #schema;
    constructor(s) {
        super();
        this.#schema = s;
    }
    get name() {
        return "optional";
    }
    get schema() {
        return this.#schema;
    }
    get nullable() {
        return true;
    }
    parse(x, options = {}) {
        const s = this.#schema;
        // optional
        if (x === undefined) {
            return undefined;
        }
        return s.parse(x, options);
    }
    toJSON() {
        return {
            type: this.name,
            of: this.schema.toJSON(),
        };
    }
}
//# sourceMappingURL=OptionalType.js.map