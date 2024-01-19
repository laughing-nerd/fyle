// Declarations
const API_BASE_URL = "https://api.github.com/"
const spinner = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50" height="50" fill="#000000">
  <circle cx="25" cy="25" r="20" stroke-width="5" stroke="#ccc" fill="none"></circle>
  <circle cx="25" cy="25" r="20" stroke-width="5" stroke="#3283C9" fill="none" stroke-dasharray="80 120">
    <animateTransform attributeName="transform" attributeType="xml" type="rotate" from="0 25 25" to="360 25 25" dur="1s" repeatCount="indefinite"></animateTransform>
  </circle>
</svg>
`
const firstPageSVG = `
<svg height="18px" width="18px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 31.493 31.493" xml:space="preserve" fill="#3283C9" stroke="#3283C9" transform="rotate(180)">
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <g>
        <g>
          <path d="M16.257,14.159c-0.073-0.957-0.543-1.854-1.289-2.458L5.7,4.199C5.078,3.696,4.296,3.42,3.498,3.42 c-1.062,0-2.053,0.473-2.721,1.298c-1.213,1.5-0.98,3.709,0.519,4.923l6.38,5.164l-6.763,7.408 c-1.301,1.424-1.2,3.643,0.226,4.944c0.645,0.59,1.483,0.915,2.358,0.915c0.981,0,1.924-0.416,2.586-1.141l9.268-10.15 C15.999,16.071,16.329,15.116,16.257,14.159z M13.873,15.433l-9.268,10.15c-0.507,0.557-1.56,0.605-2.118,0.098 c-0.61-0.559-0.654-1.51-0.097-2.121l8.196-8.975l-8.032-6.5c-0.643-0.52-0.742-1.467-0.222-2.11 c0.286-0.354,0.711-0.556,1.166-0.556c0.348,0,0.674,0.115,0.944,0.334l9.267,7.502c0.319,0.259,0.521,0.643,0.552,1.054 C14.292,14.719,14.151,15.129,13.873,15.433z"></path>
          <path d="M30.195,11.701l-9.269-7.502c-0.621-0.503-1.401-0.78-2.201-0.78c-1.064,0-2.056,0.474-2.723,1.299 c-1.213,1.5-0.981,3.709,0.519,4.923l6.381,5.164l-6.763,7.407c-0.631,0.689-0.955,1.584-0.912,2.521 c0.043,0.934,0.446,1.795,1.136,2.425c0.647,0.591,1.485,0.916,2.359,0.916c0.981,0,1.923-0.416,2.584-1.142l9.27-10.148 c0.648-0.709,0.979-1.665,0.907-2.623C31.411,13.202,30.941,12.306,30.195,11.701z M29.1,15.433l-9.27,10.15 c-0.508,0.557-1.561,0.604-2.118,0.096c-0.296-0.271-0.469-0.64-0.487-1.039c-0.018-0.399,0.121-0.783,0.392-1.08l8.195-8.975 l-8.032-6.5c-0.643-0.52-0.742-1.467-0.222-2.11c0.286-0.354,0.712-0.557,1.168-0.557c0.346,0,0.672,0.116,0.942,0.335 l9.268,7.502c0.319,0.259,0.521,0.643,0.552,1.054C29.52,14.719,29.38,15.128,29.1,15.433z"></path>
        </g>
      </g>
    </g>
  </svg>
`
const lastPageSVG = `
<svg height="18px" width="18px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 31.493 31.493" xml:space="preserve" fill="#3283C9" stroke="#3283C9">
  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
  <g id="SVGRepo_iconCarrier">
    <g>
      <g>
        <path d="M16.257,14.159c-0.073-0.957-0.543-1.854-1.289-2.458L5.7,4.199C5.078,3.696,4.296,3.42,3.498,3.42 c-1.062,0-2.053,0.473-2.721,1.298c-1.213,1.5-0.98,3.709,0.519,4.923l6.38,5.164l-6.763,7.408 c-1.301,1.424-1.2,3.643,0.226,4.944c0.645,0.59,1.483,0.915,2.358,0.915c0.981,0,1.924-0.416,2.586-1.141l9.268-10.15 C15.999,16.071,16.329,15.116,16.257,14.159z M13.873,15.433l-9.268,10.15c-0.507,0.557-1.56,0.605-2.118,0.098 c-0.61-0.559-0.654-1.51-0.097-2.121l8.196-8.975l-8.032-6.5c-0.643-0.52-0.742-1.467-0.222-2.11 c0.286-0.354,0.711-0.556,1.166-0.556c0.348,0,0.674,0.115,0.944,0.334l9.267,7.502c0.319,0.259,0.521,0.643,0.552,1.054 C14.292,14.719,14.151,15.129,13.873,15.433z"></path>
        <path d="M30.195,11.701l-9.269-7.502c-0.621-0.503-1.401-0.78-2.201-0.78c-1.064,0-2.056,0.474-2.723,1.299 c-1.213,1.5-0.981,3.709,0.519,4.923l6.381,5.164l-6.763,7.407c-0.631,0.689-0.955,1.584-0.912,2.521 c0.043,0.934,0.446,1.795,1.136,2.425c0.647,0.591,1.485,0.916,2.359,0.916c0.981,0,1.923-0.416,2.584-1.142l9.27-10.148 c0.648-0.709,0.979-1.665,0.907-2.623C31.411,13.202,30.941,12.306,30.195,11.701z M29.1,15.433l-9.27,10.15 c-0.508,0.557-1.561,0.604-2.118,0.096c-0.296-0.271-0.469-0.64-0.487-1.039c-0.018-0.399,0.121-0.783,0.392-1.08l8.195-8.975 l-8.032-6.5c-0.643-0.52-0.742-1.467-0.222-2.11c0.286-0.354,0.712-0.557,1.168-0.557c0.346,0,0.672,0.116,0.942,0.335 l9.268,7.502c0.319,0.259,0.521,0.643,0.552,1.054C29.52,14.719,29.38,15.128,29.1,15.433z"></path>
      </g>
    </g>
  </g>
</svg>
`
let globalState = {
  selected: null,
  per_page: 10,
  windowSize: 7,
  currentPage: 1
}

// Utility Functions ==================================================
function createComponent(tagName, className, content) {
  const component = document.createElement(tagName)
  component.classList.add(className)
  component.innerHTML = content || ""
  return component
}

function createSelectBox(container, data, searchedUser) {
  const selectBoxDiv = createComponent("div", "selectRepos")
  const selectBox = createComponent("select", "selectBox")

  // Create an option for the current per_page value
  const currentOpt = createComponent("option", "selected", globalState.per_page)
  currentOpt.setAttribute("value", globalState.per_page)
  selectBox.appendChild(currentOpt)

  // Create options for other per_page values
  for (let i = 10; i <= 100; i += 10) {
    if (i !== globalState.per_page) {
      const opt = createComponent("option", "count", i)
      opt.setAttribute("value", i)
      selectBox.appendChild(opt)
    }
  }
  container.addEventListener("change", function(e) {
    globalState.per_page = e.target.value
    const maxPages = Math.ceil(data.public_repos / globalState.per_page) // Calculate the maximum number of pages with the new per_page value
    globalState.currentPage = Math.min(maxPages, globalState.currentPage) // Adjust the currentPage to be within the valid range

    populateRepos(container, data, searchedUser)
    populatePagination(container, data, searchedUser)
  })
  selectBoxDiv.appendChild(selectBox)
  return selectBoxDiv
}

function handlePaginationClick(clickedBox, container, data, searchedUser) {
  globalState.selected.classList.remove("selected")
  globalState.currentPage = parseInt(clickedBox.innerHTML)
  clickedBox.classList.add("selected")
  globalState.selected = clickedBox

  populatePagination(container, data, searchedUser)
  populateRepos(container, data, searchedUser)
}
//=====================================================================

addEventListener("DOMContentLoaded", function() {
  const root = document.querySelector(".root")
  createComponents(root) // Populate the root element
})

function createComponents(root) {
  // root -> search, container
  // container -> 3 divs
  const search = createComponent("div", "search")
  const searchInput = createComponent("input", "user")
  searchInput.setAttribute("placeholder", "Search for a GitHub username")
  const searchButton = createComponent("button", "searchButton", "🔍")
  searchButton.addEventListener("click", function() {
    searchUser(container)
  })
  search.append(searchInput, searchButton)

  const container = createComponent("div", "container")
  const top = createComponent("div", "top")
  const repos = createComponent("div", "repos")
  const pagination = createComponent("div", "pagination")
  container.append(top, repos, pagination)
  container.children[1].innerHTML = "<h1>Fyle | Search for a GitHub user</h1>"

  root.append(search, container)
}

// Search ============================================================
async function searchUser(container) {
  const searchedUser = document.querySelector(".user").value
  try {
    const res = await fetch(`${API_BASE_URL}users/${searchedUser}`)
    if (!res.ok) {
      throw new Error("User not Found!")
    }
    const data = await res.json()

    // Populate the container div
    populateUser(container, data)
    populateRepos(container, data, searchedUser)
    populatePagination(container, data, searchedUser)
  }
  catch (err) {
    alert(err)
  }
}
//====================================================================

// Populate container div ============================================
function populateUser(container, data) {
  const top = createComponent("div", "top")

  const avatar = createComponent("img", "avatar")
  avatar.src = data.avatar_url
  const avatar_div = createComponent("div", "avatar_div")
  avatar_div.appendChild(avatar)

  const information = createComponent("div", "information")
  const name = createComponent("div", "name", data.name)
  const bio = createComponent("div", "bio", data.bio)
  const location = createComponent("div", "location", data.location)
  const twitter_username = createComponent("div", "twitter_username", data.twitter_username)
  const html_url = createComponent("a", "html_url", "GitHub")
  html_url.href = data.html_url
  information.append(name, bio, location, twitter_username, html_url)

  top.append(avatar, information)
  container.children[0].innerHTML = top.innerHTML
}

async function populateRepos(container, userdata, searchedUser) {
  try {
    const reposContainer = createComponent("div", "repos")
    const selectBox = createSelectBox(container, userdata, searchedUser)

    container.children[1].innerHTML = spinner

    const res = await fetch(`${API_BASE_URL}users/${searchedUser}/repos?per_page=${globalState.per_page}&page=${globalState.currentPage}`)
    if (!res.ok) {
      throw new Error("Couldn't fetch repos")
    }
    const data = await res.json()

    reposContainer.appendChild(selectBox)

    const parent = createComponent("div", "parent")
    for (let repo of data) {
      const header = createComponent("div", "header")
      const heading = createComponent("div", "heading", repo.name)
      const description = createComponent("div", "description", repo.description)
      header.append(heading, description)

      const topics = createComponent("div", "topics")

      for (let topic of repo.topics) {
        const topicEle = createComponent("div", "topic", topic)
        topics.appendChild(topicEle)
      }

      const repoDiv = createComponent("div", "repo")
      repoDiv.append(header, topics)
      parent.appendChild(repoDiv)
    }

    reposContainer.appendChild(parent)

    container.children[1].innerHTML = reposContainer.innerHTML
  } catch (err) {
    alert(err)
  }
}

function populatePagination(container, data, searchedUser) {
  const pagination = createComponent("div", "subPagination")

  const boxes = Math.ceil(data.public_repos / globalState.per_page)
  const boxList = createComponent("div", "boxList")

  let start = Math.max(1, globalState.currentPage - Math.floor(globalState.windowSize / 2))
  let end = Math.min(start + globalState.windowSize - 1, boxes)
  if (end - start + 1 < globalState.windowSize) {
    start = Math.max(1, end - globalState.windowSize + 1)
  }

  // Add the pagination buttons to boxList
  for (let i = start; i <= end; i++) {
    const box = createComponent("button", "box", i)
    if (i === globalState.currentPage) {
      box.classList.add("selected")
    }
    boxList.appendChild(box)
  }

  // Add event listener to boxList for event delegation
  boxList.addEventListener("click", function(event) {
    const target = event.target
    if (target.classList.contains("box")) {
      handlePaginationClick(target, container, data, searchedUser)
    }
  })

  const lastPage = createComponent("button", "lastPage", lastPageSVG)
  lastPage.setAttribute("title", "Go to the last page")
  lastPage.addEventListener("click", function() {
    globalState.currentPage = boxes
    populatePagination(container, data, searchedUser)
    populateRepos(container, data, searchedUser)

  })
  const firstPage = createComponent("button", "firstPage", firstPageSVG)
  firstPage.setAttribute("title", "Go to the first page")
  firstPage.addEventListener("click", function() {
    globalState.currentPage = 1
    populatePagination(container, data, searchedUser)
    populateRepos(container, data, searchedUser)

  })

  pagination.appendChild(firstPage)
  pagination.appendChild(boxList)
  pagination.appendChild(lastPage)

  container.children[2].innerHTML = ''
  container.children[2].append(pagination)

  if (globalState.selected === null) {
    globalState.selected = boxList.firstChild
    globalState.selected.classList.add("selected")
  }
}
//====================================================================
