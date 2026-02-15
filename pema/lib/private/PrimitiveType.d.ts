import type Infer from "#Infer";
import type ParseOptions from "#ParseOptions";
import Type from "#Type";
import type Validator from "#Validator";
type Next<T> = {
    options?: ParseOptions;
    validators?: Validator<T>[];
};
export default abstract class PrimitiveType<StaticType, Name extends string> extends Type<StaticType, Name> {
    #private;
    constructor(validators?: Validator<StaticType>[], options?: ParseOptions);
    get options(): ParseOptions<unknown>;
    get validators(): Validator<StaticType>[];
    derive(next: Next<StaticType>): this;
    get coerce(): this;
    parse(x: unknown, options?: ParseOptions<StaticType>): Infer<this>;
}
export {};
//# sourceMappingURL=PrimitiveType.d.ts.map