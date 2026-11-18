# ZionCore 2nd source reconciliation

Reviewed 12 November 2026. This is a source-preservation and integration record,
not a production-release approval.

## Archive findings

- The complete-project ZIP matches its companion SHA-256 exactly. All three ZIPs
  pass archive integrity checks; no duplicate paths, path traversal, symlinks,
  actual `.env` files, or private-key-named files were found.
- The ZionCore 2nd archive contains 101 files under
  `artifacts/zioncore-2nd/`. All 101 exist in the active workspace: 91 are
  byte-identical and 10 are newer workspace versions. None were overwritten.
- The “Missing Source Supplement” is the existing ZionCore 1 workspace source
  plus shared packages, not a second-app source replacement. Its embedded
  manifest verifies 450 payload files. The separately attached copy has one
  trailing character absent from the embedded manifest; use the embedded copy.
- The complete-project ZIP is a multi-lane snapshot (baseline, Phase 92
  worktree, and historical worktrees), not an overlay. Its current source
  differs from the active workspace; historical and generated files were not
  restored over the current project.

## What ZionCore 2nd currently contains

| Area | Active implementation | Boundary |
| --- | --- | --- |
| Live Lab | Browser microphone, local FFT measurements, saved measurement summaries, and opt-in cloud explanation | No raw-audio upload from this app; cloud AI requires sign-in and available Firebase quota |
| History | Device/browser records, account-scoped views, and the existing gated cloud-history path | Cloud access remains controlled by the existing Firebase configuration; no rules or settings were changed |
| Exploration | Versioned `ZC-EXP-DTMF-v1` text packets (120-byte limit), local-speaker playback, microphone follow-up measurements, and research records | Local audio only; no RF transmission, external recipient, or celestial-contact detection |
| Hardware | Adapter registry and a live, uncalibrated browser-microphone adapter | Other device classes are extension points, not connected receivers |
| Research | Domain/method registry and local acoustic analysis | Registry entries do not imply connected data feeds or validated specialist classifiers |
| Genesis | One separate ZionCore 2nd source file at `artifacts/zioncore-2nd/src/content/genesis-declaration.txt`, rendered as plain text and loaded by its Genesis page and AI path | The active file differs from the older supplied archive; it was preserved, not replaced |
| Billing/admin | Not duplicated in ZionCore 2nd | Existing ZionCore 1 owns `/messages`, `/devices`, `/discover`, `/premium`, and `/wallet`; ZionCore 2nd now links to those routes |

The source-backed remaining gaps are a complete second-app message-centre
workflow (ZionCore 2nd has a basic 120-byte experimental DTMF encoder, but not
the main app's recorded/file Voice V2 path), audio-file analysis within its own
Live Lab, evaluated animal/species classification, connected astronomical data
adapters, and a scheduled mission engine. ZionCore 1 already supplies the
shared message, device-import, research, membership, and wallet journeys; the
second app should link to those implementations rather than create duplicate
codecs, billing, or customer records. No animal identification, celestial
interpretation, or physical hardware operation is claimed as verified.

## Corrections and checks

- The active Genesis file's SHA-256 is
  `fe7aa8cd8bdd6893c0a305746d14c7af7782b871b9d05d68c514185fe5e4c4af`.
  The older archive hash remains in its archive manifest. Only the runtime
  integrity pin and test labels were aligned to the active file; Genesis text
  was not edited.
- The mismatch had caused the Genesis integrity guard to reject the active
  file, making the cloud AI path fail before sending its request. The updated
  pin keeps the byte-for-byte guard and full seed behavior intact.
- ZionCore 2nd navigation now exposes ZionCore 1's existing Messages, Devices,
  Research, Plans, and Credits pages through ordinary same-site links. The
  `/capabilities` page now maps Missions, Astronomy, Bioacoustics, Voice V2,
  account access, billing, and device support to their real locations and
  labels incomplete or absent systems rather than presenting placeholders.
- The supplied 48 kHz PCM WAV is a valid 4-second mono source recording, not
  itself a packet: direct packet decoding correctly returned “no supported
  preamble.” Encoding its first 2 seconds with the existing Voice V2 protocol
  and decoding the generated waveform locally returned a CRC-verified voice
  packet. The recovered packet does not authenticate its sender; the encoded
  playback is about 65 seconds.
- ZionCore 2nd typecheck passed; all 36 unit tests passed; production build
  passed. The build still reports existing large-chunk and dependency/source-map
  warnings. Desktop and mobile preview screenshots of `/zioncore-2nd/` and a
  direct preview of `/zioncore-2nd/genesis` loaded without browser errors.

## Preservation and release boundary

No archive was overlaid, no customer data or credentials were accessed, and no
Firebase rules, Stripe settings, production configuration, or deployment were
changed. The local Genesis route displays the complete archival text; it
contains personal contact/location information, so review that public-facing
content before any publication. This audit does not reproduce those details.
The preview checks do not establish that the latest workspace is live at the
production domain.
