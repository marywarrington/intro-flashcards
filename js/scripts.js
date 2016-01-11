jQuery(document).ready(function(){

  // $(".flashcard").click(function(){
  //   $("#word").toggle();
  //   $("#definition").toggle();
  // })

  $(".flashcard").click(function(){

    $(this).find(".word").toggle();
    $(this).find(".description").toggle();

    // $("this.word").toggle();
    // $("this.definition").toggle();

  });
});
