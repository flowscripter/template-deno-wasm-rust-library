# template-deno-wasm-rust-library

[![coverage](https://codecov.io/gh/flowscripter/template-deno-wasm-rust-library/branch/main/graph/badge.svg?token=EMFT2938ZF)](https://codecov.io/gh/flowscripter/template-deno-wasm-rust-library)
[![rust dependencies](https://deps.rs/repo/github/flowscripter/template-deno-wasm-rust-library/status.svg)](https://deps.rs/crate/flowscripter_template_deno_wasm_rust_library)
[![deno dependencies](https://img.shields.io/endpoint?url=https%3A%2F%2Fdeno-visualizer.danopia.net%2Fshields%2Fupdates%2Fhttps%2Fraw.githubusercontent.com%2Fflowscripter%2Ftemplate-deno-wasm-rust-library%2Fmain%2Fmod.ts)](https://github.com/flowscripter/template-deno-wasm-rust-library/blob/main/deps.ts)
[![license: MIT](https://img.shields.io/github/license/flowscripter/template-deno-wasm-rust-library)](https://github.com/flowscripter/template-deno-wasm-rust-library/blob/main/LICENSE)

> Project template for a Rust library compiled to WASM exposed as a Deno module.

**NOTE:** This is not yet possible due to inability to include generated WASM directly: https://github.com/denoland/deno/issues/2552

## Project Template Usage

1. Use as a
   [template](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template)
   to create a new repository.
2. Update links and references in `README.md`.

## Deno Module Usage

```typescript
import { world } from "https://deno.land/x/flowscripter_template_deno_wasm_rust_library/mod.ts";

await world();
```

## Development

Install [wasm-pack](https://rustwasm.github.io/wasm-pack/): `cargo install wasm-pack`

Build: `wasm-pack build --target web`

Test: `cargo test && deno test -A --unstable`

Lint: `cargo fmt && deno fmt mod.ts deps.ts src/ tests/`

## Documentation

### Overview

PNG image generated from `images/uml_diagram.mermaid`:

![UML Diagram](https://raw.githubusercontent.com/flowscripter/template-deno-wasm-rust-library/main/images/uml_diagram.png "UML Diagram")

## License

MIT © Flowscripter
