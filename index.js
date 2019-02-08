"use strict";

module.exports = (text, context, pattern = /\{\{\s?(.+?)\s?\}\}/g) => text
    .replace(pattern, (_, key) => {
        let value = context;
        for (const p of key.split(".")) {
            value = value[p] || "";
        }
        return value || "";
    });
