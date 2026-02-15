import type Infer from "#Infer";
import type Parsed from "#Parsed";
import type ParseOptions from "#ParseOptions";
import VirtualType from "#VirtualType";
export default class OptionalType<S extends Parsed<unknown>> extends VirtualType<S | undefined, Infer<S> | undefined, "OptionalType"> {
    #private;
    constructor(s: S);
    get name(): "optional";
    get schema(): S;
    get nullable(): boolean;
    parse(x: unknown, options?: ParseOptions): Infer<this>;
    toJSON(): {
        type: "optional";
        of: import("./Serialized.js").default;
    };
}
//# sourceMappingURL=OptionalType.d.ts.map