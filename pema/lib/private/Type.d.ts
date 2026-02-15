import DefaultType from "#DefaultType";
import OptionalType from "#OptionalType";
import Parsed from "#Parsed";
import type DefaultTrait from "#trait/Default";
import type OptionalTrait from "#trait/Optional";
import type { Printable } from "@rcompat/type";
export default abstract class Type<T, Name extends string> extends Parsed<T> implements Printable, DefaultTrait<T>, OptionalTrait {
    optional(): OptionalType<this>;
    default<S extends T>(value: (() => S) | S): DefaultType<this, S>;
    get Name(): Name;
}
//# sourceMappingURL=Type.d.ts.map