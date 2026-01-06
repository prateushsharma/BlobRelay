import { buildBlobBundle } from "./bundle.js";

export function verifyPayloadAgainstTx(
  payload: Uint8Array,
  txVersionedHashes: string[]
): boolean {
  const bundle = buildBlobBundle(payload);
  if (bundle.versioned_hashes.length !== txVersionedHashes.length) return false;

  for (let i = 0; i < txVersionedHashes.length; i++) {
    if (
      bundle.versioned_hashes[i].toLowerCase() !==
      txVersionedHashes[i].toLowerCase()
    ) {
      return false;
    }
  }
  return true;
}
