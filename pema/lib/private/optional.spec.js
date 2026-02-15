import bigint from "#bigint";
import boolean from "#boolean";
import schema from "#index";
import optional from "#optional";
import string from "#string";
import test from "@rcompat/test";
const b = optional(boolean);
test.case("empty", assert => {
    assert(b).type();
    const e = b.parse(undefined);
    assert(e).equals(undefined).type();
});
test.case("object", assert => {
    const s = schema({
        bar: {
            baz: bigint,
        },
        foo: optional(string),
    });
    const sv = schema({
        bar: {
            baz: bigint,
        },
        foo: string.optional(),
    });
    assert(s).type();
    assert(sv).type();
    const sv0 = sv.parse({
        bar: {
            baz: 1n,
        },
        foo: undefined,
    });
    assert(sv0).equals({ bar: { baz: 1n } });
    const s0 = s.parse({
        bar: {
            baz: 1n,
        },
        foo: undefined,
    });
    assert(s0).equals({ bar: { baz: 1n } });
    const s1 = s.parse({
        bar: {
            baz: 1n,
        },
    });
    assert(s1).equals({ bar: { baz: 1n } });
});
//# sourceMappingURL=optional.spec.js.map