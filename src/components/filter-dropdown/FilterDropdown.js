import React, { useState } from 'react';
import './filter-dropdown.scss';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export const FilterDropdown = ({ componentLanguages = [], onClick }) => {
	const [title, setTitle] = useState('Select a component for Playground');

	const handleOnClick = (event) => {
		setTitle(event.target.getAttribute('data-value'));
		onClick(event);
		event.preventDefault();
	};

	return (
		<div className="container">
			<div className="row fl-dropdown-section">
				<div className="col">
					<DropdownButton size="lg" drop="down-centered" title={title}>
						{componentLanguages.map((d, i) => (
							<Dropdown.Item
								key={`${d.title}-${i}`}
								eventKey={d.name}
								data-value={d.name}
								onClick={handleOnClick}
							>
								{d.name}
							</Dropdown.Item>
						))}
					</DropdownButton>
				</div>
			</div>
		</div>
	);
};
