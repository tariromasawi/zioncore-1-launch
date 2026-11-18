# ZionCore release evidence

## Repeatable local checks

Run `pnpm run verify:release` from the workspace root. The same command is
registered as the `zioncore-release` validation. It checks both ZionCore 1 and
the separately routed ZionCore 2nd artifact.

The command stops at the first failed or unexecutable check. Each subprocess
has an eight-minute timeout. A stopped run does not imply later checks passed.
The local database suites use the existing demo-project Firebase emulators;
wallet/fulfillment/recovery tests reject absent, remote or malformed emulator
targets before initializing their Firebase app.

Checks:

1. Canonical workspace type checking.
2. Frontend unit tests.
3. ZionCore 2nd unit tests.
4. API unit tests.
5. Tooling tests, including failure behavior of this check runner.
6. Firebase Authentication emulator tests.
7. ZionCore 1 Firestore client security-rule emulator tests.
8. ZionCore 2nd Firestore client security-rule emulator tests.
9. Transactional wallet, Stripe fulfillment and paid-reading recovery emulator tests.
10. API production build.
11. Web production build, including the initial-bundle regression guard.
12. ZionCore 2nd production build at `/zioncore-2nd/`.

This is a repeatable engineering check, not an automatic block on the Publish
button, a security audit, or a certification that live integrations work.
Emulator tests do not contact Stripe to create real payments.

## Operational evidence still required

### Local results verified

| Suite | Passed |
| --- | ---: |
| ZionCore 1 frontend unit | 226 |
| ZionCore 2nd unit | 36 |
| API unit | 102 |
| Tooling unit | 10 |
| Authentication emulator | 3 |
| ZionCore 1 Firestore rules emulator | 11 |
| ZionCore 2nd Firestore rules emulator | 7 |
| Wallet, fulfillment and recovery emulator | 19 |
| **Total distinct tests** | **414** |

These are local code/emulator checks, not live-service evidence. The separate
ZionCore 2nd preview was opened at its configured path and showed its own
interface; the current production `/zioncore-2nd/` response still serves the
ZionCore 1 HTML shell, so that production route must be checked again after
publishing the current multi-artifact workspace.

Both web artifacts, the API build and the canonical workspace type check pass
in the registered release run. No real purchase or production-data write was
performed. Local emulator logs are excluded from Git and deployment inputs.

| Area | Required evidence before claiming operational completion |
| --- | --- |
| Production identity | Real authorized Google/Apple sign-in and sign-out, with correct account isolation and App Check behavior |
| Production wallet | Correct balance after refresh, sign-out/sign-in and a second authorized session |
| Live Stripe fulfillment | An explicitly approved real purchase, verified webhook delivery, one credit grant across repeated notifications, correct cancellation/refund handling |
| Premium | Verified subscription state, expiry/cancellation handling and correct server-side entitlement |
| Paid interpretation | Approved quote, reservation, successful report, settlement, visible remaining balance and recovery after interrupted transport |
| Production cleanup | Required Firestore collection-group index available; retry-record cleanup succeeds |
| Storage reliability | Investigate existing SDK listener/deprecation warnings without hiding them or weakening stream cleanup |
| Experience | Real-device microphone permissions, audio playback/stop, keyboard access and representative mobile-network performance |

Do not mark these complete from the presence of code, a health response,
successful local tests or installed credentials. Record the actual observed
result without customer identifiers, tokens, signed URLs or credentials.

## Tactical priorities

- Resolve money, identity, privacy and data-loss risks before cosmetic additions.
- Change one coherent behavior at a time; preserve working capabilities.
- Test failure and retry paths, not only successful responses.
- Keep speculative interpretation distinct from measured signal observations.
- Prefer measured reliability, comprehension and repeat use over code volume
  or unsupported superiority claims.
- Evaluate retention, purchase completion, support issues and costs using
  observed, appropriately collected data; none is guaranteed by this checklist.
