import verbs from "@primate/core/request/verbs";
export const tests = [];
export default {
    ...Object.fromEntries(verbs.map(verb => [verb, (route, tester) => {
            tests.push({ route, tester, verb });
        }])),
};
//# sourceMappingURL=test.js.map