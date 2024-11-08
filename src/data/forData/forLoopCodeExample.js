const cplusplus = `#include <iostream>
using namespace std;

int main() {
    for (int i = 0; i < 10; i++) {
        cout << i << " ";
    }
    return 0;
}
`;

const csharp = `using System;

class Program {
    static void Main() {
        for (int i = 0; i < 10; i++) {
            Console.WriteLine(i);
        }
    }
}
`;

const javascript = `for (let i = 0; i < 10; i++) {
    console.log(i);
}
`;

const python = `for i in range(10):
    print(i, end=" ")
`;

const ruby = `for i in 0...10
  puts i
end
`;

const java = `public class Main {
    public static void main(String[] args) {
        for (int i = 0; i < 10; i++) {
            System.out.print(i + " ");
        }
    }
}
`;

const swift = `for i in 0..<10 {
    print(i)
}
`;

const go = `package main

import "fmt"

func main() {
    for i := 0; i < 10; i++ {
        fmt.Println(i)
    }
}
`;

const typescript = `for (let i = 0; i < 10; i++) {
    console.log(i);
}
`;

const php = `<?php
for ($i = 0; $i < 10; $i++) {
    echo $i . " ";
}
?>
`;

const forLoopCodeExpData = [
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

module.exports = { forLoopCodeExpData };
