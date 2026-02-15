import fail from "#fail";
import GenericType from "#GenericType";
import next from "#path/next";
import is from "@rcompat/is";
export default class ObjectType extends GenericType {
    #properties;
    #options;
    constructor(properties, options = {}) {
        super();
        this.#properties = properties;
        this.#options = options;
    }
    get name() {
        const props = Object.entries(this.#properties)
            .map(([k, v]) => `${k}: ${v.name}`)
            .join(", ");
        return `{ ${props} }`;
    }
    get properties() {
        return this.#properties;
    }
    get input() {
        return undefined;
    }
    #derive(options) {
        const Constructor = this.constructor;
        return new Constructor(this.#properties, { ...this.#options, ...options });
    }
    get coerce() {
        return this.#derive({ coerce: true });
    }
    parse(x, options = {}) {
        const $options = { ...this.#options, ...options };
        if (x !== undefined && !is.dict(x))
            throw fail("object", x, $options);
        const input = x ?? {};
        const out = {};
        for (const k in this.#properties) {
            const parsed = this.#properties[k].parse(input[k], next(k, $options));
            if (parsed !== undefined)
                out[k] = parsed;
        }
        return out;
    }
    toJSON() {
        const properties = {};
        for (const [k, v] of Object.entries(this.#properties)) {
            properties[k] = v.toJSON();
        }
        return { type: "object", properties };
    }
}
//# sourceMappingURL=ObjectType.js.map