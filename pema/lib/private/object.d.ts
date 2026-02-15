import type NormalizeSchema from "#NormalizeSchema";
import ObjectType from "#ObjectType";
import type Schema from "#Schema";
import type { Dict, EmptyObject } from "@rcompat/type";
type NormalizeProps<S extends Dict<Schema>> = keyof S extends never ? EmptyObject : {
    [K in keyof S]: NormalizeSchema<S[K]>;
};
export default function object<P extends Dict<Schema>>(properties: P): ObjectType<NormalizeProps<P>>;
export {};
//# sourceMappingURL=object.d.ts.map