export interface KzgCommitment {
  commitment: Uint8Array;
  proof: Uint8Array;
}

export function commitBlob(_blob: Uint8Array): KzgCommitment {
  // IMPLEMENT LATER using a real KZG library
  throw new Error("KZG commit not implemented yet");
}

export function versionedHash(_commitment: Uint8Array): Uint8Array {
  // IMPLEMENT LATER
  throw new Error("Versioned hash not implemented yet");
}
