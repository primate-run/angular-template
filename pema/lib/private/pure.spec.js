import pure from "#pure";
import test from "@rcompat/test";
test.case("no parsing", assert => {
    assert(pure().parse(1)).type().equals(1);
    assert(pure().parse({ foo: "bar" })).type()
        .equals({ foo: "bar" });
});
//# sourceMappingURL=pure.spec.js.map