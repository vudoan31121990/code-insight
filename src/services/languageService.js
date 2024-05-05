const languagesService = async () => {
    try {
		const response = await fetch(process.env.REACT_APP_LANGUAGES_API);
		return response.json();
	} catch (error) {
		console.log(error);
	}
}

module.exports = languagesService