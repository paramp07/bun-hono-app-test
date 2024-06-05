import app from "./app";

Bun.serve({
    fetch: app.fetch,
    hostname: "0.0.0.0",
});

console.log("segevr running")