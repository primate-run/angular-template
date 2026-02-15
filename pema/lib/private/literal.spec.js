import literal from "#literal";
import test from "@rcompat/test";
test.case("strings", assert => {
    const foo = literal("foo");
    assert(foo).type();
    assert(foo.parse("foo")).type();
    const error = "expected \"foo\", got `true` (boolean)";
    assert(() => foo.parse(true)).throws(error);
});
test.case("numbers", assert => {
    const foo = literal(1);
    assert(foo).type();
    assert(foo.parse(1)).type();
    const error = "expected 1, got `2` (number)";
    assert(() => foo.parse(2)).throws(error);
});
test.case("booleans", assert => {
    const t = literal(true);
    const f = literal(false);
    assert(t).type();
    assert(f).type();
    assert(t.parse(true)).type();
    assert(f.parse(false)).type();
    assert(() => t.parse(false)).throws("expected true, got `false` (boolean)");
    assert(() => f.parse(true)).throws("expected false, got `true` (boolean)");
});
//# sourceMappingURL=literal.spec.js.map