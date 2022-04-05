var tasks = {};


$("#currentDay").text("The current date is " + moment().format('MMMM Do YYYY'));

  $(".saveBtn").click(function(){
    var hour = $(this).siblings(".hour").text();
    var task = $(this).siblings(".description").val();

     localStorage.setItem(hour, task);
  });


  function loadPlanner() {

    $(".hour").each(function() {
        var currHour = $(this).text();
        var currTask = localStorage.getItem(currHour);

        console.log(currTask);

        if(currTask !== null) {
            $(this).siblings(".description").val(currTask);
        }
    });
}

var whatTimeIsIt = parseInt(moment().format('h'));
console.log(whatTimeIsIt);


$(".time-block").each(function() {
    var taskTime = parseInt($(this).attr("id"));
    console.log(taskTime);

    if (whatTimeIsIt > taskTime) {
        $(this).addClass("past")
    } else if (taskTime === whatTimeIsIt) {
        $(this).addClass("present")
    } else {
        $(this).addClass("future")
    };
});


loadPlanner();