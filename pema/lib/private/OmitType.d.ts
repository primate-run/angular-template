import GenericType from "#GenericType";
import type Infer from "#Infer";
import type ObjectType from "#ObjectType";
import type Parsed from "#Parsed";
import type ParseOptions from "#ParseOptions";
import type Serialized from "#Serialized";
import type { Dict } from "@rcompat/type";
export default class OmitType<P extends Dict<Parsed<unknown>>, K extends keyof P> extends GenericType<Omit<P, K>, Omit<{
    [Key in keyof P]: Infer<P[Key]>;
}, K>, "OmitType"> {
    #private;
    constructor(type: ObjectType<P>, keys: K[]);
    get name(): "omit";
    parse(x: unknown, options?: ParseOptions): Infer<this>;
    toJSON(): {
        type: "omit";
        properties: Dict<Serialized>;
    };
}
//# sourceMappingURL=OmitType.d.ts.map