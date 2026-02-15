import f32 from "#f32";
import test from "@rcompat/test";
test.case("fail", assert => {
    const n = 1.23456789012345;
    assert(() => f32.parse(n)).throws(`${n} is not a 32-bit float`);
});
test.case("pass", assert => {
    assert(f32).type();
    assert(f32.parse(1.5)).equals(1.5).type();
    assert(f32.parse(123456.75)).equals(123456.75).type();
});
//# sourceMappingURL=f32.spec.js.map