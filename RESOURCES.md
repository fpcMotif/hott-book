# Homotopy Type Theory Resources

> Note: mgrep web search hit its monthly quota during the first session, so URLs below are
> from established knowledge and the in-repo source, not freshly verified by search. Re-verify
> links and hunt for video courses / communities when quota resets (see Gaps).

## Knowledge

- **[The HoTT Book — *Homotopy Type Theory: Univalent Foundations of Mathematics*](https://homotopytypetheory.org/book/)** (Univalent Foundations Program, IAS, 2013)
  The anchor text and primary source. **Full LaTeX source is in this repo** — the most
  trustworthy resource available. Chapter→file map established this session:
  - `preliminaries.tex` — Ch.1 Type theory (§1.12 Identity types at line ~1548)
  - `basics.tex` — Ch.2 Homotopy type theory (types as spaces / ∞-groupoids; intro at line 1)
  - `logic.tex` (Ch.3 Sets and logic), `equivalences.tex` (Ch.4), `induction.tex`,
    `hlevels.tex` (Ch.7 n-types), `homotopy.tex` (Ch.8 Homotopy theory),
    `categories.tex`, `setmath.tex`, `reals.tex`, `formal.tex` (appendix, formal rules).
  Use for: the canonical definitions, theorem statements, and the official treatment of
  univalence and higher inductive types.

- **The Symmetry Book — *Symmetry*** (Bezem, Buchholtz, Cagne, Dundas, Grayson) — in repo at
  `SymmetryBook-master/`
  Newer, gentler, builds univalent foundations from symmetry/groups concretely.
  Use for: a second, more intuitive angle when the HoTT Book feels too terse; group-theoretic
  motivation for univalence.

- **Egbert Rijke, *Introduction to Homotopy Type Theory*** (arXiv:2212.11082 / Cambridge UP)
  Modern, self-contained, exercise-driven textbook. Use for: a cleaner linear path through the
  core theory than the Book, and good exercises. *(Verify exact URL/edition next session.)*

- **[The Homotopy Type Theory blog](https://homotopytypetheory.org/blog/)** (Shulman, Awodey, et al.)
  Expert commentary and intuition-building posts. Use for: motivation and "why" questions that
  the Book states tersely.

- **[nLab](https://ncatlab.org/nlab/show/homotopy+type+theory)**
  Use for: cross-references to category theory / higher category theory and alternative phrasings.
  High expertise but terse; not a first-read.

## Wisdom (Communities)
*(Not yet curated — user has not been asked about community preferences. Candidates to vet:
the HoTT Zulip chat, the `Homotopy Type Theory` mailing list, MathOverflow `[homotopy-type-theory]`.)*

## Gaps
- No verified video lecture course yet (candidates to find: Rijke's CMU lectures, OPLSS HoTT
  lectures, Favonia). Search when mgrep quota resets.
- Communities unconfirmed; confirm user's appetite for joining one before recommending.
- No hands-on proof-assistant resource chosen yet (only relevant if the user opts into
  formalization later — Agda HoTT library or 1lab are candidates).
