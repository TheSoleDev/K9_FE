export function PostData(type, userData){


	let BaseUrl = 'http://127.0.0.1:8000/';

	console.log(type, JSON.stringify(userData));

	return new Promise((resolve, reject) => {

		if(type == 'users/login'){
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
				resolve(responseJson);
			})
			.catch((error) => {
				reject(error);
			})
		}
		else if(type == 'users/register'){
			fetch(BaseUrl+type,{
				method: 'POST',
			    headers: new Headers({
				    "Content-Type": "application/json",
				    'Access-Control-Allow-Origin': '*'
			    }),
				body: JSON.stringify({"username":userData.username,"email":userData.email,"plainPassword":{"first":userData.password,"second":userData.cpassword}})			    
			})
			.then((response) => response.json())
			.then((responseJson) => {
				resolve(responseJson);
			})
			.catch((error) => {
				reject(error);
			})
		}

	});


}