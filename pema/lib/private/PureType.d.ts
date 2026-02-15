import type Infer from "#Infer";
import OptionalType from "#OptionalType";
import Parsed from "#Parsed";
import type OptionalTrait from "#trait/Optional";
import type { Printable } from "@rcompat/type";
export default class PureType<Type, Name extends string = "PureType"> extends Parsed<Type> implements Printable, OptionalTrait {
    get name(): string;
    get Name(): Name;
    optional(): OptionalType<this>;
    parse(x: unknown): Infer<this>;
    toJSON(): {
        type: "pure";
    };
}
//# sourceMappingURL=PureType.d.ts.map