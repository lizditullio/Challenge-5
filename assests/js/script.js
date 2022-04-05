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
        var currPlan = localStorage.getItem(currHour);

        console.log(this);
        console.log(currHour);

        if(currPlan !== null) {
            $(this).siblings(".plan").val(currPlan);
        }
    });
};

loadPlanner();

