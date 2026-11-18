export const ZIONCORE_GENESIS_SOURCE_SHA256 =
  'fe7aa8cd8bdd6893c0a305746d14c7af7782b871b9d05d68c514185fe5e4c4af';

const genesisAssetUrl = new URL('../content/genesis-declaration.txt', import.meta.url);
let genesisSeedPromise: Promise<string> | undefined;

/**
 * Loads ZionCore 2nd's one canonical Genesis document without summarizing,
 * rewriting, or mixing it with ZionCore 1's separate seed.
 */
export function loadZionCoreGenesisSeed(): Promise<string> {
  if (!genesisSeedPromise) {
    genesisSeedPromise = (async () => {
      const response = await fetch(genesisAssetUrl);
      if (!response.ok) {
        throw new Error('ZionCore 2nd could not load its original Genesis seed.');
      }

      const bytes = new Uint8Array(await response.arrayBuffer());
      const digest = await crypto.subtle.digest('SHA-256', bytes);
      const actualHash = Array.from(new Uint8Array(digest), byte =>
        byte.toString(16).padStart(2, '0'),
      ).join('');
      if (actualHash !== ZIONCORE_GENESIS_SOURCE_SHA256) {
        throw new Error('ZionCore 2nd Genesis integrity check failed; the seed was not sent.');
      }

      return new TextDecoder('utf-8', { fatal: true }).decode(bytes);
    })().catch(error => {
      genesisSeedPromise = undefined;
      throw error;
    });
  }
  return genesisSeedPromise;
}
