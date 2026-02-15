import type Validator from "#Validator";
type ErrorFunction = (x: string) => string;
export default function validateRegex(regex: RegExp, error?: ErrorFunction): Validator<string>;
export {};
//# sourceMappingURL=regex.d.ts.map