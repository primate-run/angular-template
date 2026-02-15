import ObjectType from "#ObjectType";
import PartialType from "#PartialType";
import fail from "#fail";
import next from "#path/next";
import is from "@rcompat/is";
export default class StoreType extends ObjectType {
    #pk;
    constructor(properties, pk = null) {
        super(properties);
        this.#pk = pk;
    }
    get name() {
        return "store";
    }
    parse(x, options = {}) {
        const $options = { ...options };
        if (x !== undefined && !is.dict(x))
            throw fail("object", x, $options);
        const input = x ?? {};
        const out = {};
        for (const k in this.properties) {
            if (k === this.#pk && !(k in input))
                continue;
            const parsed = this.properties[k].parse(input[k], next(k, $options));
            if (parsed !== undefined)
                out[k] = parsed;
        }
        return out;
    }
    partial() {
        return new PartialType(this.properties);
    }
}
//# sourceMappingURL=StoreType.js.map