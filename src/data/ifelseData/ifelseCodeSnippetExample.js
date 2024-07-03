const cplusplus = `#include <iostream>
using namespace std;

int main() {
    int number = 18;
    if (number % 2 == 0) {
        cout << "The number is even." << endl;
    } else {
        cout << "The number is odd." << endl;
    }
    return number;
}`;

const csharp = `using System;

class Program {
    static void Main() {
        int number = 18;
        if (number % 2 == 0) {
            Console.WriteLine("The number is even.");
        } else {
            Console.WriteLine("The number is odd.");
        }
    }
}`;

const javascript = `let number = 18;
if (number % 2 == 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}`;

const python = `number = 18
if number % 2 == 0:
    print("The number is even.")
else:
    print("The number is odd.")
`;

const ruby = `number = 18
if number % 2 == 0
  puts "The number is even."
else
  puts "The number is odd."
end`;

const java = `public class Main {
    public static void main(String[] args) {
        int number = 18;
        if (number % 2 == 0) {
            System.out.println("The number is even.");
        } else {
            System.out.println("The number is odd.");
        }
    }
}`;

const swift = `let number = 18
if number % 2 == 0 {
    print("The number is even.")
} else {
    print("The number is odd.")
}`;

const go = `package main

import "fmt"

func main() {
    number := 18
    if number % 2 == 0 {
        fmt.Println("The number is even.")
    } else {
        fmt.Println("The number is odd.")
    }
}`;

const typescript = `let num: number = 18;
if (num % 2 == 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}`;

const php = `<?php
$number = 18;
if ($number % 2 == 0) {
    echo "The number is even.";
} else {
    echo "The number is odd.";
}
?>`;

const ifelseCodeExpData = [
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

module.exports = { ifelseCodeExpData };
