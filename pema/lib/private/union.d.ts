import type NormalizeSchema from "#NormalizeSchema";
import type Schema from "#Schema";
import UnionType from "#UnionType";
type NormalizeArray<T extends Schema[]> = {
    [K in keyof T]: NormalizeSchema<T[K]>;
};
export default function union(): UnionType<[]>;
export default function union<const T extends Schema[]>(...types: T): UnionType<NormalizeArray<T>>;
export {};
//# sourceMappingURL=union.d.ts.map