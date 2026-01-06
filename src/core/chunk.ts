const BLOB_SIZE  = 131072; // 128 KB

export function chunkToBlobs(data: Uint8Array): Uint8Array[] {
    const blobs: Uint8Array[] =[];
    for (let i=0; i<data.length; i+=BLOB_SIZE) {
        const chunk = data.slice(i,i+BLOB_SIZE);
        if(chunk.length<BLOB_SIZE) {
            const padded = new Uint8Array(BLOB_SIZE);
            padded.set(chunk);
            blobs.push(padded);
        } else {
            blobs.push(chunk);
        }
    }
    return blobs;
}