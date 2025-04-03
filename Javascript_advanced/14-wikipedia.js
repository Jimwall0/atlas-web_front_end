const createElement = (data) => {
  const sentence = document.createElement("p");
  const node = document.createTextNode(data);
  sentence.appendChild(node);
  document.body.appendChild(sentence);
}

const queryWikipedia = (callback) => {
  const request = new XMLHttpRequest();
  const url = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*";
  request.open("GET", url, true);
  request.onload = () => {
    if (request.status === 200) {
      const response = JSON.parse(request.responseText)
      const page = response.query.pages;
      const pageID = Object.keys(page)[0];
      const extract = page[pageID].extract;
      callback(extract);
    } else {
      console.error("Request failed with status:", request.status);
    }
  }
  request.onerror = () => {
    console.error("Request failed");
  };
  request.send();
};

queryWikipedia(createElement);