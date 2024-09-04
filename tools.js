/*jslint browser:true */
/*jshint esversion: 6 */
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
function screenLock()
{
	// ロック用のdivを生成
	const element = document.createElement('div');
	element.id = "screenLock";
	// ロック用のスタイル
	element.style.top = '0px';
	element.style.left = '0px';
	element.style.height = '100%';
	element.style.width = '100%';
	element.style.position = 'fixed';
	element.style.zIndex = '9999';
	element.style.opacity = '0';
//
	document.body.appendChild(element);
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
function screenUnlock()
{
	const dom_obj = document.getElementById("screenLock");
	const dom_obj_parent = dom_obj.parentNode;
	dom_obj_parent.removeChild(dom_obj);
}
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
		const configFile = rootFolder + "config.txt";
		
		const config = await fetch(configFile).then(response => response.json());

		config.rootFolder = rootFolder;

		console.log(config);
		
		return config;
	}
	catch(e)
	{
		console.log(e);
		
		return null;
	}
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
