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
reference_title_class = "reference-title"

references = document.getElementById('apa-references');

references.innerHTML = references.innerHTML.replace(
	/(.*?\(\d+\)\.)(.*?\.)(.*)/gm,
	`$1<span class=\"${reference_title_class}\">$2</span>$3`
	);

