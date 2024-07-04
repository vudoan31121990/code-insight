const cplusplus = `#include <iostream>

int main() {
    // Declaring and initializing variables
	std::string name = "Alice";
	int age = 30;
	float height = 5.7f;
	bool isStudent = true;

	// Printing variables
	std::cout << "Name: " << name << std::endl;
	std::cout << "Age: " << age << std::endl;
	std::cout << "Height: " << height << std::endl;
	std::cout << "Is student: " << (isStudent ? "Yes" : "No") << std::endl;
	return 0;
}`;

const csharp = `using System;

int main() {
    // Declaring and initializing variables
	string name = "Alice";
	int age = 30;
	double height = 5.7;
	bool isStudent = true;

	// Printing variables
	Console.WriteLine("Name: " + name);
	Console.WriteLine("Age: " + age);
	Console.WriteLine("Height: " + height);
	Console.WriteLine("Is student: " + (isStudent ? "Yes" : "No"));
	return 0;
}`;

const javascript = `function myVariable() {
	// Declaring and initializing variables
	let name = "Alice";
	let age = 30;
	let height = 5.7;
	let isStudent = true;

	// Printing variables
	console.log("Name: " + name);
	console.log("Age: " + age);
	console.log("Height: " + height);
	console.log("Is student: " + (isStudent ? "Yes" : "No"));
}

myVariable();`;

const python = `def my_variable():
	# Declaring and initializing variables
	name = "Alice"
	age = 30
	height = 5.7
	is_student = True

	# Printing variables
	print("Name: " + name)
	print("Age: " + age)
	print("Height: " + height)
	print("Is student: " + (is_student ? "Yes" : "No"))

my_variable()`;

const ruby = `def my_variable()
    # Declaring and initializing variables
	name = "Alice"
	age = 30
	height = 5.7
	is_student = true

	# Printing variables
	puts("Name: " + name)
	puts("Age: " + age)
	puts("Height: " + height)
	puts("Is student: " + (is_student ? "Yes" : "No"))
end

my_variable()`;

const java = `public void myVariable() {
    // Declaring and initializing variables
	String name = "Alice";
	int age = 30;
	double height = 5.7;
	boolean isStudent = true;

	// Printing variables
	System.out.println("Name: " + name);	
	System.out.println("Age: " + age);
	System.out.println("Height: " + height);
	System.out.println("Is student: " + (isStudent ? "Yes" : "No"));
}

public static void main(String[] args) {
    myVariable();
}`;

const swift = `func myVariable() -> void {
    // Declaring and initializing variables
	var name: String = "Alice"
	var age: Int = 30
	var height: Double = 5.7
	var isStudent: Bool = true

	// Printing variables
	print("Name: " + name)
	print("Age: " + age)
	print("Height: " + height)
	print("Is student: " + (isStudent ? "Yes" : "No"))
}

myVariable()`;

const go = `package main

import "fmt"

func myVariable() void {
    // Declaring and initializing variables
	var name string = "Alice"
	var age int = 30
	var height float64 = 5.7
	var isStudent bool = true

	// Printing variables
	fmt.Println("Name: " + name)
	fmt.Println("Age: " + age)
	fmt.Println("Height: " + height)
	fmt.Println("Is student: " + (isStudent ? "Yes" : "No"))
}

func main() {
    myVariable()
}`;

const typescript = `function myVariable(): void {
    // Declaring and initializing variables
	let name: string = "Alice";
	let age: number = 30;
	let height: number = 5.7;
	let isStudent: boolean = true;

	// Printing variables
	console.log("Name: " + name);
	console.log("Age: " + age);
	console.log("Height: " + height);
	console.log("Is student: " + (isStudent ? "Yes" : "No"));
}

myVariable();`;

const php = `function myNumber() {
    <?php
	// Declaring and initializing variables
	$name = "Alice";
	$age = 30;
	$height = 5.7;
	$is_student = true;

	// Printing variables
	echo "Name: " . $name;
	echo "Age: " . $age;
	echo "Height: " . $height;
	echo "Is student: " . ($is_student ? "Yes" : "No");
	?>
}

myNumber();`;

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
