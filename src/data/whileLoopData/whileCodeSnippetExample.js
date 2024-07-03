const cplusplus = `#include <iostream>
using namespace std;

int main() {
    int i = 0;
    while (i < 10) {
        cout << i << " ";
        i++;
    }
    return 0;
}
`;

const csharp = `using System;

class Program {
    static void Main() {
        int i = 0;
        while (i < 10) {
            Console.WriteLine(i);
            i++;
        }
    }
}
`;

const javascript = `let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
`;

const python = `i = 0
while i < 10:
    print(i, end=" ")
    i += 1
`;

const ruby = `i = 0
while i < 10 do
  puts i
  i += 1
end
`;

const java = `public class Main {
    public static void main(String[] args) {
        int i = 0;
        while (i < 10) {
            System.out.print(i + " ");
            i++;
        }
    }
}
`;

const swift = `var i = 0
while i < 10 {
    print(i)
    i += 1
}
`;

const go = `package main

import "fmt"

func main() {
    i := 0
    for i < 10 {
        fmt.Println(i)
        i++
    }
}
`;

const typescript = `let i: number = 0;
while (i < 10) {
    console.log(i);
    i++;
}
`;

const php = `<?php
$i = 0;
while ($i < 10) {
    echo $i . " ";
    $i++;
}
?>
`;

const whileLoopCodeExpData = [
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

module.exports = { whileLoopCodeExpData };
