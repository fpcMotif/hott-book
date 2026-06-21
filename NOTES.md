# Teaching Notes

## Learner profile (from intake, session 1)
- Strong pure-math background: topology, abstract algebra, category theory. Proofs are home turf.
- Goal: **understand foundations** (not formalize-first, not research-output-first).
- Wants a **balanced** concept/practice mix.
- Anchor text: **The HoTT Book** (source in repo). Symmetry Book as secondary.

## How to teach this learner
- **Analogize up, not down.** Lead with spaces / paths / groupoids; they already own that
  vocabulary. The job is to connect known homotopy theory to unfamiliar type theory, not to
  build math maturity.
- **Lead with the homotopy interpretation**, then justify it with the formal rules — the
  pictures motivate the syntax for this learner.
- Keep lessons short (working-memory budget) but pitch the *content* at a high level.
- Offer the category-theoretic re-explanation as an option (they have it as a tool).

## Workspace conventions (so lessons stay consistent)
- Lessons & reference docs link `../assets/course.css` (Tufte-ish shared stylesheet).
- Math via MathJax CDN + `../assets/mathjax-config.js` (book-faithful macros: `\refl`, `\UU`,
  `\jdeq`, `\ct`, `\opp`, `\J`, …). Author math with `\( \)` / `\[ \]`.
- **NEVER put math inside `<code>`/`<pre>`/`<script>`.** MathJax *and* KaTeX skip those tags by
  design (`skipHtmlTags` / `ignoredTags`), so `<code>$x=_A y$</code>` shows raw dollar signs.
  Reserve `<code>` for literal non-math source (filenames like `basics.tex`, shell, identifiers).
  All mathematics goes in normal text via `\( \)`. (Bug found & fixed session 1.)
- Quizzes use `../assets/quiz.js` with the `.quiz / ol.options / li[data-correct] / .explain`
  markup convention. Keep all answer options near-equal length (no formatting tells).
- Glossary at `reference/glossary.html` is canonical — reuse its terms verbatim.

## Tooling caveat
- mgrep web/file search quota is **exhausted for the month** (resets start of next month).
  Until then: ground content in the in-repo book source via `rg` + Read; fetch known URLs
  directly rather than searching. Re-verify RESOURCES links + find video/community when reset.

## Backlog / next lessons (tentative)
1. ✅ L1 — Types are spaces, equality is a path (proof-relevance, the ∞-groupoid tower).
2. ✅ L2 — **Path induction (J)**: the single engine; derived `\opp` & `\ct`; resolved the
   "family not type" puzzle (Rmk 1.12.3); SVG of based-path-space contraction.
3. L3 — `ap` and `transport`: functions act on paths; type families transport along them.
4. L4 — Equivalence (`≃`) done carefully (why not just iso).
5. L5 — **Univalence**: `(A ≃ B) ≃ (A = B)`; the foundational payoff — the mission's core.
6. Later — h-levels (sets/props/n-types), HITs (the circle, `x =_{S¹} x ≃ ℤ`).
