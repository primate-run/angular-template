import type DataKey from "#DataKey";
import type ParseOptions from "#ParseOptions";
import PrimitiveType from "#PrimitiveType";
import type Storable from "#Storable";
import type Validator from "#Validator";
type Next<T> = {
    options?: ParseOptions;
    validators?: Validator<T>[];
};
export default abstract class NumericType<Key extends DataKey, T extends bigint | number, Name extends string> extends PrimitiveType<T, Name> implements Storable<Key> {
    #private;
    constructor(datatype: Key, validators?: Validator<T>[], options?: ParseOptions);
    derive(next: Next<T>): this;
    values(anyof: Record<string, T>): this;
    range(from: T, to: T): this;
    min(from: T): this;
    max(to: T): this;
    get datatype(): Key;
    toJSON(): {
        type: "number" | "bigint";
        datatype: Key;
    };
}
export {};
//# sourceMappingURL=NumericType.d.ts.map