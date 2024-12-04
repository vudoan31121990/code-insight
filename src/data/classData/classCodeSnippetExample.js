const cplusplus = `class YourClass() {\n\tstd::cout << \"Hello World\";\n}`;

const csharp = `public class YourClass {\n\tConsole.WriteLine(\"Hello World\");\n}`;

const javascript = `class YourClass() {\n\tconsole.log(\"Hello World\");\n}
\nconst YourClass = () => {\n\tconsole.log(\"Hello World\");\n}`;

const python = `class YourClass():\n\tdef __init__(self):\n\t\tprint(\"Hello World\")\n}`;

const ruby = `class YourClass\n\tdef initialize\n\tputs \"Hello World\"\n\tend\nend`;

const java = `class YourClass {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println(\"Hello World\");\n\t}\n}`;

const swift = `class YourClass {\n\tfunc main() {\n\t\tprint(\"Hello World\")\n\t}\n}`;

const go = `package main\nimport "fmt"\ntype Person struct {\n\tname string\n\tage int\n}\n
func main() {\n\tperson := Person{\n\t\tname: "John",\n\t\tage: 30,\n\t}\n\tfmt.Println(person.name)\n\tfmt.Println(person.age)\n}`;

const typescript = `class YourClass {\n\tmain() {\n\t\tconsole.log(\"Hello World\");\n\t}\n}`;

const php = `<?php\n\tclass YourClass {\n\t\tpublic function main() {\n\t\t\techo "Hello World";\n\t\t}\n\t}\n?>`;

const classCodeExpData = [
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
	classCodeExpData
};
