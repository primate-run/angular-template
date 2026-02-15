import type Validator from "#Validator";
type Limit = bigint | number;
type Input = bigint | number | string | unknown[];
export default function max(limit: Limit): Validator<Input>;
export {};
//# sourceMappingURL=max.d.ts.map