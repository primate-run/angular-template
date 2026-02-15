import ParsedKey from "#ParsedKey";
import type ParseOptions from "#ParseOptions";
export default function next(s: number | string, options?: ParseOptions): {
    [ParsedKey]: import("@rcompat/type").JSONPointer;
    coerce?: boolean;
    partial?: boolean;
    validators?: import("../Validator.js").default<unknown>[] | undefined;
};
//# sourceMappingURL=next.d.ts.map