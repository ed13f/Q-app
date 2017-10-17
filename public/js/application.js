$(document).ready(function() {
  var showNewError = false;
  $("#sign-up").click(function(event){
    event.preventDefault();
    $button = $(this);
    $.ajax({
      url: $button.attr("href"),
      method: "get"
    }).done(function(response){
      $button.hide();
      $("header").append(response)
    });


  })
  $("body").delegate(".new_form", "submit", function(event){
    event.preventDefault();
    $form = $(this);
    $container = $form.closest("main")
    var singer = $("#singer_name_input").val()
    var song = $("#song_title_input").val()
    if (singer === "" || song === "") {
      if (showNewError == false){
      $("#sign-up-header").append("<p class='warning'>Input fields cannot be left blank.</p>")
      showNewError = true
      }
    } else {
      $.ajax({
        url: $form.attr("action"),
        method: "post",
        data: $form.serialize()
      }).done(function(response){
        showNewError = false
        $container.remove();
        $("#sign-up").show();
        $(".entries").append(response);
        $("header").append("<h1 id='add_message'>Added to the list</h1>")
        $('#add_message').animate({opacity: 0}, 5000, function(e) {
        })
        setTimeout(function(){
          $('#add_message').remove();
        },3000)
      })
    }
  });

  $("body").delegate("#details", "click", function(event){
    event.preventDefault();
    $button = $(this);
    $.ajax({
      url: $button.attr("href"),
      method: "get"
    }).done(function(response){
      $button.closest("#entry_option").prepend(response);
      $button.closest(".2_link_entry").addClass('display-none');
    })
  });
  $("body").delegate(".show_done", "click", function(){
    $button = $(this);
    $p = $button.closest("p")
    $container= $button.closest(".entry_container")
    $p.hide();
    $container.find(".2_link_entry").removeClass('display-none');
  })
  $("body").delegate("#edit", "click", function(event){
    event.preventDefault();
    $button = $(this)
    $container = $button.closest(".entry_container")
    $.ajax({
      url: $button.attr("href"),
      method: "get"
    }).done(function(response){
      $button.closest(".entry").hide();
      $button.closest(".entry_container").append(response);
    })
  });
  $("body").delegate("#edit_submit_button", "click", function(event){
    event.preventDefault();
    $button = $(this)
    $form = $button.closest("form")
    $.ajax({
      url: $form.attr("action"),
      method: "put",
      data: $form.serialize()
    }).done(function(response){
      $button.closest("main").hide();
      $button.closest(".entry_container").append(response);
    })
  })
  $("body").delegate("#delete", "submit", function(event){
    event.preventDefault();
    $form = $(this)
    $.ajax({
      url: $form.attr("action"),
      method: "delete"
    }).done(function(response){
      $form.closest(".entry_container").hide();
    });
  })
});