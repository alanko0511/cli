import {
  clearCollectedLogs,
  collectedLogs
} from "./chunk-55O4MPI7.js";
import {
  init_cjs_shims
} from "./chunk-PKR7KJ6P.js";

// ../cli-kit/dist/public/node/testing/output.js
init_cjs_shims();
function mockAndCaptureOutput() {
  return {
    output: () => (collectedLogs.output ?? []).join(`
`),
    info: () => (collectedLogs.info ?? []).join(`
`),
    debug: () => (collectedLogs.debug ?? []).join(`
`),
    success: () => (collectedLogs.success ?? []).join(`
`),
    completed: () => (collectedLogs.completed ?? []).join(`
`),
    warn: () => (collectedLogs.warn ?? []).join(`
`),
    error: () => (collectedLogs.error ?? []).join(`
`),
    clear: () => {
      clearCollectedLogs();
    }
  };
}

export {
  mockAndCaptureOutput
};
//# sourceMappingURL=chunk-3UKGEQW6.js.map
