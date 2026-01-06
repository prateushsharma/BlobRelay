import { buildBlobBundle } from "./core/bundle.js";

const msg = new TextEncoder().encode("hello blobs");
const bundle = buildBlobBundle(msg);

console.log({
  payload_hash: bundle.payload_hash,
  blobs: bundle.blobs.length,
  versioned_hashes: bundle.versioned_hashes.length
});
