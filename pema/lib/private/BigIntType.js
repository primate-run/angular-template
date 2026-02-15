import coerce from "#coerce/bigint";
import CoerceKey from "#CoerceKey";
import NumericType from "#NumericType";
export default class BigIntType extends NumericType {
    [CoerceKey] = coerce;
    get name() {
        return "bigint";
    }
}
//# sourceMappingURL=BigIntType.js.map