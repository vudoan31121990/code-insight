import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import './playground.scss';
import { FilterLanguage } from '@src/components/filter-language/FilterLanguage';
import { CodeSection } from '@src/components/code-section/CodeSection';
import classLanguageMap from '@src/utils/classLanguageMap';
import classLanguageMapExp from '@src/utils/classLanguageMapExp';
import functionLanguageMap from '@src/utils/functionLanguageMap';
import functionLanguageMapExp from '@src/utils/functionLanguageMapExp';
import variableLanguageMap from '@src/utils/variableLanguageMap';
import variableLanguageMapExp from '@src/utils/variableLanguageMapExp';
import languagesService from '@src/services/languageService';
import playgroundsService from '@src/services/playgroundService';
import classSnippetService from '@src/services/classSnippetService';
import classExpService from '@src/services/classExpService';
export const PlayGround = ({ filter, scrollPosition }) => {
	const { t } = useTranslation();
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
		let findExp = classExpSnippets.find((item) => item.codeSnippetId === language);
		if (findExp) {
			setLanguageExample(findExp.code);
		}
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
						<h2>{t('playground.title')}</h2>
						<p className="pg-programming-description">{programmingDescription}</p>
						<p className="pg-programming-description">{t('playground.description1')}</p>
					</div>
					<div className="row">
						<p className="pg-programming-description">{t('playground.description2')}</p>
						<div className="pg-playground-box">
							<div className="row pg-dropdown-language">
								<div className="col-6 col-sm-2">
									<p>{t('codeSnippet.title')}</p>
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
						<p className="pg-programming-description">{t('playground.description3')}</p>
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

PlayGround.propTypes = {
	filter: PropTypes.string,
	scrollPosition: PropTypes.number
}