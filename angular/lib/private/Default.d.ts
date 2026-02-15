import Runtime from "#Runtime";
export default class Default extends Runtime {
    root: {
        create: (depth: number, i18n_active: boolean) => string;
    };
    css: {
        filter: RegExp;
    };
    compile: {
        client: (text: string) => {
            js: string;
            css: string;
        };
        server: (text: string) => string;
    };
}
//# sourceMappingURL=Default.d.ts.map