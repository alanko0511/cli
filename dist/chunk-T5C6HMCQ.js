import {
  base_command_default
} from "./chunk-ITXHWLVL.js";
import {
  logout
} from "./chunk-DHIQB2XW.js";
import {
  outputSuccess
} from "./chunk-55O4MPI7.js";
import {
  init_cjs_shims
} from "./chunk-PKR7KJ6P.js";

// src/cli/commands/auth/logout.ts
init_cjs_shims();
var Logout = class extends base_command_default {
  static {
    this.description = "Logs you out of the Shopify account or Partner account and store.";
  }
  async run() {
    await logout(), outputSuccess("Logged out from all the accounts");
  }
};

export {
  Logout
};
//# sourceMappingURL=chunk-T5C6HMCQ.js.map
