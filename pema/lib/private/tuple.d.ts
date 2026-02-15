import type NormalizeSchema from "#NormalizeSchema";
import type Schema from "#Schema";
import TupleType from "#TupleType";
type NormalizeSchemaArray<T extends Schema[]> = {
    [K in keyof T]: NormalizeSchema<T[K]>;
};
export default function tuple<const T extends Schema[]>(...items: T): TupleType<NormalizeSchemaArray<T>>;
export {};
//# sourceMappingURL=tuple.d.ts.map