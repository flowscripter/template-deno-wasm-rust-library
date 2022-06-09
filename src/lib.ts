import { log } from "../deps.ts";
import * as wasmLib from "../pkg/flowscripter_template_deno_wasm_rust_library.js";

/**
 * Adds 3 and 3 and logs the result as "World 6"
 */
export async function world(): Promise<void> {
  // init WASM module
  await wasmLib.default();

  log.info(`World ${wasmLib.add(3, 3)}`);
}
