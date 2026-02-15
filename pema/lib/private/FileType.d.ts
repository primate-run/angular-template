import BuiltinType from "#BuiltinType";
import Storable from "#Storable";
export default class FileType extends BuiltinType<File, "FileType"> implements Storable<"blob"> {
    get Type(): {
        new (fileBits: BlobPart[], fileName: string, options?: FilePropertyBag): File;
        prototype: File;
    };
    get name(): "file";
    get datatype(): "blob";
    toJSON(): {
        type: "file";
        datatype: "blob";
    };
}
//# sourceMappingURL=FileType.d.ts.map