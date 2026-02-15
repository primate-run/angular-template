import type Infer from "#Infer";
import type Parsed from "#Parsed";
import type ParseOptions from "#ParseOptions";
import VirtualType from "#VirtualType";
export default class DefaultType<S extends Parsed<unknown>, D extends Infer<S>> extends VirtualType<S, Infer<S>, "DefaultType"> {
    #private;
    constructor(s: S, d: (() => D) | D);
    get name(): "default";
    get schema(): S;
    get input(): Infer<S> | undefined;
    parse(x: unknown, options?: ParseOptions): Infer<this>;
    toJSON(): {
        type: "default";
        of: import("./Serialized.js").default;
    };
}
//# sourceMappingURL=DefaultType.d.ts.map