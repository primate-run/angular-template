import expect from "#expect";
import test from "@rcompat/test";
export default (i, min, max) => {
    test.case("fail", assert => {
        assert(() => i.parse("1")).throws(expect("n", "1"));
        assert(() => i.parse(1.1)).throws("1.1 is not an integer");
        assert(() => i.parse(-1.1)).throws("-1.1 is not an integer");
        assert(() => i.parse(0n)).throws(expect("n", 0n));
        assert(() => i.parse(1n)).throws(expect("n", 1n));
    });
    test.case("pass", assert => {
        assert(i).type();
        assert(i.parse(0)).equals(0).type();
        assert(i.parse(1)).equals(1).type();
    });
    test.case("range", assert => {
        assert(i.parse(min)).equals(min).type();
        assert(i.parse(max)).equals(max).type();
        assert(() => i.parse(min - 1)).throws(`${min - 1} is out of range`);
        assert(() => i.parse(max + 1)).throws(`${max + 1} is out of range`);
    });
    test.case("coerced", assert => {
        const coerced = i.coerce;
        assert(coerced.parse(0)).equals(0).type();
        assert(coerced.parse(1)).equals(1).type();
        assert(coerced.parse("1")).equals(1).type();
        assert(coerced.parse("1.0")).equals(1).type();
        assert(coerced.parse("1.")).equals(1).type();
        assert(() => coerced.parse("0.1")).throws("0.1 is not an integer");
        assert(() => coerced.parse(".1")).throws("0.1 is not an integer");
        assert(coerced.parse("-1")).equals(-1).type();
        assert(coerced.parse("-1.0")).equals(-1).type();
        assert(coerced.parse("-1.")).equals(-1).type();
        assert(() => coerced.parse("-0.1")).throws("-0.1 is not an integer");
        assert(() => coerced.parse("-.1")).throws("-0.1 is not an integer");
    });
    test.case("default", assert => {
        [i.default(1), i.default(() => 1)].forEach(d => {
            assert(d).type();
            assert(d.parse(undefined)).equals(1).type();
            assert(d.parse(1)).equals(1).type();
            assert(d.parse(0)).equals(0).type();
            assert(() => d.parse(1.2)).throws("1.2 is not an integer");
            assert(() => d.parse(-1.2)).throws("-1.2 is not an integer");
        });
    });
    test.case("validator - range", assert => {
        const r = i.range(-10, 10);
        assert(r.parse(-10)).equals(-10).type();
        assert(r.parse(0)).equals(0).type();
        assert(r.parse(10)).equals(10).type();
        assert(() => r.parse(-11)).throws("-11 is out of range");
        assert(() => r.parse(11)).throws("11 is out of range");
    });
    test.case("validator - min", assert => {
        const r = i.min(-10);
        assert(r.parse(-10)).equals(-10).type();
        assert(r.parse(0)).equals(0).type();
        assert(r.parse(10)).equals(10).type();
        assert(() => r.parse(-11)).throws("-11 is lower than min (-10)");
    });
    test.case("validator - max", assert => {
        const r = i.max(10);
        assert(r.parse(-10)).equals(-10).type();
        assert(r.parse(0)).equals(0).type();
        assert(r.parse(10)).equals(10).type();
        assert(() => r.parse(11)).throws("11 is greater than max (10)");
    });
};
//# sourceMappingURL=int.js.map