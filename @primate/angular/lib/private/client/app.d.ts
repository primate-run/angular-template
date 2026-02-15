import "@angular/compiler";
import type ClientData from "@primate/core/client/Data";
import type Mode from "@primate/core/Mode";
import type { Dict } from "@rcompat/type";
type Data = ClientData<{
    views: string[];
    props: Dict[];
    mode: Mode;
}>;
export default class AngularApp {
    #private;
    static mount(_view: string, data: ClientData<Data>): Promise<void>;
}
export {};
//# sourceMappingURL=app.d.ts.map