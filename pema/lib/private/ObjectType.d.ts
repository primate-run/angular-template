import GenericType from "#GenericType";
import type Infer from "#Infer";
import type InferInputSchema from "#InferInputSchema";
import type Parsed from "#Parsed";
import type ParseOptions from "#ParseOptions";
import type Serialized from "#Serialized";
import type { Dict } from "@rcompat/type";
export default class ObjectType<P extends Dict<Parsed<unknown>>> extends GenericType<P, {
    [K in keyof P]: P[K]["infer"];
}, "ObjectType"> {
    #private;
    constructor(properties: P, options?: ParseOptions);
    get name(): string;
    get properties(): P;
    get input(): InferInputSchema<P>;
    get coerce(): this;
    parse(x: unknown, options?: ParseOptions): Infer<this>;
    toJSON(): {
        type: "object";
        properties: Dict<Serialized>;
    };
}
//# sourceMappingURL=ObjectType.d.ts.map