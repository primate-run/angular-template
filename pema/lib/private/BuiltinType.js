import CoerceKey from "#CoerceKey";
import fail from "#fail";
import Type from "#Type";
export default class BuiltinType extends Type {
    #options;
    constructor(options = {}) {
        super();
        this.#options = options;
    }
    #derive(next) {
        const Constructor = this.constructor;
        return new Constructor({ ...this.#options, ...next });
    }
    get coerce() {
        return this.#derive({ coerce: true });
    }
    parse(x, options = {}) {
        const $options = { ...this.#options, ...options };
        const $x = $options.coerce === true ? this[CoerceKey](x) : x;
        if (!($x instanceof this.Type))
            throw fail(this.name, $x, $options);
        return $x;
    }
}
//# sourceMappingURL=BuiltinType.js.map