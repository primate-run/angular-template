import Parsed from "#Parsed";
import type { PrintableGeneric } from "@rcompat/type";
export default abstract class GenericType<Type, Inferred, Name extends string> extends Parsed<Inferred> implements PrintableGeneric<Type> {
    get Name(): Name;
    get Type(): Type;
}
//# sourceMappingURL=GenericType.d.ts.map