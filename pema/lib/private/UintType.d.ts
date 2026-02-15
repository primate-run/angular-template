import coerce from "#coerce/int";
import CoerceKey from "#CoerceKey";
import NumericType from "#NumericType";
import type ParseOptions from "#ParseOptions";
import type Storable from "#Storable";
import type UintDataType from "#UintDataType";
export default class UintType<T extends UintDataType> extends NumericType<T, number, "UintType"> implements Storable<T> {
    [CoerceKey]: typeof coerce;
    get name(): string;
    /**
    * Value is a non-privileged port number (1000 - 65535).
    */
    port(): this;
    parse(x: unknown, options?: ParseOptions<number>): import("./Infer.js").default<this>;
}
//# sourceMappingURL=UintType.d.ts.map