import React, { useState, useEffect, useRef } from 'react';
import './playground.scss';
import { FilterLanguage } from '../filter-language/FilterLanguage';
import { CodeSection } from '../code-section/CodeSection';
import classLanguageMap from '../../utils/classLanguageMap';
import functionLanguageMap from '../../utils/functionLanguageMap';
import json from '../../data/data.json';

export const PlayGround = ({ filter, scrollPosition }) => {
	const [playGroundFilter, setPlayGroundFilter] = useState(filter);
	const [selectedItem, setSelectedItem] = useState(null);
	const [filterCodeSnippet, setFilterCodeSnippet] = useState(null);
	const [classCodeSnippet, setClassCodeSnippet] = useState(classLanguageMap.cplusplus);
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
		if (scrollPosition !== null && scrollRef.current !== null) {
			const targetElement = document.getElementById('playGroundArea');
			console.log(targetElement);
			if (targetElement) {
				targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

	const switchClassCodeSnippet = (language) => setClassCodeSnippet(classLanguageMap[language]);
	const switchFunctionCodeSnippet = (language) =>
		setFunctionCodeSnippet(functionLanguageMap[language]);

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
								<FilterLanguage
									selectedItem={selectedItem}
									programmingLanguages={programmingLanguages}
									handleItemClick={handleItemClick}
								/>
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
