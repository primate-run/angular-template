import is from "#is";
import type { Newable } from "@rcompat/type";
type EveryConditions = {
    [K in Exclude<keyof typeof is, "instance">]: <T>(xs: T[]) => T[];
} & {
    instance: <T extends Newable>(xs: unknown[], N: T, error?: Error | string) => InstanceType<T>[];
};
declare const every: EveryConditions;
export default every;
//# sourceMappingURL=every.d.ts.map