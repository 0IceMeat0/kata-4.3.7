import './style/main.scss';
import './style/wrapper.scss';

const searchInput = document.querySelector("input"); 
const searchBlockResults = document.querySelector(".search-block"); 
const saved = document.querySelector(".saved"); 

const debounce = (fn, debounceTime) => {
  let inDebounce;
  return function () {
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => fn.apply(this, arguments), debounceTime);
  };
};
const getSearchResultsDebounce = debounce(getSearchResults, 300); 
searchInput.addEventListener("input", getSearchResultsDebounce);

async function getSearchResults() {
  const searchUrl = new URL("https://api.github.com/search/repositories");
  const repositorySearch = searchInput.value;
  if (repositorySearch === "") {
    hideNoResultsMessage();
    return;
  }
  searchUrl.searchParams.append("q", repositorySearch);
  try {
    const response = await fetch(searchUrl);
    if (response.ok) {
      const searchResults = await response.json();
      if (searchResults.items.length === 0) {
        showNoResultsMessage();
      } else {
        hideNoResultsMessage();
        showResults(searchResults);
      }
    } else {
      return;
    }
  } catch (err) {
    return null;
  }
}





function showResults(results) {
  hideNoResultsMessage();
  for (let i = 0; i < 5; i++) {
    const {name, owner, stargazers_count: stars} = results.items[i];
    const div = document.createElement("div");
    div.innerHTML = `${name}`;
    div.classList.add("search-block__result");
    div.dataset.owner = `${owner.login}`;
    div.dataset.stars = `${stars}`;
    searchBlockResults.append(div);
  }
}

function showNoResultsMessage() {
  hideNoResultsMessage();

  searchBlockResults.innerHTML = "Таких репозиториев нет"; //нужно создать блок search-block__result

}

function hideNoResultsMessage() {
  searchBlockResults.innerHTML = "";
}

searchBlockResults.addEventListener("click", function (res) {
  if (res.target.classList.contains("search-block__result")) {
    saveResult(res.target);
    searchInput.value = "";
    hideNoResultsMessage();
  } else {
    return;
  }
});

function saveResult(savedResult) {
  const name = savedResult.textContent;
  const owner = savedResult.dataset.owner;
  const stars = savedResult.dataset.stars;
  const div = document.createElement("div");
  div.classList.add("saved__result");
  const infoDiv = document.createElement("div");
  infoDiv.classList.add("saved__info");
  const pName = document.createElement("p");
  pName.innerHTML = `Name: ${name}`;
  infoDiv.append(pName);
  const pOwner = document.createElement("p");
  pOwner.innerHTML = `Owner: ${owner}`;
  infoDiv.append(pOwner);
  const pStars = document.createElement("p");
  pStars.innerHTML = `Stars: ${stars}`;
  infoDiv.append(pStars);
  div.append(infoDiv);
  const btn = document.createElement("button");
  btn.classList.add("saved__button");
  div.append(btn);
  saved.append(div);
}

saved.addEventListener("click", function (res) {
  if (res.target.classList.contains("saved__button")) {
    res.target.parentElement.remove();
  } else {
    return;
  }
});
