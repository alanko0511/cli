import {
  mockAndCaptureOutput
} from "../../../chunk-3UKGEQW6.js";
import {
  Logout
} from "../../../chunk-T5C6HMCQ.js";
import {
  describe,
  globalExpect,
  test,
  vi
} from "../../../chunk-4MSYMXAX.js";
import "../../../chunk-ITXHWLVL.js";
import "../../../chunk-VZI3UA6L.js";
import "../../../chunk-SHWOPMLQ.js";
import "../../../chunk-WJO53JES.js";
import {
  logout
} from "../../../chunk-DHIQB2XW.js";
import "../../../chunk-E2SKS75V.js";
import "../../../chunk-LE2WG5S3.js";
import "../../../chunk-XD3LXUGW.js";
import "../../../chunk-ESEI2CDZ.js";
import "../../../chunk-4F4IVLTB.js";
import "../../../chunk-55O4MPI7.js";
import "../../../chunk-X2YIODUW.js";
import "../../../chunk-UMUTXITN.js";
import "../../../chunk-6FH6AJI5.js";
import "../../../chunk-Q2H6D2MH.js";
import "../../../chunk-G2ZZKGSV.js";
import "../../../chunk-6ONJEX7Y.js";
import "../../../chunk-UV5N2VL7.js";
import "../../../chunk-XE5EOEBL.js";
import "../../../chunk-CTFDRWUN.js";
import "../../../chunk-7IK72W75.js";
import "../../../chunk-EG6MBBEN.js";
import {
  init_cjs_shims
} from "../../../chunk-PKR7KJ6P.js";

// src/cli/commands/auth/logout.test.ts
init_cjs_shims();
vi.mock("@shopify/cli-kit/node/session");
describe("logs out", () => {
  test("clears the session", async () => {
    let outputMock = mockAndCaptureOutput();
    await Logout.run(), globalExpect(logout).toHaveBeenCalledOnce(), globalExpect(outputMock.success()).toMatchInlineSnapshot('"Logged out from all the accounts"');
  });
});
//# sourceMappingURL=logout.test.js.map
