import boolean from "#boolean";
import expect from "#expect";
import test from "@rcompat/test";
test.case("fail", assert => {
    assert(() => boolean.parse("true")).throws(expect("b", "true"));
    assert(() => boolean.parse("false")).throws(expect("b", "false"));
});
test.case("pass", assert => {
    assert(boolean).type();
    assert(boolean.parse(true)).equals(true).type();
    assert(boolean.parse(false)).equals(false).type();
});
test.case("coerce", assert => {
    const coerced = boolean.coerce;
    assert(coerced).type();
    assert(coerced.parse(true)).equals(true).type();
    assert(coerced.parse(false)).equals(false).type();
    assert(coerced.parse("true")).equals(true).type();
    assert(coerced.parse("false")).equals(false).type();
    assert(() => coerced.parse("1")).throws(expect("b", "1"));
    assert(() => coerced.parse("0")).throws(expect("b", "0"));
});
test.case("default", assert => {
    [boolean.default(true), boolean.default(() => true)].forEach(d => {
        assert(d).type();
        assert(d.parse(undefined)).equals(true).type();
        assert(d.parse(true)).equals(true).type();
        assert(d.parse(false)).equals(false).type();
        assert(() => d.parse("true")).throws(expect("b", "true"));
    });
});
test.case("toJSON", assert => {
    assert(boolean.toJSON())
        .type()
        .equals({ type: "boolean", datatype: "boolean" });
});
//# sourceMappingURL=boolean.spec.js.map