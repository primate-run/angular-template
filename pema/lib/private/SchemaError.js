import mark from "@rcompat/cli/mark";
export default class SchemaError extends Error {
    constructor(message, ...params) {
        super(mark(message, ...params));
    }
}
;
//# sourceMappingURL=SchemaError.js.map