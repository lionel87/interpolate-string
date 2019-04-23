"use strict";

module.exports = (text, context, pattern = /\{\{\s?(.+?)\s?\}\}/g) => text
    .replace(pattern, (_, key) => {
        let value = context;
        for (const p of key.split(".")) {
            if (typeof value[p] !== "undefined") {
                value = value[p];
            } else {
                return _;
            }
        }
        return value;
    });
