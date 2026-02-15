import fail from "#fail";
import PrimitiveType from "#PrimitiveType";
export default class NullType extends PrimitiveType {
    get name() {
        return "null";
    }
    parse(x, options = {}) {
        if (x !== null)
            throw fail(this.name, x, options);
        return x;
    }
    toJSON() {
        return {
            type: this.name,
        };
    }
}
//# sourceMappingURL=NullType.js.map