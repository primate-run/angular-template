import { DestroyRef, computed, inject, signal, } from "@angular/core";
import core from "@primate/core/client";
function try_destroy_ref() {
    try {
        return inject(DestroyRef);
    }
    catch {
        return null;
    }
}
function form(init) {
    const { initial, ...form_init } = init ?? {};
    const controller = core.createForm(form_init);
    const values = initial ?? {};
    const snap = signal(controller.read());
    const unsub = controller.subscribe((next) => snap.set(next));
    try_destroy_ref()?.onDestroy(unsub);
    const submitting = computed(() => snap().submitting);
    const errors = computed(() => snap().errors.form);
    // cache per-field views so templates calling field("x") repeatedly
    // don't recreate computed signals every change detection cycle
    const cache = new Map();
    function field(name) {
        const key = name;
        const cached = cache.get(key);
        if (cached)
            return cached;
        const form_errors = computed(() => snap().errors.fields[key] ?? []);
        const view = {
            name: key,
            value: values[name],
            errors: form_errors,
            error: computed(() => form_errors()[0] ?? null),
        };
        cache.set(key, view);
        return view;
    }
    return {
        id: controller.id,
        submitting,
        submit: (event) => controller.submit(event),
        errors,
        field,
    };
}
export default form;
//# sourceMappingURL=form.js.map