import bigint from "#bigint";
import boolean from "#boolean";
import number from "#number";
import string from "#string";
import union from "#union";
import test from "@rcompat/test";
test.case("less than 2 members", assert => {
    const error = "union type must have at least two members";
    // 0 members
    try {
        assert(union()).type();
    }
    catch {
        // noop
    }
    assert(() => union()).throws(error);
    // 1 member
    try {
        assert(union(string)).type();
    }
    catch {
        // noop
    }
    assert(() => union(string)).throws(error);
});
test.case("flat", assert => {
    const bs = union(boolean, string);
    assert(bs).type();
    assert(bs.parse("foo")).equals("foo").type();
    assert(bs.parse(true)).equals(true).type();
    const bs_e = "expected `boolean | string`, got `1` (number)";
    assert(() => bs.parse(1)).throws(bs_e);
    const fb = union("foo", "bar");
    assert(fb).type();
    assert(fb.parse("foo")).equals("foo").type();
    assert(fb.parse("bar")).equals("bar").type();
    const fb_e = "expected `\"foo\" | \"bar\"`, got `1` (number)";
    assert(() => fb.parse(1)).throws(fb_e);
});
test.case("deep", assert => {
    const u = union(string, { bar: "baz", foo: bigint });
    const u_e = "string | { bar: \"baz\", foo: bigint }";
    assert(u).type();
    assert(u.parse("foo")).equals("foo")
        .type();
    assert(() => u.parse(1)).throws(`expected \`${u_e}\`, got \`1\` (number)`);
});
test.case("classes", assert => {
    class Class {
    }
    ;
    const c = new Class();
    const u = union(string, Class);
    const u_e = "string | constructor";
    assert(u).type();
    assert(u.parse("foo")).equals("foo").type();
    assert(u.parse(c)).equals(c).type();
    assert(() => u.parse(1)).throws(`expected \`${u_e}\`, got \`1\` (number)`);
});
test.case("default", assert => {
    const bs_def_s = union(boolean, string).default("foo");
    const bs_def_s1 = union(boolean, string).default(() => "foo");
    const bs_def_b = union(boolean, string).default(true);
    const bs_def_b1 = union(boolean, string).default(() => true);
    [bs_def_s, bs_def_s1, bs_def_b, bs_def_b1].forEach(type => {
        assert(type).type();
    });
    assert(bs_def_s.parse(undefined)).equals("foo");
    assert(bs_def_s1.parse(undefined)).equals("foo");
    assert(bs_def_b.parse(undefined)).equals(true);
    assert(bs_def_b1.parse(undefined)).equals(true);
});
test.case("nullable", assert => {
    const sn = union(string, null);
    assert(sn).type();
    assert(sn.parse("foo")).equals("foo").type();
    assert(sn.parse(null)).equals(null);
    assert(() => sn.parse(undefined)).throws();
});
test.case("optional", assert => {
    const u = union(string.optional(), number);
    assert(u).type();
    assert(u.parse("foo")).equals("foo") /*.type<string | number | undefined>()*/;
    assert(u.parse(42)).equals(42);
    assert(u.parse(undefined)).equals(undefined);
});
//# sourceMappingURL=union.spec.js.map