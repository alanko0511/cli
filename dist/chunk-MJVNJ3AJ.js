import {
  asyncTasks
} from "./chunk-4D3FEZTG.js";
import {
  base_command_default
} from "./chunk-BPC73D3P.js";
import {
  init_cjs_shims
} from "./chunk-PKR7KJ6P.js";

// src/cli/commands/kitchen-sink/async.ts
init_cjs_shims();
var KitchenSinkAsync = class extends base_command_default {
  static {
    this.description = "View the UI kit components that process async tasks";
  }
  static {
    this.hidden = !0;
  }
  async run() {
    await asyncTasks();
  }
};

export {
  KitchenSinkAsync
};
//# sourceMappingURL=chunk-MJVNJ3AJ.js.map
