const cplusplus = `for (int i = 0; i < 10; i++) {
    // code block
}`;

const csharp = `for (int i = 0; i < 10; i++) {
    // code block
}`;

const javascript = `for (let i = 0; i < 10; i++) {
    // code block
}`;

const python = `for i in range(10):
    # code block
`;

const ruby = `for i in 0..10
    # code block
`;

const java = `for (int i = 0; i < 10; i++) {
    // code block
}`;

const swift = `for i in 0...10 {
    // code block
}`;

const go = `for i := 0; i < 10; i++ {
    // code block
}`;

const typescript = `for (let i = 0; i < 10; i++) {
    // code block
}`;

const php = `for ($i = 0; $i < 10; $i++) {
    // code block
}`;

const forLoopCodeData = [
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

module.exports = { forLoopCodeData };
