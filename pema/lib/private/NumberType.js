import CoerceKey from "#CoerceKey";
import NumericType from "#NumericType";
import coerce from "#coerce/int";
export default class NumberType extends NumericType {
    [CoerceKey] = coerce;
    get name() {
        return "number";
    }
}
//# sourceMappingURL=NumberType.js.map