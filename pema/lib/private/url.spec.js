import expect from "#expect";
import url from "#url";
import test from "@rcompat/test";
const address = "https://primate.run";
test.case("fail", assert => {
    assert(() => url.parse(address)).throws(expect("ur", address));
});
test.case("pass", assert => {
    assert(url).type();
    const u = new URL(address);
    assert(url.parse(u)).equals(u).type();
});
test.case("default", assert => {
    const u = new URL(address);
    const u1 = new URL("https://example.org");
    [url.default(u), url.default(() => u)].forEach(d => {
        assert(d).type();
        assert(d.parse(undefined)).equals(u).type();
        assert(d.parse(u)).equals(u).type();
        assert(d.parse(u1)).equals(u1).type();
        assert(() => d.parse(1)).throws(expect("ur", 1));
    });
});
test.case("toJSON", assert => {
    assert(url.toJSON())
        .type()
        .equals({ type: "url", datatype: "url" });
});
//# sourceMappingURL=url.spec.js.map