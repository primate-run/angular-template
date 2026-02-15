import { signal } from "@angular/core";
import client from "@primate/core/client";
function useValidate(init) {
    const value = signal(init.initial);
    const loading = signal(false);
    const error = signal(null);
    async function update(updater) {
        const previous = value();
        const next = updater(previous);
        value.set(next);
        loading.set(true);
        error.set(null);
        try {
            await client.validateField(init, next);
        }
        catch (e) {
            // rollback
            value.set(previous);
            error.set(e);
        }
        finally {
            loading.set(false);
        }
    }
    return { error, loading, update, value };
}
const field = client.toValidated(useValidate);
export default field;
//# sourceMappingURL=field.js.map