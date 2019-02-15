export function formatDateTime(dateTime) {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }
  return new Date(dateTime).toLocaleString('sv', options)
}

export function extractTextFromHtml(html) {
  const doc = new DOMParser().parseFromString(html, 'text/html')
  return doc.body.textContent || ''
}
