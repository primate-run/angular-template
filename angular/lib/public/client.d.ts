import type Validated from "#client/Validated";
import form from "#client/form";
declare const client: {
    form: typeof form;
    field: <T>(initial: T) => {
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
};
export default client;
export type { Validated };
//# sourceMappingURL=client.d.ts.map