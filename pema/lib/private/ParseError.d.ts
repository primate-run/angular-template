import type JSONPayload from "#json/JSONPayload";
import type ParseIssue from "#ParseIssue";
import type { Serializable } from "@rcompat/type";
export default class ParseError extends Error implements Serializable {
    #private;
    constructor(issues: ParseIssue[]);
    get issues(): ParseIssue[] | undefined;
    toJSON(): JSONPayload;
}
//# sourceMappingURL=ParseError.d.ts.map