import {
  generate
} from "./chunk-5H3DV4B3.js";
import {
  base_command_default
} from "./chunk-HW46P6ZB.js";
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
//# sourceMappingURL=chunk-QVRT5NTE.js.map
