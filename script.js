var currentHour = new Date().getHours();

//get this from localStorage
var todos = {
  9: "get shopping list",
  12: "eat lunch",
};
function render() {
  var today = dayjs().format("dddd, MMMM d");
  $("#currentDay").text(today);

  //   Loop to render schdule dynamically
  for (var i = 9; i < 18; i++) {
    $(".container").append(`
    <div class="time-block row">
      <div class="hour">${i < 12 ? `${i}AM` : i > 12 ? `${i - 12}PM` : "12PM"}</div>
      <textarea
      name=""
      id=""
      cols="30"
      rows="3"
      class="description ${i < currentHour ? "past" : i === currentHour ? "present" : "future"}"
      >${todos[i] || ""}</textarea
      ><button class="saveBtn" id="${i}">Save</button>
      </div>
      `);
  }
}

//when saving todo, update localStorage

render();
