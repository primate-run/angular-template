import date from "#date";
import expect from "#expect";
import test from "@rcompat/test";
test.case("fail", assert => {
    assert(() => date.parse("1")).throws(expect("d", "1"));
});
test.case("pass", assert => {
    assert(date).type();
    const d = new Date();
    assert(date.parse(d)).equals(d).type();
});
test.case("coerce", assert => {
    const coerced = date.coerce;
    assert(coerced).type();
    const d = new Date(1723718400000);
    assert(coerced.parse(1723718400000)).equals(d);
});
test.case("default", assert => {
    const da = new Date();
    const da1 = new Date();
    [date.default(da), date.default(() => da)].forEach(d => {
        assert(d).type();
        assert(d.parse(undefined)).equals(da).type();
        assert(d.parse(da)).equals(da).type();
        assert(d.parse(da1)).equals(da1).type();
        assert(() => d.parse(1)).throws(expect("d", 1));
    });
});
test.case("toJSON", assert => {
    assert(date.toJSON())
        .type()
        .equals({ type: "date", datatype: "datetime" });
});
//# sourceMappingURL=date.spec.js.map