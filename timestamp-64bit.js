// Mengambil timestamp waktu saat ini dalam milidetik
const currentTimestampMs = Date.now();

// Mengonversi ke format 64-bit dalam mikrodetik
const currentTimestamp64 = BigInt(currentTimestampMs) * 1000n;

console.log("64-bit Timestamp (mikrodetik):", currentTimestamp64);

/*
// Mengonversi ke format 64-bit dalam nanodetik
const currentTimestamp64Nano = BigInt(currentTimestampMs) * 1000000n;

console.log("64-bit Timestamp (nanodetik):", currentTimestamp64Nano);
*/

// Mengonversi ke objek Date yang bisa dibaca manusia
const humanReadableDate = new Date(Number(currentTimestamp64));

console.log("Human-readable Date:", humanReadableDate.toISOString());
