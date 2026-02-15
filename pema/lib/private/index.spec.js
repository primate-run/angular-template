import array from "#array";
import bigint from "#bigint";
import blob from "#blob";
import boolean from "#boolean";
import date from "#date";
import expect from "#expect";
import file from "#file";
import schema from "#index";
import number from "#number";
import partial from "#partial";
import string from "#string";
import symbol from "#symbol";
import tuple from "#tuple";
import test from "@rcompat/test";
const types = [
    [bigint, 0n, 0, "bi"],
    [blob, new Blob(), 0, "bb"],
    [boolean, false, "0", "b"],
    [date, new Date(), "0", "d"],
    [number, 0, "0", "n"],
    [string, "0", 0, "s"],
    [symbol, Symbol(), 0, "sy"],
    [file, new File([""], ""), 0, "f"],
];
test.case("primitive validators", assert => {
    types.forEach(([parsed, good, bad, type]) => {
        const s = schema(parsed);
        assert(s.parse(good)).equals(good);
        assert(() => s.parse(bad)).throws(expect(type, bad));
    });
});
test.case("literals", assert => {
    const foo = schema("foo");
    assert(foo).type();
    assert(foo.parse("foo")).equals("foo").type();
    const t = schema(true);
    assert(t).type();
    assert(t.parse(true)).equals(true).type();
    assert(() => t.parse(false)).throws();
    const f = schema(false);
    assert(f).type();
    assert(f.parse(false)).equals(false).type();
    assert(() => f.parse(true)).throws();
});
test.case("empty []", assert => {
    const s = schema([]);
    assert(s).type();
    assert(s.parse([])).equals([]).type();
});
test.case("empty {}", assert => {
    const s = schema({});
    assert(s).type();
    assert(s.parse({})).equals({}).type();
});
test.case("object", assert => {
    const o = { foo: "bar" };
    const o1 = { bar: { baz: 0 }, foo: "bar" };
    const s = schema({ foo: string });
    const s1 = schema({ bar: { baz: number }, foo: string });
    assert().type();
    assert(s.parse(o)).equals(o).type();
    assert(s1).type();
    assert(s1.parse(o1)).equals(o1).type();
    //  assert(() => s.parse(1)).throws("Expected object");
    // assert(() => s.parse(1)).throws("Expected object");
});
test.case("array", assert => {
    const g0 = [];
    const g1 = ["f"];
    const g2 = ["f", "f"];
    const b0 = [false];
    const b1 = ["f", 0];
    const s = schema(array(string));
    const si = schema([string]);
    assert(s).type();
    assert(s.parse(g0)).equals(g0).type();
    assert(s.parse(g1)).equals(g1).type();
    assert(s.parse(g2)).equals(g2).type();
    assert(si).type();
    assert(si.parse(g0)).equals(g0).type();
    assert(si.parse(g1)).equals(g1).type();
    assert(si.parse(g2)).equals(g2).type();
    assert(() => s.parse(b0)).throws(expect("s", false, 0));
    assert(() => s.parse(b1)).throws(expect("s", 0, 1));
    assert(() => si.parse(b0)).throws(expect("s", false, 0));
    assert(() => si.parse(b1)).throws(expect("s", 0, 1));
    assert(() => s.parse(1)).throws(expect("a", 1));
    assert(() => si.parse(1)).throws(expect("a", 1));
});
test.case("tuple", assert => {
    const g0 = ["f", 0];
    const b0 = [];
    const b1 = ["f"];
    const b2 = [0];
    const b3 = [0, "f"];
    const s = schema(tuple(string, number));
    const si = schema([string, number]);
    const snb = schema([string, number, boolean]);
    assert(s).type();
    assert(s.parse(g0)).equals(g0).type();
    assert(si).type();
    assert(si.parse(g0)).equals(g0).type();
    assert(snb).type();
    assert(() => s.parse(b0)).throws(expect("s", undefined, 0));
    assert(() => s.parse(b1)).throws(expect("n", undefined, 1));
    assert(() => s.parse(b2)).throws(expect("s", 0, 0));
    assert(() => s.parse(b3)).throws(expect("s", 0, 0));
    assert(() => si.parse(b0)).throws(expect("s", undefined, 0));
    assert(() => si.parse(b1)).throws(expect("n", undefined, 1));
    assert(() => si.parse(b2)).throws(expect("s", 0, 0));
    assert(() => si.parse(b3)).throws(expect("s", 0, 0));
});
test.case("complex", assert => {
    const complex = schema({
        name: string,
        scores: array(number),
        tupled: tuple(string, boolean),
    });
    const complexi = schema({
        name: string,
        scores: [number],
        tupled: [string, boolean],
    });
    const valid = { name: "Alice", scores: [1, 2, 3], tupled: ["yes", true] };
    const invalid = { name: "Bob", scores: ["oops"], tupled: ["ok", "nope"] };
    assert(complex).type();
    assert(complex.parse(valid)).equals(valid).type;
    assert(() => complex.parse(invalid))
        .throws(expect("n", "oops", "scores.0"));
    assert(complexi).type();
    assert(complexi.parse(valid)).equals(valid).type();
    assert(() => complexi.parse(invalid))
        .throws(expect("n", "oops", "scores.0"));
});
test.case("null/undefined", assert => {
    assert(schema(null)).type();
    assert(schema(null).parse(null)).equals(null).type();
    assert(() => schema(null).parse("null")).throws(expect("nl", "null"));
    assert(schema(undefined)).type();
    assert(schema(undefined).parse(undefined)).equals(undefined)
        .type();
    assert(() => schema(undefined).parse(null)).throws(expect("u", null));
});
test.case("partial", assert => {
    const p = partial({ bar: number, foo: string });
    assert(p.parse({})).equals({});
    assert(p.parse({ foo: "foo" })).equals({ foo: "foo" });
    assert(p.parse({ bar: 1 })).equals({ bar: 1 });
    assert(p.parse({ bar: 1, foo: "foo" })).equals({ bar: 1, foo: "foo" });
    assert(() => p.parse({ bar: "foo", foo: 1 })).throws(expect("n", "foo", "bar"));
    assert(p).type();
});
test.case("coerce", assert => {
    const coerced = schema({
        name: string,
        scores: array(number),
        tupled: tuple(string, boolean),
    }).coerce;
    const coercedi = schema({
        name: string,
        scores: [number],
        tupled: [string, boolean],
    }).coerce;
    const valid = { name: "Alice", scores: ["1", "2"], tupled: ["yes", "true"] };
    const invalid = { name: "Bob", scores: ["oops"], tupled: ["ok", "nope"] };
    assert(coerced).type();
    assert(coerced.parse(valid)).equals(valid).type;
    assert(coercedi).type();
    assert(coercedi.parse(valid)).equals(valid).type();
    assert(() => coerced.parse(invalid))
        .throws(expect("n", "oops", "scores.0"));
});
//# sourceMappingURL=index.spec.js.map