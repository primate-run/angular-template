import PrimitiveType from "#PrimitiveType";
import Storable from "#Storable";
export default class StringType extends PrimitiveType<string, "StringType"> implements Storable<"string"> {
    get name(): "string";
    get datatype(): "string";
    isotime(): this;
    regex(pattern: RegExp): this;
    email(): this;
    uuid(): this;
    startsWith(prefix: string): this;
    endsWith(suffix: string): this;
    min(limit: number): this;
    max(limit: number): this;
    length(from: number, to: number): this;
    toJSON(): {
        type: "string";
        datatype: "string";
    };
}
//# sourceMappingURL=StringType.d.ts.map