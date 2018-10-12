const baseURL = 'https://api.github.com';
const user = '<YOUR_USERNAME>';

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}



function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  const url = `${baseURL}/repos/${repo}/forks`;
  //use fetch to fork it!
  fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(res => res.json())
  .then(json => showResults(json))

}

function showResults(json) {
  //use this function to display the results from forking via the API
  document.getElementById('results').innerHTML = `<a href=${json.html_url}>${
    json.html_url
  }</a>`;
}
  


function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const title = document.getElementById('title').value
  const body = document.getElementById('body').value

  fetch(`/js-ajax-fetch-lab/issues/`, {
    method: 'POST',
    title: JSON.stringify(title),
    body: JSON.stringify(body),
    headers: {
    Authorization: `token ${getToken()}`
    }
  })
  .then(res => res.json())
  .then(json => console.log(json));

}



function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  fetch(`/js-ajax-fetch-lab/issues/`, {
   headers: {
   Authorization: `token ${getToken()}`
   }
 })
 .then(res => res.json())
 .then(json => console.log(json));
}
