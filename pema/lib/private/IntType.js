import coerce from "#coerce/int";
import CoerceKey from "#CoerceKey";
import NumericType from "#NumericType";
import integer from "#validator/integer";
export default class IntType extends NumericType {
    [CoerceKey] = coerce;
    get name() {
        return "number";
    }
    parse(x, options = {}) {
        return super.parse(x, {
            ...options,
            validators: [integer],
        });
    }
}
//# sourceMappingURL=IntType.js.map