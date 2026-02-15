import ObjectType from "#ObjectType";
import type Partialable from "#Partialable";
import PartialType from "#PartialType";
type StripReadonly<T> = {
    -readonly [K in keyof T]: T[K];
};
export default function partial<const D extends Partialable>(input: D | ObjectType<D>): PartialType<StripReadonly<D>>;
export {};
//# sourceMappingURL=partial.d.ts.map