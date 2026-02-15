export default (error) => {
    if (error instanceof Error) {
        throw error;
    }
    else {
        throw new TypeError(error ?? "UNKNOWN ERROR");
    }
};
//# sourceMappingURL=errored.js.map