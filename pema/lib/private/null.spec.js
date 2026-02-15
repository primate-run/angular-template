import expect from "#expect";
import null_type from "#null";
import test from "@rcompat/test";
test.case("fail", assert => {
    assert(() => null_type.parse(undefined)).throws(expect("nl", undefined));
});
test.case("pass", assert => {
    assert(null_type).type();
    assert(null_type.parse(null)).equals(null).type();
});
//# sourceMappingURL=null.spec.js.map