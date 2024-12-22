class Movie {
  constructor(title, director, year) {
    this.title = title;
    this.director = director;
    this.year = year;
  }
}
function addMovie(event) {
  event.preventDefault();
  const title = document.getElementById("titleInput").value;
  const director = document.getElementById("directorInput").value;
  const year = document.getElementById("yearInput").value;
  const movie = new Movie(title, director, year);
  console.log(movie.title);
}
document.querySelector("#form").addEventListener("submit", addMovie);
//document.getElementById("button").addEventListener("submit", addMovie);
