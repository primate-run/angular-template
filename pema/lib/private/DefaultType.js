import VirtualType from "#VirtualType";
function isDefaultFunction(x) {
    return typeof x === "function";
}
;
export default class DefaultType extends VirtualType {
    #schema;
    #default;
    constructor(s, d) {
        super();
        this.#schema = s;
        this.#default = d;
    }
    get name() {
        return "default";
    }
    get schema() {
        return this.#schema;
    }
    get input() {
        return undefined;
    }
    parse(x, options = {}) {
        let $x = x;
        // default fallback
        if ($x === undefined) {
            $x = isDefaultFunction(this.#default) ? this.#default() : this.#default;
        }
        return this.#schema.parse($x, options);
    }
    toJSON() {
        return { type: this.name, of: this.#schema.toJSON() };
    }
}
//# sourceMappingURL=DefaultType.js.map