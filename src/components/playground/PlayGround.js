import React, { useState, useEffect, useRef } from 'react';
import './playground.scss';
import Dropdown from 'react-bootstrap/Dropdown';
import { CodeSection } from '../code-section/CodeSection';
import classCodeFormat from '../../data/classCodeSnippet';
import json from '../../data/data.json';

export const PlayGround = ({ filter, scrollPosition }) => {
	const [playGroundFilter, setPlayGroundFilter] = useState(filter);
	const [selectedItem, setSelectedItem] = useState(null);
	const [filterCodeSnippet, setFilterCodeSnippet] = useState(null);
	const [classCodeSnippet, setClassCodeSnippet] = useState(classCodeFormat.cplusplus);
	const [functionCodeSnippet, setFunctionCodeSnippet] = useState(null);
	const [programmingLanguages, setProgrammingLanguages] = useState([]);
	const [programmingDescription, setProgrammingDescription] = useState('');

	const scrollRef = useRef(null);

	useEffect(() => {
		setSelectedItem('C++');
		setProgrammingLanguages(json.Languages);
		handleItemClick('C++');
		switchProgrammingDescription(playGroundFilter);
		switchCodeSnippet(filter);
		console.log(scrollPosition);
		console.log(scrollRef.current);
		if (scrollPosition !== null && scrollRef.current !== null) {
			const targetElement = document.getElementById('playGroundArea');
			console.log(targetElement);
			if (targetElement) {
				targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
				console.log('scrolling');
			}
		}
	}, [scrollPosition]);

	useEffect(() => {
		setPlayGroundFilter(filter);
		switchProgrammingDescription(filter);
		setFilterCodeSnippet(classCodeSnippet);
	}, [filter, classCodeSnippet]);

	const switchCodeSnippet = (filter) => {
		switch (filter) {
			case 'Class':
				setFilterCodeSnippet(classCodeSnippet);
				break;
			case 'Function':
				setFilterCodeSnippet(functionCodeSnippet);
				break;
			default:
				break;
		}
	};

	const handleItemClick = (item) => {
		setSelectedItem(item);
		switch (playGroundFilter) {
			case 'Class': {
				switchClassCodeSnippet(item);

				break;
			}
			case 'Function':
				switchFunctionCodeSnippet(item);
				break;
			default:
				break;
		}
	};

	const classLanguageMap = {
		'C++': classCodeFormat.cplusplus,
		'C#': classCodeFormat.csharp,
		JavaScript: classCodeFormat.javascript,
		Python: classCodeFormat.python,
		Ruby: classCodeFormat.ruby,
		Java: classCodeFormat.java,
		Swift: classCodeFormat.swift,
		Go: classCodeFormat.go,
		TypeScript: classCodeFormat.typescript,
		PHP: classCodeFormat.php
	};

	const functionLanguageMap = {
		'C++': null,
		'C#': null,
		JavaScript: null,
		Python: null,
		Ruby: null,
		Java: null,
		Swift: null,
		Go: null,
		TypeScript: null,
		PHP: null
	};

	const switchClassCodeSnippet = (language) => setClassCodeSnippet(classLanguageMap[language]);
	const switchFunctionCodeSnippet = (language) =>
		setFunctionCodeSnippet(functionLanguageMap[language]);
	const switchProgrammingDescription = (filter) => {
		switch (filter) {
			case 'Class':
				setProgrammingDescription(json.Playground.class.description);
				break;
			case 'Function':
				setProgrammingDescription(json.Playground.function.description);
				break;
			default:
				break;
		}
	};

	return (
		<div id="playGroundArea" ref={scrollRef}>
			<div className="text-center">
				<div className="container playground-section">
					<div className="section-title">
						<h2>PlayGround</h2>
						<p className="programming-description">{programmingDescription}</p>
						<p className="programming-description">
							Based on each language, you should pre-install library and import it
							before copying the code snippet below to play.
						</p>
					</div>
					<div className="row">
						<p className="programming-description">
							Select the language in the dropdown.
						</p>
						<div className="playground-box">
							<div className="row dropdown-language">
								<div className="col-6 col-sm-2">
									<p>Language:</p>
								</div>
								<div className="col-6 col-sm-2">
									<Dropdown>
										<Dropdown.Toggle variant="success" id="dropdown-basic">
											{selectedItem ? selectedItem : 'Select a language'}
										</Dropdown.Toggle>
										<Dropdown.Menu>
											{programmingLanguages && programmingLanguages.length > 0
												? programmingLanguages.map((d, i) => (
														<Dropdown.Item
															key={`${d.name}-${i}`}
															onClick={() => handleItemClick(d.name)}
														>
															{d.name}
														</Dropdown.Item>
													))
												: null}
										</Dropdown.Menu>
									</Dropdown>
								</div>
							</div>
							{filterCodeSnippet ? (
								<div className="row playground-code">
									<CodeSection code={filterCodeSnippet} />
								</div>
							) : null}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
