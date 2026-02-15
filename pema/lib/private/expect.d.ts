declare const types: {
    a: string;
    b: string;
    bb: string;
    bi: string;
    co: string;
    d: string;
    f: string;
    i: string;
    n: string;
    nl: string;
    o: string;
    s: string;
    sy: string;
    u: string;
    ui: string;
    ur: string;
};
type At = number | string;
export default function expect(type: keyof typeof types, got: unknown, at?: At): string;
export {};
//# sourceMappingURL=expect.d.ts.map