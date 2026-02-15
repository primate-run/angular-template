import number from "#number";
import object from "#object";
import string from "#string";
import test from "@rcompat/test";
test.case("empty", assert => {
    const o = object({});
    assert(o).type();
    assert(o.parse({})).equals({}).type();
});
test.case("object", assert => {
    const o = { foo: "bar" };
    const o1 = { bar: { baz: 0 }, foo: "bar" };
    const s = object({ foo: string });
    const s1 = object({ bar: { baz: number }, foo: string });
    assert().type();
    assert(s.parse(o)).equals(o).type();
    assert(s1).type();
    assert(s1.parse(o1)).equals(o1).type();
});
test.case("input type with nested defaults", assert => {
    const schema = object({
        required: string,
        config: {
            host: string.default("localhost"),
            port: number.default(8080),
        },
        optional: string.optional(),
    });
    // Type tests
    const input1 = {
        required: "test",
    };
    const input2 = {
        required: "test",
        config: {},
    };
    assert(schema.input).type();
    // Runtime tests - these are probably failing
    const result1 = schema.parse({ required: "test" });
    assert(result1).equals({
        required: "test",
        config: { host: "localhost", port: 8080 }, // Should apply defaults
    });
    const result2 = schema.parse({ required: "test", config: {} });
    assert(result2).equals({
        required: "test",
        config: { host: "localhost", port: 8080 }, // Should apply defaults
    });
    const result3 = schema.parse({ required: "test", config: { host: "custom" } });
    assert(result3).equals({
        required: "test",
        config: { host: "custom", port: 8080 }, // Should apply port default
    });
});
test.case("non-object input throws", assert => {
    const o = object({ foo: string.default("bar") });
    assert(() => o.parse(null)).throws("expected object, got null");
    assert(() => o.parse(42)).throws("expected object, got `42` (number)");
    assert(() => o.parse("str")).throws("expected object, got `str` (string)");
});
//# sourceMappingURL=object.spec.js.map