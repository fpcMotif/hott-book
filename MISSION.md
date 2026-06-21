# Mission: Homotopy Type Theory / Univalent Foundations

## Why
To genuinely understand HoTT as a *foundation of mathematics* — what "types are spaces"
actually means, what univalence says and why it is reasonable, and how a working
mathematician's practice (equality, structure, isomorphism-invariance) looks when rebuilt
on this base. The goal is real comprehension, not fluency theatre.

## Success looks like
- Reading a page of the HoTT Book and following it without hand-waving.
- Explaining, to another mathematician, why an identity type can have many inhabitants and
  what that buys you (the homotopy interpretation).
- Stating the univalence axiom precisely and saying *why* `(A ≃ B) ≃ (A = B)` is the right
  formalization of "isomorphic structures are identical."
- Doing enough hands-on proof (path induction, transport, equivalences) to trust the ideas
  rather than just recite them.

## Constraints
- Strong pure-math background: comfortable with topology, abstract algebra, category theory.
  Teach *up* to that level — analogize to spaces/groupoids freely.
- Balanced concept/practice: roughly even split between conceptual understanding and
  hands-on work. Practice can be on-paper (path induction, term construction); a proof
  assistant is optional and introduced only if it serves understanding.
- Anchor text: **The HoTT Book** (full LaTeX source is in this repo). The Symmetry Book is
  available as a secondary, gentler perspective.

## Out of scope (for now)
- Cubical type theory and its proof assistants (Cubical Agda, etc.) as a primary track.
- Deep proof-assistant engineering (tactics, automation).
- Category-theoretic *semantics* / model theory of HoTT (simplicial sets, ∞-toposes) as a
  primary goal — may be surfaced as motivation, not as a study target yet.
