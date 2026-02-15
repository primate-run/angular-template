import BuiltinType from "#BuiltinType";
import Storable from "#Storable";
export default class BlobType extends BuiltinType<Blob, "BlobType"> implements Storable<"blob"> {
    get Type(): {
        new (blobParts?: BlobPart[], options?: BlobPropertyBag): Blob;
        prototype: Blob;
    };
    get name(): "blob";
    get datatype(): "blob";
    toJSON(): {
        type: "blob";
        datatype: "blob";
    };
}
//# sourceMappingURL=BlobType.d.ts.map