import {
  versionService
} from "../../../chunk-Q7J45LZL.js";
import {
  mockAndCaptureOutput
} from "../../../chunk-3UKGEQW6.js";
import {
  afterEach,
  describe,
  globalExpect,
  test,
  vi
} from "../../../chunk-4MSYMXAX.js";
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

// src/cli/services/commands/version.test.ts
init_cjs_shims();
vi.mock("@shopify/cli-kit/node/node-package-manager");
vi.mock("@shopify/cli-kit/common/version", () => ({ CLI_KIT_VERSION: "2.2.2" }));
afterEach(() => {
  mockAndCaptureOutput().clear();
});
describe("check CLI version", () => {
  test("displays latest version", async () => {
    let outputMock = mockAndCaptureOutput();
    await versionService(), globalExpect(outputMock.info()).toMatchInlineSnapshot(`
        "2.2.2"
      `);
  });
});
//# sourceMappingURL=version.test.js.map
