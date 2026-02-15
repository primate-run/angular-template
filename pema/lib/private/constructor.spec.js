import constructor from "#constructor";
import expect from "#expect";
import test from "@rcompat/test";
test.case("fail", assert => {
    class Foo {
    }
    ;
    const c = constructor(Foo);
    assert(() => c.parse("1")).throws(expect("co", "1"));
});
test.case("pass", assert => {
    class Foo {
    }
    ;
    const c = constructor(Foo);
    const f = new Foo();
    assert(c).type();
    assert(c.parse(f)).equals(f).type();
});
test.case("default", assert => {
    class Foo {
    }
    ;
    const f = new Foo();
    const f1 = new Foo();
    [constructor(Foo).default(f), constructor(Foo).default(() => f)].map(d => {
        assert(d).type();
        assert(d.parse(undefined)).equals(f).type();
        assert(d.parse(f)).equals(f).type();
        assert(d.parse(f1)).equals(f1).type();
        assert(() => d.parse(1)).throws(expect("co", 1));
    });
});
//# sourceMappingURL=constructor.spec.js.map