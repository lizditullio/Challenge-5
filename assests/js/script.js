var tasks = {};

// display the currect day
$("#currentDay").text("The current date is " + moment().format('MMMM Do YYYY'));

  $(".saveBtn").click(function(){
    var hour = $(this).siblings(".hour").text();
    var task = $(this).siblings(".description").val();

     localStorage.setItem(hour, task);
  });

  // get the currect hour in military time and convert the time into a number
var whatTimeIsIt = parseInt(moment().format('H'));
console.log(whatTimeIsIt);

// get the id for each time block and convert it into a number
$(".time-block").each(function() {
    var taskTime = parseInt($(this).attr("id"));
    console.log(taskTime);

    // compare the current time to the task time and give the block a corresponding class 
    if (whatTimeIsIt > taskTime) {
        $(this).addClass("past")
    } else if (taskTime === whatTimeIsIt) {
        $(this).addClass("present")
    } else {
        $(this).addClass("future")
    };
});

function loadPlanner() {
    // checks to see if there is a task in local storage for each time block
    $(".hour").each(function() {
        var currHour = $(this).text();
        var currTask = localStorage.getItem(currHour);

        console.log(currTask);
        // sets the description text to the task from storage as long as a task is available 
        if(currTask !== null) {
            $(this).siblings(".description").val(currTask);
        }
    });
}

loadPlanner();