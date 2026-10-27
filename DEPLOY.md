# LatePay Kit deploy (LIVE since 27 Oct 2026: https://frozenvisions.github.io/latepay-kit/)
Host: GitHub Pages, free plan (public repo, static). Cost £0.
Steps (all done 27 Oct 2026; kept for reference):
1. Create public repo e.g. `latepay-kit`; push contents of this folder to `main`.
2. Settings > Pages > Deploy from branch `main` / root.
3. Stripe: create Payment Link £5; After payment -> "Don't show confirmation page" -> redirect to `https://<user>.github.io/latepay-kit/?paid={CHECKOUT_SESSION_ID}`.
4. Swap `PAYMENT_LINK` const at top of the inline script in index.html.
Caveat: gate is client-side (checks a cs_ session id in the URL). Fine for a £5 MVP; a determined user can bypass. Server check (Stripe webhook / Netlify function) is the upgrade.
Tested headless (Chrome, Playwright) 27 Oct 2026: calc correct, pack hidden before pay, ?paid=fake rejected, ?paid=cs_... unlocks 3 emails + invoice, inputs HTML-escaped, no JS errors. Unit tests 11/11.
