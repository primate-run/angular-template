import type Infer from "#Infer";
import ObjectType from "#ObjectType";
import type ParseOptions from "#ParseOptions";
import PartialType from "#PartialType";
import type StoreSchema from "#StoreSchema";
export default class StoreType<S extends StoreSchema> extends ObjectType<S> {
    #private;
    constructor(properties: S, pk?: string | null);
    get name(): string;
    parse(x: unknown, options?: ParseOptions): Infer<this>;
    partial(): PartialType<any>;
}
//# sourceMappingURL=StoreType.d.ts.map