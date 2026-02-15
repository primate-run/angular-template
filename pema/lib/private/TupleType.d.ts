import GenericType from "#GenericType";
import type Infer from "#Infer";
import type NormalizeSchema from "#NormalizeSchema";
import OptionalType from "#OptionalType";
import type Parsed from "#Parsed";
import type ParseOptions from "#ParseOptions";
import type Schema from "#Schema";
import type OptionalTrait from "#trait/Optional";
type InferTuple<T extends Schema[]> = {
    [K in keyof T]: T[K] extends Schema ? NormalizeSchema<T[K]>["infer"] : "tuple-never";
};
export default class TupleType<T extends Parsed<unknown>[]> extends GenericType<T, InferTuple<T>, "TupleType"> implements OptionalTrait {
    #private;
    constructor(items: T);
    get name(): "tuple";
    optional(): OptionalType<this>;
    parse(x: unknown, options?: ParseOptions): Infer<this>;
    toJSON(): {
        type: "tuple";
        of: import("./Serialized.js").default[];
    };
}
export {};
//# sourceMappingURL=TupleType.d.ts.map