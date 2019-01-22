export function PostData(type, userData){


	let BaseUrl = 'http://127.0.0.1:8000/';

	console.log(type, JSON.stringify(userData));

	return new Promise((resolve, reject) => {
		fetch(BaseUrl+type,{
			method: 'POST',

		    headers: new Headers({
			    "Content-Type": "application/json",
			    'Access-Control-Allow-Origin': '*',
		      'PHP_AUTH_USER':userData.username,
		      'PHP_AUTH_PW':userData.password,
		    })
		})
		.then((response) => response.json())
		.then((responseJson) => {
	console.log(responseJson);			
			resolve(responseJson);
		})
		.catch((error) => {
			reject(error);
		})

	});


}