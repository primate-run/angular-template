import coerce from "#coerce/bigint";
import CoerceKey from "#CoerceKey";
import NumericType from "#NumericType";
export default class BigUintType extends NumericType {
    [CoerceKey] = coerce;
    get name() {
        return "bigint";
    }
}
//# sourceMappingURL=BigUintType.js.map