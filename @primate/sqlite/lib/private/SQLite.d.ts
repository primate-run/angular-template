import type { As, DataDict, DB, Sort, With } from "@primate/core/db";
import type { Dict } from "@rcompat/type";
import type { StoreSchema } from "pema";
declare const schema: import("pema").ObjectType<{
    database: import("pema").DefaultType<import("pema").StringType, ":memory:">;
}>;
export default class SQLite implements DB {
    #private;
    static config: typeof schema.input;
    constructor(config?: typeof schema.input, options?: {
        debug?: boolean;
    });
    get explain(): Dict<{
        query: string;
        plans: string[];
    }>;
    get schema(): {
        create: (as: As, store: StoreSchema) => void;
        delete: (table: string) => void;
    };
    create<O extends Dict>(as: As, record: Dict): Promise<O>;
    read(as: As, args: {
        count: true;
        where: DataDict;
        with?: never;
    }): Promise<number>;
    read(as: As, args: {
        where: DataDict;
        fields?: string[];
        limit?: number;
        sort?: Sort;
        with?: With;
    }): Promise<Dict[]>;
    update(as: As, args: {
        set: DataDict;
        where: DataDict;
    }): Promise<number>;
    delete(as: As, args: {
        where: DataDict;
    }): Promise<number>;
    close(): void;
}
export {};
//# sourceMappingURL=SQLite.d.ts.map