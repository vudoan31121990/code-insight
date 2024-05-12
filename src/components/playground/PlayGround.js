import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './playground.scss';
import { FilterLanguage } from '../filter-language/FilterLanguage';
import { CodeSection } from '../code-section/CodeSection';
import classLanguageMap from '../../utils/classLanguageMap';
import classLanguageMapExp from '../../utils/classLanguageMapExp';
import functionLanguageMap from '../../utils/functionLanguageMap';
import functionLanguageMapExp from '../../utils/functionLanguageMapExp';
import variableLanguageMap from '../../utils/variableLanguageMap';
import variableLanguageMapExp from '../../utils/variableLanguageMapExp';
import languagesService from '../../services/languageService';
import playgroundsService from '../../services/playgroundService';
import classSnippetService from '../../services/classSnippetService';
import classExpService from '../../services/classExpService';

export const PlayGround = ({ filter, scrollPosition }) => {
	const [playGroundFilter, setPlayGroundFilter] = useState(filter);
	const [selectedLanguage, setSelectedLanguage] = useState(null);
	const [filterCodeSnippet, setFilterCodeSnippet] = useState(null);
	const [programmingDescription, setProgrammingDescription] = useState('');
	const [languageExample, setLanguageExample] = useState(null);

	const scrollRef = useRef(null);
	const dispatch = useDispatch();
	const { languages } = useSelector((state) => state.languages);
	const { playgrounds } = useSelector((state) => state.playgrounds);
	const { classSnippets } = useSelector((state) => state.classSnippets);
	const { classExpSnippets } = useSelector((state) => state.classExpSnippets);

	useEffect(() => {
		dispatch(languagesService());
		dispatch(playgroundsService());
		dispatch(classSnippetService());
		dispatch(classExpService());
	}, [dispatch]);

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
			case 'Class': {
				let findSnippet = classSnippets.find((item) => item.codeSnippetId === 'cplusplus');
				setFilterCodeSnippet(findSnippet ? findSnippet.code : '');
				break;
			}
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
			case 'Class': {
				let findClass = playgrounds.find((item) => item.playgroundId === filter);
				setProgrammingDescription(findClass.playgroundDesc);
				break;
			}
			case 'Function': {
				let findFunction = playgrounds.find((item) => item.playgroundId === filter);
				setProgrammingDescription(findFunction.playgroundDesc);
				break;
			}
			case 'Variable': {
				let findVariable = playgrounds.find((item) => item.playgroundId === filter);
				setProgrammingDescription(findVariable.playgroundDesc);
				break;
			}
			default:
				break;
		}
	};

	const switchClassCodeSnippet = (language) => {
		let findSnippet = classSnippets.find((item) => item.codeSnippetId === language);
		if (findSnippet) {
			setFilterCodeSnippet(findSnippet ? findSnippet.code : '');
		}
	};

	const switchClassExpCodeSnippet = (language) => {
		// console.log(classExpSnippets)
		// let findExp = classExpSnippets.find((item) => item.codeSnippetId === language);
		// if (findExp) {
		// 	setLanguageExample(findExp ? findExp.codeExp : '');
		// }
		setLanguageExample(classLanguageMapExp[language]);
	};

	const switchFunctionCodeSnippet = (language) => {
		setFilterCodeSnippet(functionLanguageMap[language]);
	};

	const switchFunctionExpCodeSnippet = (language) => {
		setLanguageExample(functionLanguageMapExp[language]);
	};

	const switchVariableCodeSnippet = (language) => {
		setFilterCodeSnippet(variableLanguageMap[language]);
	};

	const switchVariableExpCodeSnippet = (language) => {
		setLanguageExample(variableLanguageMapExp[language]);
	};

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
									programmingLanguages={languages}
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
