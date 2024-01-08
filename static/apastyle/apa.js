/****************
  Created by John Torakis for PsychoTropes.wiki

  Referencing APA (7th Edition) Style Guides:
  - https://apastyle.apa.org
  - https://owl.purdue.edu/owl/research_and_citation/apa_style

To be used along with /css/apa.css

*/

/**
	Reference Title Italics
*/
reference_title_class = "apa-reference-title"
references_class = "apa-references"

references = document.getElementById(references_class);

references.innerHTML = references.innerHTML.replace(
	/(.*?\(\d+\)\.)(.*?\.)(.*)/gm,
	`$1<span class=\"${reference_title_class}\">$2</span>$3`
	);

