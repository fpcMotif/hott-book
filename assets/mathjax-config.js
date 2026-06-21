/* Shared MathJax 3 config for the HoTT course.
   Load BEFORE the MathJax CDN script. Defines book-faithful macros so
   lesson source reads like the HoTT Book. */
window.MathJax = {
  tex: {
    inlineMath: [['\\(', '\\)'], ['$', '$']],
    displayMath: [['\\[', '\\]'], ['$$', '$$']],
    macros: {
      UU:    '\\mathcal{U}',
      refl:  ['\\mathsf{refl}_{#1}', 1],
      id:    ['#1 =_{#2} #3', 3],     // \id{a}{A}{b}  ->  a =_A b
      ide:   ['#1 = #2', 2],          // simple equality
      ct:    '\\boldsymbol{\\cdot}',  // path concatenation
      opp:   ['{#1}^{-1}', 1],        // path inverse
      jdeq:  '\\equiv',               // judgmental equality
      defeq: '\\vcentcolon\\equiv',
      ap:    '\\mathsf{ap}',
      idfunc:'\\mathsf{id}',
      sm:    ['\\textstyle\\sum_{#1}', 1],
      prd:   ['\\textstyle\\prod_{#1}', 1],
      J:     '\\mathsf{J}',
      bsdef: '\\vcentcolon\\equiv'
    }
  },
  options: { renderActions: { addMenu: [] } }
};
