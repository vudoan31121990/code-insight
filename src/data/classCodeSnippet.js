const cplusplus = `class YourClass() {
    std::cout << \"Hello World\";
}`;

const csharp = `public class YourClass {}
    Console.WriteLine(\"Hello World\");
}`;

const javascript = `const YourClass = () => {
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

const go = `import "fmt"
func main() {
    fmt.Println("Hello World")
}
`;

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

module.exports = {
	cplusplus,
	csharp,
	javascript,
	python,
	ruby,
	java,
	swift,
	go,
	typescript,
	php
};
