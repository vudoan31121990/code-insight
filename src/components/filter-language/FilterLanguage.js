import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

export const FilterLanguage = ({ selectedLanguage, programmingLanguages, handleLanguageClick }) => {
	return (
		<div className="col-6 col-sm-2">
			<Dropdown>
				<Dropdown.Toggle variant="success" id="dropdown-basic">
					{selectedLanguage ? selectedLanguage : 'Select a language'}
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
		</div>
	);
};
