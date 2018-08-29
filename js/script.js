$(document).ready(function() {
  $(".item").hide();
  $("#logo").fadeIn(600);
  $(".text").fadeIn(700);
  $("#insta").fadeIn(800);
  $("#follow").fadeIn(900);
  $(".a").fadeIn(800);
  $(".b").fadeIn(825);
  $(".c").fadeIn(850);
  $(".d").fadeIn(875);

  function count(amount, label) {
    var n = {"amount": amount, "label": label}
    $.ajax({
      data: n,
      dataType: "json",
      url: "../py/count.py",
      success: function(result, status, xhr) {
        console.log(result);
      },
      error: function(xhr, status, error) {
        console.log(error);
        console.log(status);
      }
    })
  }

  $("#a").click(function() {
    count(5, "bf post");
  })

  $("#b").click(function() {
    count(10, "bf highlight");
  })

  $("#c").click(function() {
    count(10, "promo1");
  })

  $("#d").click(function() {
    count(15, "promo2");
  })

  $(document).bind("mobileinit", function() {
    $.mobile.ajaxEnabled = false;
  })
})
