let browsing = [];
const urlInput = document.getElementById('url-input');
const browsingHistoryTable = document.getElementById('browsing').getElementsByTagName('tbody')[0];

function clearingUrl() {
  urlInput.value = '';
}

function loadingUrl() {
  const url = urlInput.value;
  const date = new Date();

  const browsername=JSON.stringify(navigator.userAgentData.brands[2].brand);
  const browserversion=JSON.stringify(navigator.userAgentData.brands[2].version);

  const browser=browsername.concat(browserversion);
  browsing.push({ url, date,browser });
  window.open(url, '_blank');
}

function showingHistory() {
  browsingHistoryTable.innerHTML = '';
  browsing.forEach(entry => {
    const row = browsingHistoryTable.insertRow();
    const linkCell = row.insertCell();
    linkCell.textContent = entry.url;
    const dateCell = row.insertCell();
    dateCell.textContent = entry.date.toLocaleString();
    const browserCell = row.insertCell();
    browserCell.textContent = entry.browser;
  });
}