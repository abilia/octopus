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