import {
  mockAndCaptureOutput
} from "../../../chunk-OXYKCJ7U.js";
import {
  Logout
} from "../../../chunk-LBDNVUTY.js";
import {
  logout
} from "../../../chunk-YNRRLE3I.js";
import {
  describe,
  globalExpect,
  test,
  vi
} from "../../../chunk-W5G2YPO2.js";
import "../../../chunk-BPC73D3P.js";
import "../../../chunk-WWR5GV7Z.js";
import "../../../chunk-SHWOPMLQ.js";
import "../../../chunk-YZAKRLKS.js";
import "../../../chunk-OWJEOMCQ.js";
import "../../../chunk-REPD2IEO.js";
import "../../../chunk-AG6LRS7U.js";
import "../../../chunk-25IMI7TH.js";
import "../../../chunk-FYGQPHYH.js";
import "../../../chunk-ETLGRSYP.js";
import "../../../chunk-PHHK7BVI.js";
import "../../../chunk-75LV6AQS.js";
import "../../../chunk-EG6MBBEN.js";
import "../../../chunk-3FBDJEGD.js";
import "../../../chunk-UMUTXITN.js";
import "../../../chunk-HMDWNGIV.js";
import "../../../chunk-G5R6YD27.js";
import "../../../chunk-G2ZZKGSV.js";
import "../../../chunk-UV5N2VL7.js";
import "../../../chunk-XE5EOEBL.js";
import "../../../chunk-B5EXYCV3.js";
import {
  init_cjs_shims
} from "../../../chunk-PKR7KJ6P.js";

// src/cli/commands/auth/logout.test.ts
init_cjs_shims();
vi.mock("@shopify/cli-kit/node/session");
describe("logs out", () => {
  test("clears the session", async () => {
    let outputMock = mockAndCaptureOutput();
    await Logout.run(), globalExpect(logout).toHaveBeenCalledOnce(), globalExpect(outputMock.success()).toMatchInlineSnapshot('"Logged out from Shopify"');
  });
});
//# sourceMappingURL=logout.test.js.map
