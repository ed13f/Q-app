$(document).ready(function() {
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
  $("body").delegate("#new_form", "submit", function(event){
    event.preventDefault();
    $form = $(this);
    $container = $form.closest("main")
    $.ajax({
      url: $form.attr("action"),
      method: "post",
      data: $form.serialize()
    }).done(function(response){
      $container.hide();
      $("#sign-up").show();
      $(".entries").append(response);
    })
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