import fail from "#fail";
import GenericType from "#GenericType";
import ParsedKey from "#ParsedKey";
import join from "#path/join";
export default class OmitType extends GenericType {
    #properties;
    constructor(type, keys) {
        super();
        const props = { ...type.properties };
        for (const key of keys) {
            delete props[key];
        }
        this.#properties = props;
    }
    get name() {
        return "omit";
    }
    parse(x, options = {}) {
        if (typeof x !== "object" || x === null)
            throw fail("object", x, options);
        const out = {};
        const props = this.#properties;
        for (const k in props) {
            const field = props[k];
            const r = field.parse(x[k], {
                ...options, [ParsedKey]: join(options[ParsedKey] ?? "", String(k)),
            });
            if (r !== undefined) {
                out[k] = r;
            }
        }
        return out;
    }
    toJSON() {
        const properties = {};
        const props = this.#properties;
        for (const [k, v] of Object.entries(props)) {
            properties[k] = v.toJSON();
        }
        return { type: "omit", properties };
    }
}
//# sourceMappingURL=OmitType.js.map