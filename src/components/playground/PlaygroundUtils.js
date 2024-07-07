/**
 * Handle switch description in playground area based on the filter
 * @param {string} filter - The filter of the playground
 * @param {array} playgrounds - The array of playgrounds
 * @return {string} - The description of the playground
 */
const switchDescription = (filter, playgrounds) => {
	let findPlaygroundDesc = '';
	findPlaygroundDesc = playgrounds.find((item) => item.playgroundId === filter);
	return findPlaygroundDesc.playgroundDesc;
};

/**
 * Handle switch code format in code snippet area based on the filter, and the language
 * @param {string} language - The programming language of the playground
 * @param {array} codeSnippet - The array of codeSnippet of each filter
 * @return {string} - The code snippet input in the code snippet area
 */
const switchCodeSnippetArea = (language, codeSnippet) => {
	let findSnippet = codeSnippet.find((item) => item.codeSnippetId === language);
	return findSnippet ? findSnippet.code : null;
};

module.exports = { switchDescription, switchCodeSnippetArea };
