import type BigIntDataType from "#BigIntDataType";
import coerce from "#coerce/bigint";
import CoerceKey from "#CoerceKey";
import NumericType from "#NumericType";
import type Storable from "#Storable";
export default class BigIntType<T extends BigIntDataType = "i64"> extends NumericType<T, bigint, "BigIntType"> implements Storable<T> {
    [CoerceKey]: typeof coerce;
    get name(): string;
}
//# sourceMappingURL=BigIntType.d.ts.map