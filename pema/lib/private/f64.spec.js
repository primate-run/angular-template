import expect from "#expect";
import number from "#number";
import test from "@rcompat/test";
test.case("fail", assert => {
    assert(() => number.parse("1")).throws(expect("n", "1"));
    assert(() => number.parse(1n)).throws(expect("n", 1n));
});
test.case("pass", assert => {
    assert(number).type();
    assert(number.parse(1)).equals(1).type();
});
test.case("coerce", assert => {
    const coerced = number.coerce;
    assert(coerced).type();
    assert(coerced.parse(1)).equals(1).type();
    assert(coerced.parse(-1)).equals(-1).type();
    assert(coerced.parse("1")).equals(1).type();
    assert(coerced.parse("1.0")).equals(1).type();
    assert(coerced.parse("1.")).equals(1).type();
    assert(coerced.parse("0.1")).equals(0.1).type();
    assert(coerced.parse(".1")).equals(0.1).type();
    assert(coerced.parse("-1")).equals(-1).type();
    assert(coerced.parse("-1.0")).equals(-1).type();
    assert(coerced.parse("-1.")).equals(-1).type();
    assert(coerced.parse("-0.1")).equals(-0.1).type();
    assert(coerced.parse("-.1")).equals(-0.1).type();
});
test.case("default", assert => {
    [number.default(1), number.default(() => 1)].forEach(d => {
        assert(d).type();
        assert(d.parse(undefined)).equals(1).type();
        assert(d.parse(1)).equals(1).type();
        assert(d.parse(0)).equals(0).type();
        assert(() => d.parse("1")).throws(expect("n", "1"));
    });
});
test.case("toJSON", assert => {
    assert(number.toJSON())
        .equals({ type: "number", datatype: "f64" });
});
//# sourceMappingURL=f64.spec.js.map