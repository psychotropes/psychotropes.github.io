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
references_id = "apa-references"

references = document.getElementById(references_id);

references.innerHTML = references.innerHTML.replace(
	/(.*?\(\d+\)\.)(.*?\.)(.*)/gm,
	`$1<span class=\"${reference_title_class}\">$2</span>$3`
	);


/**
	Title Page: Authors List:
	https://apastyle.apa.org/style-grammar-guidelines/paper-format/title-page
*/
authors_id = "apa-authors"

authors = document.getElementById(authors_id);
console.log(authors.innerText)
authors_list = JSON.parse(authors.innerText)
authors_formatted = authors_list.join(", ")

if (authors_list.length == 2){ // Remove the , and make it a "and"
	authors_formatted = authors_formatted.replace(", ", " and ")
}
else if (authors_list.length > 2) { // Add an "and" after the last comma
	var pos = authors_formatted.lastIndexOf(",")
	authors_formatted = authors_formatted.substring(0, pos) +
						", and" +
						authors_formatted.substring(pos+1)
}
authors.innerText = authors_formatted
