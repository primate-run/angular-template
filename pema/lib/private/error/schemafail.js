import SchemaError from "#SchemaError";
export default function schemafail(message, ...args) {
    return new SchemaError(message, ...args);
}
//# sourceMappingURL=schemafail.js.map