import coerce from "#coerce/int";
import CoerceKey from "#CoerceKey";
import type IntDataType from "#IntDataType";
import NumericType from "#NumericType";
import type ParseOptions from "#ParseOptions";
import type Storable from "#Storable";
export default class IntType<T extends IntDataType> extends NumericType<T, number, "IntType"> implements Storable<T> {
    [CoerceKey]: typeof coerce;
    get name(): string;
    parse(x: unknown, options?: ParseOptions<number>): import("./Infer.js").default<this>;
}
//# sourceMappingURL=IntType.d.ts.map