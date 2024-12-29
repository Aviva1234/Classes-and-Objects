class Movie {
  constructor(title, director, year) {
    this.title = title;
    this.director = director;
    this.year = year;
  }
}
const defaultData = [
  { title: "Sonic 3", director: "Jeff Fowler", year: "2024" },
  { title: "Zootopia", director: "Byron Howard", year: "2016" },
  { title: "Frozen", director: "Jennifer Lee", year: "2013" },
  { title: "The Karate Kid", director: "Christopher Cain", year: "1984" },
];
class UI {
  static addMovieToList = (movie) => {
    const list = document.getElementById("tbody");
    const row = document.createElement("tr");
    row.dataset.movieId = movie.id;
    row.innerHTML = `<td>${movie.title}</td><td>${movie.director}</td><td>${movie.year}</td><td><button type="button" class="btn-outline-danger deleteBtn">Delete</button></td>`;
    list.appendChild(row);
  };
  static displayMovies = () => {
    defaultData.forEach((movie) => UI.addMovieToList(movie));
  };
}
UI.displayMovies();
function addMovie(event) {
  event.preventDefault();
  const title = document.getElementById("titleInput").value;
  const director = document.getElementById("directorInput").value;
  const year = document.getElementById("yearInput").value;
  const movie = new Movie(title, director, year);
  //console.log(movie.title);
  UI.addMovieToList(movie);
}
document.querySelector("#form").addEventListener("submit", addMovie);
//document.getElementById("button").addEventListener("submit", addMovie);

function deleteMovie(movieId) {
  const movieElement = document.querySelector(
    `tr[data-movie-id = "${movieId}"]`
  );
  if (movieElement) {
    movieElement.remove();
  }
}
document.getElementById("tbody").addEventListener("click", (e) => {
  if (e.target && e.target.matches("button.deleteBtn")) {
    deleteMovie(e.target.closest("tr").dataset.movieId);
  }
});
