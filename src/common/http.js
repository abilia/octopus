import { parseString } from 'xml2js'

export async function fetchXml(url, successCallback, errorCallback) {
  const response = await fetch(url)
  const xml = await response.text()

  parseString(xml, function (error, result) {
    if (error && errorCallback) {
      errorCallback(error)
    } else if (result && successCallback) {
      successCallback(result)
    }
  })
}

export async function fetchText(url, successCallback, errorCallback) {
  const response = await fetch(url);
  const text = await response.text();

  successCallback(text);
}

export async function fetchJson(url, successCallback, errorCallback) {
  const response = await fetch(url);
  const json = await response.text();

  try {
    const data = JSON.parse(json);
    successCallback(data);
  } catch (error) {
    // errorCallback(error)
    console.error(error);
  }
}
