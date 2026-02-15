import PrimitiveType from "#PrimitiveType";
import max from "#validator/max";
import min from "#validator/min";
import range from "#validator/range";
import values from "#validator/values";
export default class NumericType extends PrimitiveType {
    #datatype;
    constructor(datatype, validators = [], options = {}) {
        super(validators, options);
        this.#datatype = datatype;
    }
    derive(next) {
        const Constructor = this.constructor;
        return new Constructor(this.#datatype, [...this.validators, ...next.validators ?? []], { ...this.options, ...next.options ?? {} });
    }
    values(anyof) {
        return this.derive({ validators: [values(anyof)] });
    }
    range(from, to) {
        return this.derive({ validators: [range(from, to)] });
    }
    min(from) {
        return this.derive({ validators: [min(from)] });
    }
    max(to) {
        return this.derive({ validators: [max(to)] });
    }
    get datatype() {
        return this.#datatype;
    }
    toJSON() {
        return {
            type: this.name,
            datatype: this.#datatype,
        };
    }
}
//# sourceMappingURL=NumericType.js.map