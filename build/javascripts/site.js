$(".faq-q").click( function () {
  var container = $(this).parents(".faq-c");
  var answer = container.find(".faq-a");
  var trigger = container.find(".faq-t");

  answer.slideToggle(200);

  if (trigger.hasClass("faq-o")) {
    trigger.removeClass("faq-o");
  }
  else {
    trigger.addClass("faq-o");
  }
});
$(document).ready(function() {
  var n = '#nav', no = 'nav-open';
  $('.nav-menu').click(function() {
    if ($(n).hasClass(no)) {
      //$(n).removeClass(no);
      $(n).animate({height:0},300);
      setTimeout(function(){
        $(n).removeClass(no).removeAttr('style');
      },320);
    }
    else {
      var newH = $(n).css('height','auto').height();
      $(n).height(0).animate({height:newH},300);
      setTimeout(function(){
        $(n).addClass(no).removeAttr('style');
      },320);
    }
  });
});
$(".js-vertical-tab-content").hide();
$(".js-vertical-tab-content:first").show();

/* if in tab mode */

$(".js-vertical-tab").click(function(event) {
  event.preventDefault();

  $(".js-vertical-tab-content").hide();
  var activeTab = $(this).attr("rel");
  $("#"+activeTab).show();

  $(".js-vertical-tab").removeClass("is-active");
  $(this).addClass("is-active");

  $(".js-vertical-tab-accordion-heading").removeClass("is-active");
  $(".js-vertical-tab-accordion-heading[rel^='"+activeTab+"']").addClass("is-active");
});

/* if in accordion mode */

$(".js-vertical-tab-accordion-heading").click(function(event) {
  event.preventDefault();

  $(".js-vertical-tab-content").hide();
  var accordion_activeTab = $(this).attr("rel");
  $("#"+accordion_activeTab).show();

  $(".js-vertical-tab-accordion-heading").removeClass("is-active");
  $(this).addClass("is-active");

  $(".js-vertical-tab").removeClass("is-active");
  $(".js-vertical-tab[rel^='"+accordion_activeTab+"']").addClass("is-active");
});




