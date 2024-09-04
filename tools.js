/*jslint browser:true */
/*jshint esversion: 6 */

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
function getById(tag) {
	return document.getElementById(tag);
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
function getByClass(tag) {
	return document.getElementsByClassName(tag);
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
function dataToBlob(base64)
{
	const decodedData = atob(base64.replace(/^.*,/, ""));
	const buffers = new Uint8Array(decodedData.length);

	for(let i = 0; i < decodedData.length; i++) {
		buffers[i] = decodedData.charCodeAt(i);
	}

	try
	{
		const blob = new Blob([buffers.buffer], {
			type: "image/png",
		});

		return blob;
	}
	catch(e) {
		return null;
	}
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
function getQueryParams()
{
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
				
	const parameterKeys = urlParams.keys();

	const ret = {};

	for(const key of parameterKeys) {
		ret[key.toLowerCase()] = urlParams.get(key);
	}
	
	return ret;
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
async function getResource(rootFolder)
{
	try
	{
		const configFile = rootFolder + "_config.txt";
		
		const config = await fetch(configFile).then(response => response.json());
		
		config.rootFolder = rootFolder;
		
		return config;
	}
	catch(e)
	{
		console.log(e);
		
		return null;
	}
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
