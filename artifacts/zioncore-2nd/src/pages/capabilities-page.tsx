import { ArrowRight, AudioLines, BookOpen, Compass, CreditCard, LockKeyhole, Radio, Sparkles } from 'lucide-react';
import { Link } from 'wouter';
import './capabilities-page.css';

type Capability = {
  title: string;
  status: 'Available in ZionCore 2' | 'Available in ZionCore 1' | 'Partial' | 'Not implemented';
  summary: string;
  boundary: string;
  links: { label: string; href: string; internal?: boolean }[];
  icon: typeof AudioLines;
};

const capabilities: Capability[] = [
  {
    title: 'Research missions',
    status: 'Partial',
    summary: 'ZionCore 2 has local celestial-exploration sessions with message encoding, playback authorisation, follow-up measurements, notes, comparisons, and JSON export.',
    boundary: 'There is no full Missions service yet: no multi-stage mission plans, scheduled runs, budget controls, or mission dashboard.',
    links: [{ label: 'Open Exploration sessions', href: '/exploration', internal: true }],
    icon: Compass,
  },
  {
    title: 'Astronomy and space data',
    status: 'Partial',
    summary: 'ZionCore 1 includes an optional public NOAA planetary K-index context tool in its free listening instruments, plus educational astronomy material.',
    boundary: 'ZionCore 2 does not have a dedicated observatory or astronomy dataset-analysis pipeline. The NOAA context is geomagnetic data, not a sound recording or a message.',
    links: [
      { label: 'Open ZionCore 1 free instruments', href: '/#free-reading' },
      { label: 'Read the field guide', href: '/discover' },
    ],
    icon: Sparkles,
  },
  {
    title: 'Bioacoustics',
    status: 'Partial',
    summary: 'ZionCore 1 has an educational plant-bioacoustics page, environmental listening tools, and a provenance-linked reference panel for a few candidate sound classes.',
    boundary: 'Neither app has a benchmarked species or behaviour recogniser. Reference links and acoustic patterns are not verified animal identification or translation.',
    links: [
      { label: 'Open environmental listening', href: '/#free-reading' },
      { label: 'Read the bioacoustics guide', href: '/plant-bioacoustics/' },
    ],
    icon: AudioLines,
  },
  {
    title: 'Voice V2 messages',
    status: 'Available in ZionCore 1',
    summary: 'The main ZionCore Messages instrument supports local recording, encoding, decoding, playback, and WAV export for supported versioned text, prayer, and voice packets with CRC integrity checks.',
    boundary: 'ZionCore 2 has a separate experimental text/DTMF path, not the Voice V2 workflow. CRC is not sender authentication, and playback is not proof of delivery.',
    links: [{ label: 'Open Messages and Voice V2', href: '/messages' }],
    icon: Radio,
  },
  {
    title: 'Account access',
    status: 'Partial',
    summary: 'ZionCore 2 provides sign-in and account/device-history controls on its History page. ZionCore 1 provides the main account, plans, wallet, and dashboard routes.',
    boundary: 'Access is not a separate ZionCore 2 page. Cloud history remains subject to the existing Firebase readiness and access controls; the device archive remains local.',
    links: [
      { label: 'Open ZionCore 2 account and history', href: '/history', internal: true },
      { label: 'Open ZionCore 1 account access', href: '/history' },
      { label: 'Open plans and wallet', href: '/wallet' },
    ],
    icon: LockKeyhole,
  },
  {
    title: 'Plans and credits',
    status: 'Available in ZionCore 1',
    summary: 'The main app owns the shared Stripe-backed plans, membership, wallet, and credit-funded service entry points.',
    boundary: 'ZionCore 2 does not maintain a duplicate catalogue or wallet. Purchases and entitlements should continue through ZionCore 1.',
    links: [
      { label: 'View plans and credits', href: '/wallet' },
      { label: 'Compare Premium', href: '/premium' },
    ],
    icon: CreditCard,
  },
  {
    title: 'Devices and adapters',
    status: 'Available in ZionCore 1',
    summary: 'The main app has the shared Device Centre for browser capability checks and supported recording/import paths. ZionCore 2 has an adapter registry and live browser microphone support.',
    boundary: 'A registry entry is not a connected physical receiver; other hardware still needs a supported, verified connection path.',
    links: [{ label: 'Open the Device Centre', href: '/devices' }],
    icon: Radio,
  },
  {
    title: 'Genesis and local signal lab',
    status: 'Available in ZionCore 2',
    summary: 'ZionCore 2 retains its own separate Genesis document, local live microphone measurements, and experimental celestial signal sessions.',
    boundary: 'These local acoustic experiments do not detect radio signals, establish celestial contact, or verify an external reply.',
    links: [
      { label: 'Open the live lab', href: '/', internal: true },
      { label: 'Read ZionCore 2 Genesis', href: '/genesis', internal: true },
      { label: 'Open Exploration', href: '/exploration', internal: true },
    ],
    icon: BookOpen,
  },
];

function CapabilityLink({ link }: { link: Capability['links'][number] }) {
  return link.internal
    ? <Link href={link.href} className="capability-action">{link.label}<ArrowRight size={13} /></Link>
    : <a href={link.href} className="capability-action">{link.label}<ArrowRight size={13} /></a>;
}

export default function CapabilitiesPage() {
  return <main className="page-wrap capability-page" data-testid="page-capabilities">
    <div className="eyebrow">ZionCore 2nd · shared product map</div>
    <h1 className="page-title">Find the instrument.<br />Know what is ready.</h1>
    <p className="lead">ZionCore 2nd and the main ZionCore site share a domain, but they do not yet contain identical modules. This map takes you to working tools and clearly marks the capabilities that still need implementation.</p>

    <section className="capability-notice" aria-label="Product boundary">
      <strong>One ZionCore site, two distinct experiences.</strong>
      <span>Shared tools open in ZionCore 1. ZionCore 2 keeps its own Genesis, local lab, history, and Exploration sessions. A link to a shared tool does not copy its implementation into ZionCore 2.</span>
    </section>

    <div className="capability-grid">
      {capabilities.map(({ title, status, summary, boundary, links, icon: Icon }) => (
        <article className="capability-card panel" key={title}>
          <div className="capability-card-head">
            <span className="capability-icon"><Icon size={17} /></span>
            <span className={`capability-status ${status === 'Not implemented' ? 'is-missing' : status === 'Partial' ? 'is-partial' : ''}`}>{status}</span>
          </div>
          <h2>{title}</h2>
          <p>{summary}</p>
          <p className="capability-boundary">{boundary}</p>
          <div className="capability-actions">{links.map(link => <CapabilityLink key={`${link.href}:${link.label}`} link={link} />)}</div>
        </article>
      ))}
    </div>

    <section className="capability-missing" aria-labelledby="missing-title">
      <div className="eyebrow">Verified gaps</div>
      <h2 id="missing-title">These are not installed as complete products yet.</h2>
      <ul>
        <li><strong>Missions:</strong> no multi-stage mission manager, budget tracking, scheduling, or mission lifecycle.</li>
        <li><strong>Astronomy:</strong> no ZionCore 2 observatory pipeline for pulsars, radio-astronomy files, or gravitational-wave datasets.</li>
        <li><strong>Bioacoustics:</strong> no validated species identification or animal-behaviour classifier in either app.</li>
        <li><strong>Voice V2 in ZionCore 2:</strong> the complete recorder/decoder stays in ZionCore 1 Messages; the second app has only its separate experimental text protocol.</li>
      </ul>
      <p>These gaps are labelled rather than represented by inactive buttons or simulated results. Existing shared tools remain available through the links above.</p>
    </section>
  </main>;
}
