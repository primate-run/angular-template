import coerce from "#coerce/int";
import CoerceKey from "#CoerceKey";
import NumericType from "#NumericType";
import integer from "#validator/integer";
import port from "#validator/port";
export default class UintType extends NumericType {
    [CoerceKey] = coerce;
    get name() {
        return "number";
    }
    /**
    * Value is a non-privileged port number (1000 - 65535).
    */
    port() {
        return this.derive({ validators: [port] });
    }
    parse(x, options = {}) {
        return super.parse(x, {
            ...options,
            validators: [integer],
        });
    }
}
//# sourceMappingURL=UintType.js.map