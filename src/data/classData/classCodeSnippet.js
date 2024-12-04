const cplusplus =
	'class YourClass() {\n\t//Body of the class, including functions and variables\n};';

const csharp = `public class YourClass {\n\t//Body of the class, including functions and variables\n}`;

const javascript = `class YourClass() {\n\t// Body of the class, including functions and variables\n}
\n\nconst YourClass = () => {\n\t// Body of the class, including functions and variables\n}`;

const python = `class YourClass():\n\t# Body of the class, including functions and variables`;

const ruby = `class YourClass\n\t# Body of the class, including functions and variables\nend`;

const java = `class YourClass {\n\t// Body of the class, including functions and variables\n}`;

const swift = `class YourClass {\n\t// Body of the class, including functions and variables\n}`;

const go = `type YourObject struct {\n\t// Define the fields of your object\n}`;

const typescript = `class YourClass {\n\t// Body of the class, including functions and variables\n}`;

const php = `<?php\nclass YourClass {\n\t// Body of the class, including functions and variables\n}\n?>`;

const classCodeSnippetData = [
	{
		codeSnippetId: 'C++',
		code: cplusplus
	},
	{
		codeSnippetId: 'C#',
		code: csharp
	},
	{
		codeSnippetId: 'JavaScript',
		code: javascript
	},
	{
		codeSnippetId: 'Python',
		code: python
	},
	{
		codeSnippetId: 'Ruby',
		code: ruby
	},
	{
		codeSnippetId: 'Java',
		code: java
	},
	{
		codeSnippetId: 'Swift',
		code: swift
	},
	{
		codeSnippetId: 'Go',
		code: go
	},
	{
		codeSnippetId: 'TypeScript',
		code: typescript
	},
	{
		codeSnippetId: 'PHP',
		code: php
	}
];

module.exports = {
	classCodeSnippetData
};
