import "@angular/compiler";
import { type Type } from "@angular/core";
import FrontendModule from "@primate/core/frontend/Module";
import type Render from "@primate/core/frontend/Render";
import type NextServe from "@primate/core/NextServe";
import type ServeApp from "@primate/core/ServeApp";
export default class Runtime extends FrontendModule<Type<any>> {
    name: string;
    defaultExtensions: string[];
    layouts: boolean;
    client: boolean;
    render: Render<Type<any>>;
    serve(app: ServeApp, next: NextServe): Promise<ServeApp>;
}
//# sourceMappingURL=Runtime.d.ts.map