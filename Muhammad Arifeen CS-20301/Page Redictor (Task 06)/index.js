  // array to store the history of URLs visited
    let history = [];

    // Get the input element and history element from the DOM
    const urlInput = document.getElementById('url-input');
    const historyTable = document.getElementById('history').getElementsByTagName('tbody')[0];

    // Define a function to clear the input field
    function clearUrl() {
      urlInput.value = '';
    }

    // Define a function to load the URL
    function loadUrl() {
      // Get the URL entered in the input field
      const url = urlInput.value;

      // Update the browser history with the new URL and the date and time of visit
      const date = new Date();
     
      const browsername=JSON.stringify(navigator.userAgentData.brands[2].brand);
      const browserversion=JSON.stringify(navigator.userAgentData.brands[2].version);

      const browser=browsername.concat(browserversion);
      history.push({ url, date,browser });

      // Load the URL in a new window
      window.open(url, '_blank');
    }

    // Define a function to show the history of visited URLs
    function showHistory() {
      // Clear the history table before displaying the new history
      historyTable.innerHTML = '';

      // Loop through the history array and create a new row in the table for each URL visited
      history.forEach(entry => {
        const row = historyTable.insertRow();
        const linkCell = row.insertCell();
        linkCell.textContent = entry.url;
        const dateCell = row.insertCell();
        dateCell.textContent = entry.date.toLocaleString();
        const browserCell = row.insertCell();
        browserCell.textContent = entry.browser;
      });
    }