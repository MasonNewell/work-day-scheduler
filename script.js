var currentHour = new Date().getHours();

// Object for events
var todos = {};

// If empty object
if (localStorage.getItem("todos") == null) {
  localStorage.setItem("todos", "[]");
} else {
  todos = JSON.parse(localStorage.getItem("todos"));
}

// Create schedule
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

// update local storage
$(document).on("click", ".saveBtn", function () {
  // get id of row clicked
  var newItemHour = this.id;
  // get text entered
  var newEvent = $(this).siblings(".description").val();
  addItem(todos, newItemHour, newEvent);
});

// Add item to todos object
function addItem(todos, todosTime, todosValue) {
  todos[todosTime] = todosValue;
  localStorage.setItem("todos", JSON.stringify(todos));
}

render();
