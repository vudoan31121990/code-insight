const cplusplus = `class YourClass() {
    std::cout << \"Hello World\";
}`;

const csharp = `public class YourClass {
    Console.WriteLine(\"Hello World\");
}`;

const javascript = `class YourClass() {
    console.log(\"Hello World\");
}

const YourClass = () => {
    console.log(\"Hello World\");
}`;

const python = `class YourClass():
    def __init__(self):
        print(\"Hello World\")
}`;

const ruby = `class YourClass
    def initialize
        puts \"Hello World\"
    end
end`;

const java = `class YourClass {
    public static void main(String[] args) {
        System.out.println(\"Hello World\");
    }
}`;

const swift = `class YourClass {
    func main() {
        print(\"Hello World\")
    }
}`;

const go = `
package main

import "fmt"

type Person struct {
    name string
    age int
}

func main() {

    person := Person{
        name: "John",
        age: 30,
    }

    fmt.Println(person.name)
    fmt.Println(person.age)
}`;

const typescript = `class YourClass {
    main() {
        console.log(\"Hello World\");
    }
}`;

const php = `<?php
    class YourClass {
        public function main() {
            echo "Hello World";
        }
    }
?>`;

const classCodeExpData = [
    {
        "codeSnippetId": "C++",
        "code": cplusplus
    },
    {
        "codeSnippetId": "C#",
        "code": csharp
    },
    {
        "codeSnippetId": "JavaScript",
        "code": javascript
    },
    {
        "codeSnippetId": "Python",
        "code": python
    },
    {
        "codeSnippetId": "Ruby",
        "code": ruby
    },
    {
        "codeSnippetId": "Java",
        "code": java
    },
    {
        "codeSnippetId": "Swift",
        "code": swift
    },
    {
        "codeSnippetId": "Go",
        "code": go
    },
    {
        "codeSnippetId": "TypeScript",
        "code": typescript
    },
    {
        "codeSnippetId": "PHP",
        "code": php
    }
]

module.exports = {
	classCodeExpData
};
