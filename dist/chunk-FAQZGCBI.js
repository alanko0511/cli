import {
  base_command_default
} from "./chunk-HW46P6ZB.js";
import {
  logout
} from "./chunk-FNPB6SK6.js";
import {
  outputSuccess
} from "./chunk-TBTKQIPA.js";
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
//# sourceMappingURL=chunk-FAQZGCBI.js.map
