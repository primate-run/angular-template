export default function throwsIssues(assert, fn) {
    try {
        fn();
        // fail if nothing was thrown
        assert().fail();
        return []; // unreachable
    }
    catch (error) {
        const e = error;
        return e.issues ?? [];
    }
}
//# sourceMappingURL=throws-issues.js.map