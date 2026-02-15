import { type Signal } from "@angular/core";
import { type FormInit } from "@primate/core/client";
import type { Dict } from "@rcompat/type";
type Field<T> = {
    name: string;
    value: T;
    errors: Signal<readonly string[]>;
    error: Signal<string | null>;
};
type FormView<Values extends Dict> = {
    id: string;
    submitting: Signal<boolean>;
    submit: (event?: Event) => Promise<void>;
    errors: Signal<readonly string[]>;
    field: <K extends keyof Values & string>(name: K) => Field<Values[K]>;
};
type Initial<Values extends Dict> = FormInit & {
    initial?: Values;
};
declare function form<Values extends Dict>(init: Initial<Values>): FormView<Values>;
declare function form(init?: FormInit): FormView<Dict>;
export default form;
//# sourceMappingURL=form.d.ts.map