jQuery(document).ready(function(){

  $(".flashcard").click(function(){

    $(this).find(".word").toggle();
    $(this).find(".description").toggle();

  });
});
