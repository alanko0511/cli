import {
  generate
} from "./chunk-B7CLPP6E.js";
import {
  base_command_default
} from "./chunk-BPC73D3P.js";
import {
  init_cjs_shims
} from "./chunk-PKR7KJ6P.js";

// src/cli/commands/notifications/generate.ts
init_cjs_shims();
var Generate = class extends base_command_default {
  static {
    this.description = "Generate a notifications.json file for the the CLI, appending a new notification to the current file.";
  }
  static {
    this.hidden = !0;
  }
  async run() {
    await generate();
  }
};

export {
  Generate
};
//# sourceMappingURL=chunk-GJ5NRARP.js.map
