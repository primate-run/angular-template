import type Infer from "#Infer";
import type ParseOptions from "#ParseOptions";
import Type from "#Type";
import type { AbstractNewable } from "@rcompat/type";
export default abstract class BuiltinType<StaticType, Name extends string> extends Type<StaticType, Name> {
    #private;
    abstract get Type(): AbstractNewable;
    constructor(options?: ParseOptions);
    get coerce(): this;
    parse(x: unknown, options?: ParseOptions): Infer<this>;
}
//# sourceMappingURL=BuiltinType.d.ts.map