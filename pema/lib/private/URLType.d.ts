import BuiltinType from "#BuiltinType";
import Storable from "#Storable";
export default class URLType extends BuiltinType<URL, "URLType"> implements Storable<"url"> {
    get Type(): {
        new (url: string | URL, base?: string | URL): URL;
        prototype: URL;
        canParse(url: string | URL, base?: string | URL): boolean;
        createObjectURL(obj: Blob | MediaSource): string;
        parse(url: string | URL, base?: string | URL): URL | null;
        revokeObjectURL(url: string): void;
    };
    get name(): "url";
    get datatype(): "url";
    toJSON(): {
        type: "url";
        datatype: "url";
    };
}
//# sourceMappingURL=URLType.d.ts.map