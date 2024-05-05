const filtersService = async () => {
	try {
		const response = await fetch(process.env.REACT_APP_FILTERS_API);
		return response.json();
	} catch (error) {
		console.log(error);
	}
};

module.exports = filtersService;
