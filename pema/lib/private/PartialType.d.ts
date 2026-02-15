import DefaultType from "#DefaultType";
import type Infer from "#Infer";
import type ParseOptions from "#ParseOptions";
import type Partialable from "#Partialable";
import type DefaultTrait from "#trait/Default";
import VirtualType from "#VirtualType";
type InferPartial<D extends Partialable> = {
    -readonly [K in keyof D]?: NonNullable<Infer<D[K]>>;
};
export default class PartialType<D extends Partialable> extends VirtualType<D, InferPartial<D>, "PartialType"> implements DefaultTrait<InferPartial<D>> {
    #private;
    constructor(spec: D);
    get name(): "partial";
    get schema(): D;
    default(value: (() => InferPartial<D>) | InferPartial<D>): DefaultType<this, InferPartial<D>>;
    parse(x: unknown, options?: ParseOptions): InferPartial<D>;
    toJSON(): {
        type: "partial";
        of: {
            type: "string";
        };
    };
}
export {};
//# sourceMappingURL=PartialType.d.ts.map