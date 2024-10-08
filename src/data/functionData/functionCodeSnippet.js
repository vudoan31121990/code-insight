const cplusplus = `return_type your_function_name(parameters) {
    // body of function, any statements and computations
    // return statement (if applicable)
}`;

const csharp = `access_modifier return_type your_function_name(parameters) {
    // body of function, any statements and computations
    // return statement (if applicable)
}`;

const javascript = `function your_function_name(parameters) {
    // body of function, any statements and computations
    // return statement (if applicable)
}`;

const python = `def your_function_name(parameters):
    # body of function, any statements and computations
    # return statement (if applicable)
`;

const ruby = `def your_function_name
    # body of function, any statements and computations
    # return statement (if applicable)
end`;

const java = `access_modifier return_type your_function_name(parameters) {
    // body of function, any statements and computations
    // return statement (if applicable)
}`;

const swift = `func your_function_name(parameters) -> ReturnType {
    // body of function, any statements and computations
    // return statement (if applicable)
}`;

const go = `func your_function_name(parameters) (return_type) {
    // body of function, any statements and computations
    // return statement (if applicable)
}`;

const typescript = `function your_function_name(parameters: ParameterType): ReturnType {
    // body of function, any statements and computations
    // return statement (if applicable)
}`;

const php = `function your_function_name($parameters) {
    // body of function, any statements and computations
    // return statement (if applicable)
}`;

const functionCodeData = [
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

module.exports = { functionCodeData };
