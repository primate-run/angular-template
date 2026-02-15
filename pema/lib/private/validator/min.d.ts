import type Validator from "#Validator";
type Limit = bigint | number;
type Input = bigint | number | string | unknown[];
export default function min(limit: Limit): Validator<Input>;
export {};
//# sourceMappingURL=min.d.ts.map