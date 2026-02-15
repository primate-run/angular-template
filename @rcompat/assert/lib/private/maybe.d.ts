import is from "#is";
import type { Newable } from "@rcompat/type";
type MaybeConditions = {
    [K in Exclude<keyof typeof is, "instance">]: <T>(x: T) => T;
} & {
    instance: <T extends Newable>(x: unknown, N: T, error?: Error | string) => InstanceType<T> | null | undefined;
};
declare const maybe: MaybeConditions;
export default maybe;
//# sourceMappingURL=maybe.d.ts.map