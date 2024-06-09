const cplusplus = `class YourClass() {\n   //Body of the class, including functions and variables\n};`;

const csharp = "public class YourClass {\n   //Body of the class, including functions and variables\n}";

const javascript = `class YourClass() {
    // Body of the class, including functions and variables
}

const YourClass = () => {
    // Body of the class, including functions and variables
} 
`;

const python = `class YourClass():
    # Body of the class, including functions and variables
`;

const ruby = `class YourClass
    # Body of the class, including functions and variables
end`;

const java = `class YourClass {
    // Body of the class, including functions and variables
}`;

const swift = `class YourClass {
    // Body of the class, including functions and variables
}`;

const go = `type YourObject struct {
    // Define the fields of your object
}`;

const typescript = `class YourClass {
    // Body of the class, including functions and variables
}`;

const php = `<?php
    class YourClass {
        // Body of the class, including functions and variables
    }
?>`;

const classCodeSnippetData = [
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
    classCodeSnippetData
};
