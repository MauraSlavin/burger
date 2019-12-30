$(function() {
  // if the devoured button (uneaten-li-btn) was clicked,
  // change it to eaten in the database and on the website.
  $(".uneaten-li-btn").on("click", function(event) {
    console.log("uneaten-li-btn clicked");
    const id = $(this).data("id");
    
    const makeDevouredTrue = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: makeDevouredTrue
    }).then(
      function() {
        console.log(`Burger #${id} has been DEVOURED!  It was delicious. :)`);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
