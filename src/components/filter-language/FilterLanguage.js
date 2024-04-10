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
									key={`${d.name}-${i}`}
									onClick={() => handleLanguageClick(d.name)}
								>
									{d.name}
								</Dropdown.Item>
							))
						: null}
				</Dropdown.Menu>
			</Dropdown>
		</div>
	);
};
