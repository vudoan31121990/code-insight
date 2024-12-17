import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import PropType from 'prop-types';

export const FilterLanguage = ({ selectedLanguage, programmingLanguages, handleLanguageClick }) => {
	return (
		<Dropdown>
			<Dropdown.Toggle variant="success" id="dropdown-basic">
				{selectedLanguage || 'Select a language'}
			</Dropdown.Toggle>
			<Dropdown.Menu>
				{programmingLanguages && programmingLanguages.length > 0
					? programmingLanguages.map((d, i) => (
							<Dropdown.Item
								key={`${d.languageName}-${i}`}
								onClick={() => handleLanguageClick(d.languageName)}
							>
								{d.languageName}
							</Dropdown.Item>
						))
					: null}
			</Dropdown.Menu>
		</Dropdown>
	);
};

FilterLanguage.propTypes = {
	selectedLanguage: PropType.string,
	programmingLanguages: PropType.array,
	handleLanguageClick: PropType.func
};
