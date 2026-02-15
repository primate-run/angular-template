import GenericType from "#GenericType";
import type Infer from "#Infer";
import type ParseOptions from "#ParseOptions";
type Literal = string | boolean | number;
export default class LiteralType<T extends Literal> extends GenericType<T, T, "LiteralType"> {
    #private;
    constructor(literal: T);
    static new<T extends Literal>(literal: T): LiteralType<T>;
    static get Literal(): Literal;
    get name(): string;
    parse(x: unknown, options?: ParseOptions): Infer<this>;
    toJSON(): {
        type: "literal";
        value: T;
    };
}
export {};
//# sourceMappingURL=LiteralType.d.ts.map