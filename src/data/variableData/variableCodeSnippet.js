const cplusplus = `declaring_type name_variable = value;`;

const csharp = `declaring_type name_variable = value;`;

const javascript = `let name_variable = value;`;

const python = `name_variable= value`;

const ruby = `name_variable = value`;

const java = `declaring_type name_variable = value;`;

const swift = `var name_variable: declaring_type = value`;

const go = `var name_variable declaring_type = value`;

const typescript = `let name_variable: declaring_type = value`;

const php = `$name_variable = value;`;

const variableCodeData = [
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

module.exports = { variableCodeData };
