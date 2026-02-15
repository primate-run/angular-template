import type Infer from "#Infer";
import type ParseOptions from "#ParseOptions";
import PrimitiveType from "#PrimitiveType";
export default class NullType extends PrimitiveType<null, "NullType"> {
    get name(): "null";
    parse(x: unknown, options?: ParseOptions): Infer<this>;
    toJSON(): {
        type: "null";
    };
}
//# sourceMappingURL=NullType.d.ts.map