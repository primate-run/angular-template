import ArrayType from "#ArrayType";
import type NormalizeSchema from "#NormalizeSchema";
import type Schema from "#Schema";
/**
* Value is an array of the given type.
*/
export default function array<const S extends Schema>(of: S): ArrayType<NormalizeSchema<S>>;
//# sourceMappingURL=array.d.ts.map