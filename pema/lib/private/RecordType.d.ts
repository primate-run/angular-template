import GenericType from "#GenericType";
import type Infer from "#Infer";
import OptionalType from "#OptionalType";
import type Parsed from "#Parsed";
import type ParseOptions from "#ParseOptions";
import type RecordTypeKey from "#RecordTypeKey";
import type OptionalTrait from "#trait/Optional";
export default class RecordType<Key extends RecordTypeKey, Value extends Parsed<unknown>> extends GenericType<Value, Record<Infer<Key>, Infer<Value>>, "RecordType"> implements OptionalTrait {
    #private;
    constructor(k: Key, v: Value);
    optional(): OptionalType<this>;
    get name(): "record";
    parse(x: unknown, options?: ParseOptions): Infer<this>;
    toJSON(): {
        type: "record";
        key: {
            type: "string";
            datatype: "string";
        } | {
            type: "symbol";
        } | {
            type: "number" | "bigint";
            datatype: "f64";
        };
        value: import("./Serialized.js").default;
    };
}
//# sourceMappingURL=RecordType.d.ts.map