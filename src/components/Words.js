var programming_languages = [
  "python",
  "javascript",
  "c++",
  "json",
  "java",
  "html",
  "css",
  "c",
  "csharp",
  "php",
  "kotlin",
  "sql"
]

function randomWord() {
  return programming_languages[Math.floor(Math.random() * programming_languages.length)]
}

export { randomWord }