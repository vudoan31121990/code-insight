const cplusplus = `switch (condition) {
    case value1:
        // code block
        break;
    case value2:
        // code block
        break;
    default:
        // code block
}`;

const csharp = `switch (condition) {
    case value1:
        // code block
        break;
    case value2:
        // code block
        break;
    default:
        // code block
}`;

const javascript = `switch (condition) {
    case value1:
        // code block
        break;
    case value2:
        // code block
        break;
    default:
        // code block
        break
}`;

const python = `switch condition:
    case value1:
        # code block
        break;
    case value2:
        # code block
        break
    default:
        # code block
        break
`;

const ruby = `case condition
    when value1
        # code block
        break
    when value2
        # code block
        break
    else
        # code block
        break
end`;

const java = `switch (condition) {
    case value1:
        // code block
        break;
    case value2:
        // code block
        break;
    default:
        // code block
        break
}`;

const swift = `switch condition {
    case value1:
        // code block
        break;
    case value2:
        // code block
        break;
    default:
        // code block
        break
}`;

const go = `switch condition {
    case value1:
        // code block
        break
    case value2:
        // code block
        break
    default:
        // code block
        break
}`;

const typescript = `switch (condition) {
    case value1:
        // code block
        break;
    case value2:
        // code block
        break;
    default:
        // code block
        break
}`;

const php = `switch ($condition) {
    case $value1:
        // code block
        break;
    case $value2:
        // code block
        break;
    default:
        // code block
        break
}`;

const switchCodeData = [
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

module.exports = { switchCodeData };
