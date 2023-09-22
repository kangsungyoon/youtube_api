const api_key = 'AIzaSyDCGJcstcAwUWDoTcrQ4CZeSjdkDz8RSB4';
const baseURL = 'https://www.googleapis.com/youtube/v3/playlistItems';
const pid = 'PLSflH3hv0IGX5YEKeboI4EFY3h5g6nFKU';
const num = 5;
const resultURL = `${baseURL}?key=${api_key}&part=snippet&palatListId=${pid}&maxResults=${num}`;

fetch(resultURL)
	.then((data) => data.json())
	.then((json) => {
		console.log(json);
	});
