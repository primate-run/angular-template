import DefaultType from "#DefaultType";
import GenericType from "#GenericType";
import type Infer from "#Infer";
import OptionalType from "#OptionalType";
import type Parsed from "#Parsed";
import type ParseOptions from "#ParseOptions";
import type DefaultTrait from "#trait/Default";
import type OptionalTrait from "#trait/Optional";
import type Validator from "#Validator";
import type { Primitive } from "@rcompat/type";
type Next<T> = {
    validators?: Validator<T>[];
};
export default class ArrayType<T extends Parsed<unknown>> extends GenericType<T, Infer<T>[], "ArrayType"> implements OptionalTrait, DefaultTrait<Infer<T>[]> {
    #private;
    constructor(item: T, validators?: Validator<Array<Infer<T>>>[]);
    get name(): "array";
    optional(): OptionalType<this>;
    default(value: (() => Infer<T>[]) | Infer<T>[]): DefaultType<this, Infer<T>[]>;
    derive(_next: Next<Array<Infer<T>>>): this;
    /**
     * Member values are unique — only for primitive subtypes.
     *
     * @throws `SchemaError` if the subtype is not a primitive.
     * @returns ArrayType<T>
     */
    unique(this: Infer<T> extends Primitive ? ArrayType<T> : never): ArrayType<T>;
    min(limit: number): this;
    max(limit: number): this;
    length(from: number, to: number): this;
    parse(x: unknown, options?: ParseOptions): Infer<this>;
    toJSON(): {
        type: "array";
        of: import("./Serialized.js").default;
    };
}
export {};
//# sourceMappingURL=ArrayType.d.ts.map