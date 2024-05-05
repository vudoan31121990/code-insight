import React, { useState, useEffect, useRef } from 'react';
import './playground.scss';
import { FilterLanguage } from '../filter-language/FilterLanguage';
import { CodeSection } from '../code-section/CodeSection';
import classLanguageMap from '../../utils/classLanguageMap';
import classLanguageMapExp from '../../utils/classLanguageMapExp';
import functionLanguageMap from '../../utils/functionLanguageMap';
import functionLanguageMapExp from '../../utils/functionLanguageMapExp';
import variableLanguageMap from '../../utils/variableLanguageMap';
import variableLanguageMapExp from '../../utils/variableLanguageMapExp';
import json from '../../data/data.json';
import languagesService from '../../services/languageService';
export const PlayGround = ({ filter, scrollPosition }) => {
	const [playGroundFilter, setPlayGroundFilter] = useState(filter);
	const [selectedLanguage, setSelectedLanguage] = useState(null);
	const [filterCodeSnippet, setFilterCodeSnippet] = useState(null);
	const [programmingLanguagesList, setProgrammingLanguagesList] = useState([]);
	const [programmingDescription, setProgrammingDescription] = useState('');
	const [languageExample, setLanguageExample] = useState(null);

	const scrollRef = useRef(null);

	useEffect(() => {
		languagesService().then((data) => setProgrammingLanguagesList(data));
	}, [])

	useEffect(() => {
		setSelectedLanguage('C++');
		handleLanguageClick('C++');
		switchProgrammingDescription(playGroundFilter);
		switchCodeSnippet(filter);
		if (scrollPosition !== null && scrollRef.current !== null) {
			const targetElement = document.getElementById('playGroundArea');
			if (targetElement) {
				targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
		}
	}, [scrollPosition]);

	useEffect(() => {
		setPlayGroundFilter(filter);
		switchProgrammingDescription(filter);
		switchCodeSnippet(filter);
		handleLanguageClick(selectedLanguage);
	}, [filter]);

	const switchCodeSnippet = (filter) => {
		switch (filter) {
			case 'Class':
				setFilterCodeSnippet(classLanguageMap['C++']);
				break;
			case 'Function':
				setFilterCodeSnippet(functionLanguageMap['C++']);
				break;
			case 'Variable':
				setFilterCodeSnippet(variableLanguageMap['C++']);
				break;
			default:
				break;
		}
	};

	const handleLanguageClick = (item) => {
		setSelectedLanguage(item);
		switchCodeSnippet(filter);
		switch (filter) {
			case 'Class':
				switchClassCodeSnippet(item);
				switchClassExpCodeSnippet(item);
				break;
			case 'Function':
				switchFunctionCodeSnippet(item);
				switchFunctionExpCodeSnippet(item);
				break;
			case 'Variable':
				switchVariableCodeSnippet(item);
				switchVariableExpCodeSnippet(item);
				break;
			default:
				break;
		}
	};

	const switchProgrammingDescription = (filter) => {
		switch (filter) {
			case 'Class':
				setProgrammingDescription(json.Playground.class.description);
				break;
			case 'Function':
				setProgrammingDescription(json.Playground.function.description);
				break;
			case 'Variable':
				setProgrammingDescription(json.Playground.variable.description);
				break;
			default:
				break;
		}
	};

	const switchClassCodeSnippet = (language) => setFilterCodeSnippet(classLanguageMap[language]);

	const switchClassExpCodeSnippet = (language) =>
		setLanguageExample(classLanguageMapExp[language]);

	const switchFunctionCodeSnippet = (language) => {
		setFilterCodeSnippet(functionLanguageMap[language]);
	};

	const switchFunctionExpCodeSnippet = (language) =>
		setLanguageExample(functionLanguageMapExp[language]);

	const switchVariableCodeSnippet = (language) =>
		setFilterCodeSnippet(variableLanguageMap[language]);

	const switchVariableExpCodeSnippet = (language) =>
		setLanguageExample(variableLanguageMapExp[language]);

	return (
		<div id="playGroundArea" ref={scrollRef}>
			<div className="text-center">
				<div className="container pg-playground-section">
					<div className="section-title">
						<h2>PlayGround</h2>
						<p className="pg-programming-description">{programmingDescription}</p>
						<p className="pg-programming-description">
							Based on each language, you should pre-install library and import it
							before copying the code snippet below to play.
						</p>
					</div>
					<div className="row">
						<p className="pg-programming-description">
							Select the language in the dropdown to show the format of each language.
						</p>
						<div className="pg-playground-box">
							<div className="row pg-dropdown-language">
								<div className="col-6 col-sm-2">
									<p>Language:</p>
								</div>
								<FilterLanguage
									selectedLanguage={selectedLanguage}
									programmingLanguages={programmingLanguagesList}
									handleLanguageClick={handleLanguageClick}
								/>
							</div>
							{filterCodeSnippet ? (
								<div className="row pg-playground-code">
									<CodeSection code={filterCodeSnippet} />
								</div>
							) : null}
						</div>
						<p className="pg-programming-description">
							Example for the each language. This is the simple code snippet following
							the format of the code above. It just prints the result without using
							any computations or logics.
						</p>
						<div className="pg-playground-box">
							{languageExample ? (
								<div className="row pg-playground-code">
									<CodeSection code={languageExample} />
								</div>
							) : null}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
