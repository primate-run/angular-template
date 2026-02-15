import CoerceKey from "#CoerceKey";
import ParsedKey from "#ParsedKey";
import type ParseOptions from "#ParseOptions";
import type Serialized from "#Serialized";
import type { Serializable } from "@rcompat/type";
export default abstract class Parsed<StaticType> implements Serializable {
    get [ParsedKey](): "ParsedKey";
    get infer(): StaticType;
    get nullable(): boolean;
    [CoerceKey](x: unknown): unknown;
    abstract get name(): string;
    /**
    * Parse the given value.
    *
    * @param x Value to parse.
    *
    * @throws `ParseError` if the value could not be parsed.
    *
    * @returns The parsed value, if successfully parsed.
    */
    abstract parse(x: unknown, options?: ParseOptions): StaticType;
    abstract toJSON(): Serialized;
}
//# sourceMappingURL=Parsed.d.ts.map