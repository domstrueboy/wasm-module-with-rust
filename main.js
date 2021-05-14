const js = import("./rust-lib/pkg/rust_lib.js");
js.then(js => {
  js.greet("WebAssembly");
});