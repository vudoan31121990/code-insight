const cplusplus = `<type> your_variable_name = <intial_value>;`;

const csharp = `<type> your_variable_name = <intial_value>;`;

const javascript = `var your_variable_name = <intial_value>;
let your_variable_name = <intial_value>;
const your_variable_name = <intial_value>;
`;

const python = `your_variable_name = <intial_value>`;

const ruby = `your_variable_name = <intial_value>`;

const java = `<type> your_variable_name = <intial_value>;`;

const swift = `var your_variable_name: <type> = <intial_value>;`;

const go = `var <variable_name> <type> = <initial_value>`;

const typescript = `let <variable_name>: <type> = <initial_value>;
const <variable_name>: <type> = <initial_value>;
`;

const php = `$<variable_name> = <initial_value>;`;

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
