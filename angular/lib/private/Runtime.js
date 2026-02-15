import INITIAL_PROPS from "#INITIAL_PROPS";
import root from "#root-selector";
import "@angular/compiler";
import { enableProdMode, importProvidersFrom, } from "@angular/core";
import { bootstrapApplication, BrowserModule, provideClientHydration, } from "@angular/platform-browser";
import { provideServerRendering, renderApplication, } from "@angular/platform-server";
import FrontendModule from "@primate/core/frontend/Module";
export default class Runtime extends FrontendModule {
    name = "angular";
    defaultExtensions = [".component.ts"];
    layouts = true;
    client = true;
    render = async (view, props) => {
        const providers = [
            importProvidersFrom(BrowserModule),
            provideServerRendering(),
            provideClientHydration(),
            {
                provide: INITIAL_PROPS,
                useValue: props,
            },
        ];
        const bootstrap = (context) => bootstrapApplication(view, { providers }, context);
        const html = await renderApplication(bootstrap, {
            document: `<${root}></${root}>`,
        });
        const headMatch = html.match(/<head>(.*?)<\/head>/s);
        const bodyRegex = new RegExp(`<${root}>([\\s\\S]*?)<\\/${root}>`);
        const bodyMatch = html.match(bodyRegex);
        return {
            body: bodyMatch?.[1] || html,
            head: headMatch?.[1] || "",
        };
    };
    async serve(app, next) {
        app.mode === "production" && enableProdMode();
        return super.serve(app, next);
    }
}
//# sourceMappingURL=Runtime.js.map