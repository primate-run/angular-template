import DefaultType from "#DefaultType";
import GenericType from "#GenericType";
import type Infer from "#Infer";
import type ParseOptions from "#ParseOptions";
import type DefaultTrait from "#trait/Default";
import type { AbstractNewable } from "@rcompat/type";
export default class ConstructorType<C extends AbstractNewable> extends GenericType<C, InstanceType<C>, "InstanceType"> implements DefaultTrait<InstanceType<C>> {
    #private;
    constructor(t: C);
    get name(): string;
    default(value: (() => InstanceType<C>) | InstanceType<C>): DefaultType<this, InstanceType<C>>;
    parse(x: unknown, options?: ParseOptions): Infer<this>;
    toJSON(): {
        type: "newable";
        of: string;
    };
}
//# sourceMappingURL=ConstructorType.d.ts.map