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

const javascript = `function myWhileLoop() {
	let i = 0;
	while (i < 10) {
		console.log(i);
		i++;
	}
}

myWhileLoop();`;

const python = `func my_while_loop():
	i = 0
	while i < 10:
		print(i, end=" ")
		i += 1

my_while_loop()
`;

const ruby = `function my_while_loop
  i = 0
  while i < 10
	puts i
	i += 1
  end
end

my_while_loop
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

const swift = `func myWhileLoop() {
	var i = 0
	while i < 10 {
		print(i)
		i += 1
	}
}

myWhileLoop()
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

const typescript = `function myWhileLoop() {
	let i = 0;
	while (i < 10) {
		console.log(i);
		i++;
	}
}

myWhileLoop();
`;

const php = `function myWhileLoop() {
	$i = 0;
	while ($i < 10) {
		echo $i . " ";
		$i++;
	}
}

myWhileLoop();
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
