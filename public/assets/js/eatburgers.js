$(function() {
  // if the devoured button (uneaten-li-btn) was clicked,
  // change it to eaten in the database and on the website.
  $(".uneaten-li-btn").on("click", function(event) {
    console.log("uneaten-li-btn clicked");
    const id = $(this).data("id");
    
    const devouredTrue = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredTrue
    }).then(
      function() {
        console.log(`Burger #${id} has been DEVOURED!  It was delicious. :)`);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


    $(".new-burger-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const newBurger = {
      new_burger: $("#burg").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log(`New ${newBurger.new_burger} created. Can't wait to taste it!`);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
