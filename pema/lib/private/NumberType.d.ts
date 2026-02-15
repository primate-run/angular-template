import CoerceKey from "#CoerceKey";
import type FloatDataType from "#FloatDataType";
import NumericType from "#NumericType";
import coerce from "#coerce/int";
export default class NumberType<T extends FloatDataType = "f64"> extends NumericType<T, number, "NumberType"> {
    [CoerceKey]: typeof coerce;
    get name(): "number";
}
//# sourceMappingURL=NumberType.d.ts.map