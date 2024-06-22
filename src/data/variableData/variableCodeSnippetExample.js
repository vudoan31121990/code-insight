const cplusplus = `#include <iostream>

void myNumber(int n) {
    std::cout << "My number is: " << n;
}

int main() {
    MyNumber(10);
}`;

const csharp = `public void myNumber(int n) {
    Console.WriteLine("My number is: " + n);
}

int main() {
    myNumber(10);
}`;

const javascript = `function myNumber(int n) {
    console.log("My number is: " + n);
}

myNumber(10);`;

const python = `def my_number(a):
    print("My number is: " + a)

my_number(10)`;

const ruby = `def my_number(n)
    puts "My number is: #{n}"
end

my_number(10)`;

const java = `public void myNumber(int n) {
    System.out.println("My number is: " + n);
}

public static void main(String[] args) {
    myNumber(10);
}`;

const swift = `func myNumber(_ n: Int) -> void {
    print("My number is: " + n)
}

myNumber(10)`;

const go = `
package main

import "fmt"

func myNumber(n int) void {
    fmt.Println("My number is: " + n)
}

func main() {
    myNumber(10)
}`;

const typescript = `function myNumber(n: number): void {
    console.log("My number is: " + n);
}

myNumber(10);`;

const php = `function myNumber($n) {
    echo "My number is: " . $n;
}

myNumber(10);`;

const variableCodeExpData = [
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
	variableCodeExpData
};
