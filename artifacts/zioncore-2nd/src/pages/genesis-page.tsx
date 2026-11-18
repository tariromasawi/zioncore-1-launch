import { ArrowLeft, Download } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import {
  loadZionCoreGenesisSeed,
  ZIONCORE_GENESIS_SOURCE_SHA256,
} from '@/lib/genesis-context';

function downloadOriginalDeclaration(originalDeclaration: string) {
  const url = URL.createObjectURL(new Blob(
    [originalDeclaration],
    { type: 'text/plain;charset=utf-8' },
  ));
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = 'ZionCore-Genesis-Original.txt';
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export default function GenesisPage() {
  const [originalDeclaration, setOriginalDeclaration] = useState<string | null>(null);
  const [loadError, setLoadError] = useState('');

  useEffect(() => {
    let active = true;
    void loadZionCoreGenesisSeed()
      .then((seed) => {
        if (active) setOriginalDeclaration(seed);
      })
      .catch(() => {
        if (active) setLoadError('The original Genesis file could not be verified or loaded.');
      });
    return () => {
      active = false;
    };
  }, []);

  return <main className="page-wrap genesis-page">
    <Link href="/" className="detail-back" data-testid="link-genesis-back">
      <ArrowLeft size={14} />Return to the live lab
    </Link>
    <div className="eyebrow">Founder declaration · preserved source</div>
    <h1 className="page-title">The Genesis of ZionCore 2nd.</h1>
    <section className="genesis-origin" aria-labelledby="genesis-origin-title">
      <div className="eyebrow" id="genesis-origin-title">Foundational declaration</div>
      <p className="genesis-declaration">MWARI NDI MWARI.</p>
      <p className="genesis-origin-copy">
        This is ZionCore 2nd’s original, unabridged founding seed. ZionCore 1
        retains its separate Genesis source.
      </p>
    </section>
    <div className="genesis-document-heading">
      <div>
        <h2>Original Genesis seed</h2>
        <p className="empty-inline">
          The supplied document is reproduced verbatim as plain text. Embedded markup
          is displayed, never executed. Authenticated AI readings in ZionCore 2nd
          include this complete seed verbatim with the measurement; provider usage limits apply.
        </p>
      </div>
      <button
        className="btn btn-subtle genesis-download"
        onClick={() => originalDeclaration && downloadOriginalDeclaration(originalDeclaration)}
        disabled={!originalDeclaration}
        data-testid="button-download-genesis"
      >
        <Download size={14} />Download original
      </button>
    </div>
    <p className="genesis-checksum mono" data-testid="value-genesis-checksum">
      Active source SHA-256 · {ZIONCORE_GENESIS_SOURCE_SHA256}
    </p>
    {loadError
      ? <p role="alert" className="status-box alert-box">{loadError}</p>
      : originalDeclaration === null
        ? <p role="status" className="status-box">Loading and verifying the original Genesis file…</p>
        : <article className="genesis-document" aria-label="Complete founder-provided Genesis declaration">
            <pre>{originalDeclaration}</pre>
          </article>}
  </main>;
}
