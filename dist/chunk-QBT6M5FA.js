import {
  prompts
} from "./chunk-T3O7AR22.js";
import {
  staticService
} from "./chunk-LSEPHTDL.js";
import {
  asyncTasks
} from "./chunk-4D3FEZTG.js";
import {
  base_command_default
} from "./chunk-BPC73D3P.js";
import {
  init_cjs_shims
} from "./chunk-PKR7KJ6P.js";

// src/cli/commands/kitchen-sink/index.ts
init_cjs_shims();
var KitchenSinkAll = class extends base_command_default {
  static {
    this.description = "View all the available UI kit components";
  }
  static {
    this.hiddenAliases = ["kitchen-sink all"];
  }
  static {
    this.hidden = !0;
  }
  async run() {
    await staticService(), await prompts(), await asyncTasks();
  }
};

export {
  KitchenSinkAll
};
//# sourceMappingURL=chunk-QBT6M5FA.js.map
