import type NormalizeSchema from "#NormalizeSchema";
import type Schema from "#Schema";
/**
* Create a schema.
*/
declare function schema<const S extends Schema>(s: S): NormalizeSchema<S>;
declare namespace schema {
    var array: typeof import("#array").default;
    var bigint: import("./BigIntType.js").default<"i64">;
    var biguint: import("./BigUintType.js").default<"u64">;
    var blob: import("./BlobType.js").default;
    var boolean: import("./BooleanType.js").default;
    var constructor: <const C extends import("@rcompat/type").AbstractNewable>(constructor: C) => import("./ConstructorType.js").default<C>;
    var date: import("./DateType.js").default;
    var dict: typeof import("#dict").default;
    var f32: import("./NumberType.js").default<"f32">;
    var f64: import("./NumberType.js").default<"f64">;
    var file: import("./FileType.js").default;
    var i128: import("./BigIntType.js").default<"i128">;
    var i16: import("./IntType.js").default<"i16">;
    var i32: import("./IntType.js").default<"i32">;
    var i64: import("./BigIntType.js").default<"i64">;
    var i8: import("./IntType.js").default<"i8">;
    var int: import("./IntType.js").default<"i32">;
    var number: import("./NumberType.js").default<"f64">;
    var omit: typeof import("#omit").default;
    var record: <const Key extends import("./RecordTypeKey.js").default, const Value extends import("./Parsed.js").default<unknown>>(k: Key, v: Value) => import("./RecordType.js").default<Key, Value>;
    var pure: typeof import("#pure").default;
    var string: import("./StringType.js").default;
    var symbol: import("./SymbolType.js").default;
    var u128: import("./BigUintType.js").default<"u128">;
    var u16: import("./UintType.js").default<"u16">;
    var u32: import("./UintType.js").default<"u32">;
    var u64: import("./BigUintType.js").default<"u64">;
    var u8: import("./UintType.js").default<"u8">;
    var uint: import("./UintType.js").default<"u32">;
    var union: typeof import("#union").default;
    var unknown: import("./UnknownType.js").default;
    var url: import("./URLType.js").default;
}
export default schema;
//# sourceMappingURL=index.d.ts.map