import { keccak256, toBytes, bytesToHex } from "viem";

import { canonicalizeBytes } from "./canonicalize.js";
import { chunkToBlobs } from "./chunk.js";
import { commitBlob, versionedHash } from "./kzg.js";

export interface BlobBundle {
  payload_hash: string;
  blobs: Uint8Array[];
  commitments: Uint8Array[];
  proofs: Uint8Array[];
  versioned_hashes: string[];
}

export function buildBlobBundle(payload: Uint8Array): BlobBundle {
  const canonical = canonicalizeBytes(payload);
 const payloadHashHex = keccak256(toBytes(canonical));


  const blobs = chunkToBlobs(canonical);

  const commitments: Uint8Array[] = [];
  const proofs: Uint8Array[] = [];
  const versionedHashes: string[] = [];

  for (const blob of blobs) {
    const { commitment, proof } = commitBlob(blob);
    commitments.push(commitment);
    proofs.push(proof);
    versionedHashes.push(
      "0x" + Buffer.from(versionedHash(commitment)).toString("hex")
    );
  }

  return {
    payload_hash: "0x" + Buffer.from(payloadHash).toString("hex"),
    blobs,
    commitments,
    proofs,
    versioned_hashes: versionedHashes
  };
}
