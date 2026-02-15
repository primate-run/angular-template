import schemafail from "#error/schemafail";
import PrimitiveType from "#PrimitiveType";
import Storable from "#Storable";
import email from "#validator/email";
import ends_with from "#validator/ends-with";
import isotime from "#validator/isotime";
import length from "#validator/length";
import max from "#validator/max";
import min from "#validator/min";
import regex from "#validator/regex";
import starts_with from "#validator/starts-with";
import uuid from "#validator/uuid";
export default class StringType extends PrimitiveType {
    get name() {
        return "string";
    }
    get datatype() {
        return "string";
    }
    isotime() {
        return this.derive({ validators: [isotime] });
    }
    regex(pattern) {
        return this.derive({ validators: [regex(pattern)] });
    }
    email() {
        return this.derive({ validators: [email] });
    }
    uuid() {
        return this.derive({ validators: [uuid] });
    }
    startsWith(prefix) {
        return this.derive({ validators: [starts_with(prefix)] });
    }
    endsWith(suffix) {
        return this.derive({ validators: [ends_with(suffix)] });
    }
    min(limit) {
        if (limit < 0) {
            throw schemafail("min: {0} must be positive", limit);
        }
        return this.derive({ validators: [min(limit)] });
    }
    max(limit) {
        if (limit < 0) {
            throw schemafail("max: {0} must be positive", limit);
        }
        return this.derive({ validators: [max(limit)] });
    }
    length(from, to) {
        return this.derive({ validators: [length(from, to)] });
    }
    toJSON() {
        return Storable.serialize(this);
    }
}
//# sourceMappingURL=StringType.js.map