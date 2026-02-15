import DefaultType from "#DefaultType";
import GenericType from "#GenericType";
import type Infer from "#Infer";
import type NormalizeSchema from "#NormalizeSchema";
import OptionalType from "#OptionalType";
import type Parsed from "#Parsed";
import type ParseOptions from "#ParseOptions";
import type Schema from "#Schema";
import type DefaultTrait from "#trait/Default";
import type OptionalTrait from "#trait/Optional";
import type { TupleToUnion } from "@rcompat/type";
type InferUnion<T extends Schema[]> = TupleToUnion<{
    [K in keyof T]: T[K] extends Schema ? NormalizeSchema<T[K]>["infer"] : "union-never";
}>;
export default class UnionType<T extends Parsed<unknown>[]> extends GenericType<T, InferUnion<T>, "UnionType"> implements OptionalTrait, DefaultTrait<InferUnion<T>> {
    #private;
    constructor(of: T);
    get name(): "union";
    get schema(): T;
    optional(): OptionalType<this>;
    default(value: (() => InferUnion<T>) | InferUnion<T>): DefaultType<this, InferUnion<T>>;
    parse(x: unknown, options?: ParseOptions): Infer<this>;
    toJSON(): {
        type: "union";
        of: import("./Serialized.js").default[];
    };
}
export {};
//# sourceMappingURL=UnionType.d.ts.map