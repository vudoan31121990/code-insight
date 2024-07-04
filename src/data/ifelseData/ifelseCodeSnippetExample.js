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

const javascript = `function isEvenOrOdd(number) {
    if (number % 2 == 0) {
        console.log("The number is even.");
    } else {
        console.log("The number is odd.");
    }
}

isEvenOrOdd(10);
`;

const python = `def is_even_or_odd(number):
    if number % 2 == 0:
        print("The number is even.")
    else:
        print("The number is odd.")

is_even_or_odd(10)
`;

const ruby = `def is_even_or_odd(number)
    if number % 2 == 0
        puts "The number is even."
    else
        puts "The number is odd."
    end
end

is_even_or_odd(10)
`;

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

const swift = `func isEvenOrOdd(number: Int) {
    if number % 2 == 0 {
        print("The number is even.")
    } else {
        print("The number is odd.")
    }
}

isEvenOrOdd(number: 10)`;

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

const typescript = `function isEvenOrOdd(number: number) {
    if (number % 2 == 0) {
        console.log("The number is even.");
    } else {
        console.log("The number is odd.");
    }
}

isEvenOrOdd(10);`;

const php = `function isEvenOrOdd($number) {
    if ($number % 2 == 0) {
        echo "The number is even.";
    } else {
        echo "The number is odd.";
    }
}

isEvenOrOdd(10);
`;

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
