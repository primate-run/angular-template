import type Validated from "#client/Validated";
declare const field: <T>(initial: T) => {
    delete: (url: string, options?: {
        headers?: import("@rcompat/type").Dict<string>;
        map?: ((v: T) => import("@rcompat/type").JSONValue) | undefined;
        path?: import("@rcompat/type").JSONPointer;
    } | undefined) => Validated<T>;
    patch: (url: string, options?: {
        headers?: import("@rcompat/type").Dict<string>;
        map?: ((v: T) => import("@rcompat/type").JSONValue) | undefined;
        path?: import("@rcompat/type").JSONPointer;
    } | undefined) => Validated<T>;
    post: (url: string, options?: {
        headers?: import("@rcompat/type").Dict<string>;
        map?: ((v: T) => import("@rcompat/type").JSONValue) | undefined;
        path?: import("@rcompat/type").JSONPointer;
    } | undefined) => Validated<T>;
    put: (url: string, options?: {
        headers?: import("@rcompat/type").Dict<string>;
        map?: ((v: T) => import("@rcompat/type").JSONValue) | undefined;
        path?: import("@rcompat/type").JSONPointer;
    } | undefined) => Validated<T>;
};
export default field;
//# sourceMappingURL=field.d.ts.map