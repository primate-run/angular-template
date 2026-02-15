import expect from "#expect";
import symbol from "#symbol";
import test from "@rcompat/test";
test.case("fail", assert => {
    assert(() => symbol.parse("true")).throws(expect("sy", "true"));
});
test.case("pass", assert => {
    assert(symbol).type();
    const s = Symbol();
    assert(symbol.parse(s)).equals(s).type();
});
test.case("default", assert => {
    const foo_s = Symbol("foo");
    const bar_s = Symbol("bar");
    [symbol.default(foo_s), symbol.default(() => foo_s)].forEach(d => {
        assert(d).type();
        assert(d.parse(undefined)).equals(foo_s).type();
        assert(d.parse(foo_s)).equals(foo_s).type();
        assert(d.parse(bar_s)).equals(bar_s).type();
        assert(() => d.parse(1)).throws(expect("sy", 1));
    });
});
//# sourceMappingURL=symbol.spec.js.map