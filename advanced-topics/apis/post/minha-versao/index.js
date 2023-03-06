const form = document.querySelector("form")

document.addEventListener("DOMContentLoaded", showAllArticles)

form.addEventListener("submit", async e => {
  e.preventDefault()
  const createdArticle = await newArticle()
  form.reset()
  showArticle(createdArticle)
})

async function getArticles() {
  return await fetch("http://localhost:3000/articles").then(res => res.json())
}

async function newArticle() {
  // sendo um POST, retorna as informações q enviei pelo body.
  const newArticle = await fetch("http://localhost:3000/articles", {
    method: "POST",
    headers: {
      // é necessário colocar esse header para avisar q o dado é em formato JSON.
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: document.getElementById("title").value,
      author: document.getElementById("author").value,
      content: document.getElementById("content").value,
    }),
  }).then(res => res.json()) //para retornar o artigo criado.

  return newArticle
}

function showArticle(articleData) {
  const article = document.createElement("article")

  const title = document.createElement("h2")
  title.innerText = articleData.title

  const author = document.createElement("h3")
  author.innerText = articleData.author

  const content = document.createElement("p")
  content.innerText = articleData.content

  const line = document.createElement("hr")

  article.append(title, author, content, line)
  document.getElementById("articles").appendChild(article)
}

async function showAllArticles() {
  const articles = await getArticles()
  articles.forEach(article => showArticle(article))
}
