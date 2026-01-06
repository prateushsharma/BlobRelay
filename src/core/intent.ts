export interface Intent {
  chainId: number;
  payload_hash: string;
  versioned_hashes: string[];
  maxFeePerGas: string;
  maxPriorityFeePerGas: string;
  maxFeePerBlobGas: string;
  expiry: number;
}
