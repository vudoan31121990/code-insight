import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { BarLoader } from 'react-spinners';
import './playground.scss';
import { ServiceUnavailable } from '@src/components/service-unavailable/ServiceUnavailable';
import { FilterLanguage } from '@src/components/filter-language/FilterLanguage';
import { CodeSection } from '@src/components/code-section/CodeSection';
import languagesService from '@src/services/languageService';
import playgroundsService from '@src/services/playgroundService';
import classSnippetService from '@src/services/classServices/classSnippetService';
import classExpService from '@src/services/classServices/classExpService';
import functionSnippetService from '@src/services/functionServices/functionSnippetService';
import functionExpService from '@src/services/functionServices/functionExpService';
import variableSnippetService from '@src/services/variableServices/variableSnippetService';
import variableExpService from '@src/services/variableServices/variableExpService';
import ifelseSnippetService from '@src/services/ifelseServices/ifelseSnippetService';
import ifelseExpService from '@src/services/ifelseServices/ifelseExpService';
import switchSnippetService from '@src/services/switchServices/switchSnippetService';
import switchExpService from '@src/services/switchServices/switchExpService';
import forSnippetService from '@src/services/forServices/forSnippetService';
import forExpService from '@src/services/forServices/forExpService';
import whileSnippetService from '@src/services/whileServices/whileSnippetService';
import whileExpService from '@src/services/whileServices/whileExpService';
import { switchDescription, switchCodeSnippetArea } from './PlaygroundUtils';

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
	const { playgrounds, isLoading, playgroundError } = useSelector((state) => state.playgrounds);
	const { classSnippets } = useSelector((state) => state.classSnippets);
	const { classExpSnippets } = useSelector((state) => state.classExpSnippets);
	const { functionSnippets } = useSelector((state) => state.functionSnippets);
	const { functionExpSnippets } = useSelector((state) => state.functionExpSnippets);
	const { variableSnippets } = useSelector((state) => state.variableSnippets);
	const { variableExpSnippets } = useSelector((state) => state.variableExpSnippets);
	const { ifelseSnippets } = useSelector((state) => state.ifelseSnippets);
	const { ifelseExpSnippets } = useSelector((state) => state.ifelseExpSnippets);
	const { switchSnippets } = useSelector((state) => state.switchSnippets);
	const { switchExpSnippets } = useSelector((state) => state.switchExpSnippets);
	const { forSnippets } = useSelector((state) => state.forSnippets);
	const { forExpSnippets } = useSelector((state) => state.forExpSnippets);
	const { whileSnippets } = useSelector((state) => state.whileSnippets);
	const { whileExpSnippets } = useSelector((state) => state.whileExpSnippets);

	/**
	 * Handle fetching all data when the component is mounted.
	 */
	useEffect(() => {
		dispatch(languagesService());
		dispatch(playgroundsService());
	}, [dispatch]);

	/**
	 * Handle changing the scroll position when the filter button is clicked.
	 */
	useEffect(() => {
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

	/**
	 * Handle initializing Playground area when the filter is changed.
	 * It will update the definition of the fulter.
	 * It will initialize the code snippet based on the default language (C++).
	 * It will initialize the code example based on the default language (C++).
	 */
	useEffect(() => {
		setPlayGroundFilter(filter);
		switchProgrammingDescription(filter);
		switchCodeSnippet(filter);
		handleLanguageClick(selectedLanguage);
		loadingApiService();
	}, [filter]);

	const loadingApiService = () => {
		switch (filter) {
			case 'Class':
				fetchDispatchData(classSnippetService, classExpService);
				break;
			case 'Function':
				fetchDispatchData(functionSnippetService, functionExpService);
				break;
			case 'Variable':
				fetchDispatchData(variableSnippetService, variableExpService);
				break;
			case 'If-Else Conditional':
				fetchDispatchData(ifelseSnippetService, ifelseExpService);
				break;
			case 'Switch Case Conditional':
				fetchDispatchData(switchSnippetService, switchExpService);
				break;
			case 'For Loop':
				fetchDispatchData(forSnippetService, forExpService);
				break;
			case 'While Loop':
				fetchDispatchData(whileSnippetService, whileExpService);
				break;
			default:
				break;
		}
	};

	const fetchDispatchData = (snippetService, expService) => {
		if (snippetService.length === 0 && expService.length === 0) {
			dispatch(snippetService());
			dispatch(expService());
		}
	};

	/**
	 * Handle loading code snippet areas based on default language (C++).
	 */
	const switchCodeSnippet = (filter) => {
		switch (filter) {
			case 'Class': {
				setFilterCodeSnippet(switchCodeSnippetArea('C++', classSnippets));
				break;
			}
			case 'Function':
				setFilterCodeSnippet(switchCodeSnippetArea('C++', functionSnippets));
				break;
			case 'Variable':
				setFilterCodeSnippet(switchCodeSnippetArea('C++', variableSnippets));
				break;
			case 'If-Else Conditional':
				setFilterCodeSnippet(switchCodeSnippetArea('C++', ifelseSnippets));
				break;
			case 'Switch Case Conditional':
				setFilterCodeSnippet(switchCodeSnippetArea('C++', switchSnippets));
				break;
			case 'For Loop':
				setFilterCodeSnippet(switchCodeSnippetArea('C++', forSnippets));
				break;
			case 'While Loop':
				setFilterCodeSnippet(switchCodeSnippetArea('C++', whileSnippets));
				break;
			default:
				break;
		}
	};

	const handleLanguageClick = (item) => {
		setSelectedLanguage(item);
		switch (filter) {
			case 'Class':
				setFilterCodeSnippet(switchCodeSnippetArea(item, classSnippets));
				setLanguageExample(switchCodeSnippetArea(item, classExpSnippets));
				break;
			case 'Function':
				setFilterCodeSnippet(switchCodeSnippetArea(item, functionSnippets));
				setLanguageExample(switchCodeSnippetArea(item, functionExpSnippets));
				break;
			case 'Variable':
				setFilterCodeSnippet(switchCodeSnippetArea(item, variableSnippets));
				setLanguageExample(switchCodeSnippetArea(item, variableExpSnippets));
				break;
			case 'If-Else Conditional':
				setFilterCodeSnippet(switchCodeSnippetArea(item, ifelseSnippets));
				setLanguageExample(switchCodeSnippetArea(item, ifelseExpSnippets));
				break;
			case 'Switch Case Conditional':
				setFilterCodeSnippet(switchCodeSnippetArea(item, switchSnippets));
				setLanguageExample(switchCodeSnippetArea(item, switchExpSnippets));
				break;
			case 'For Loop':
				setFilterCodeSnippet(switchCodeSnippetArea(item, forSnippets));
				setLanguageExample(switchCodeSnippetArea(item, forExpSnippets));
				break;
			case 'While Loop':
				setFilterCodeSnippet(switchCodeSnippetArea(item, whileSnippets));
				setLanguageExample(switchCodeSnippetArea(item, whileExpSnippets));
				break;
			default:
				break;
		}
	};

	const switchProgrammingDescription = (filter) => {
		setProgrammingDescription(switchDescription(filter, playgrounds));
	};

	return (
		<div id="playGroundArea" ref={scrollRef}>
			<div className="text-center">
				<div className="container pg-playground-section">
					<div className="section-title">
						<h2>{t('playground.title')}</h2>
						{isLoading ? <BarLoader /> : null}
						{!isLoading && playgroundError ? <ServiceUnavailable /> : null}
						{!isLoading && playgrounds.length > 0 ? (
							<p className="pg-programming-description">{programmingDescription}</p>
						) : null}
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
						{/* <div className="pg-playground-box">
								{languageExample ? (
									<div className="row pg-playground-code">
										<CodeSection code={languageExample} />
									</div>
								) : null}
							</div> */}
					</div>
				</div>
			</div>
		</div>
	);
};

PlayGround.propTypes = {
	filter: PropTypes.string,
	scrollPosition: PropTypes.number
};
