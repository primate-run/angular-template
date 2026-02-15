import unknown from "#unknown";
import test from "@rcompat/test";
test.case("pass", assert => {
    assert(unknown).type();
    assert(unknown.parse("test")).equals("test").type();
});
//# sourceMappingURL=unknown.spec.js.map