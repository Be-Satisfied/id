$(function () {
  $(".talk-from-selector").on("click", "li", function () {
    var from = $(this).text();
    $(".talkfromSelected").removeClass("talkfromSelected");
    $(this).addClass("talkfromSelected");

    $(".collection-grid-talking-aboutus").addClass("hide");
    $("#talking-aboutus-" + from).removeClass("hide");
  });

  $(".faq-selector").on("click", "li", function () {
    var from = $(this).text();
    if (from === "Troubleshooting") {
      from = "Function_Feature";
    }

    if (from === "DPN") {
      from = "DPN";
    }

    if (from === "Charges and Fees") {
      from = "Charges_and_Fees";
    }

    if (from === "Security Concerns") {
      from = "Security_Concerns";
    }

    $(".faqSelected").removeClass("faqSelected");
    $(this).addClass("faqSelected");
    $(".faq-grid div").css("display", "none");
    $("#faq-" + from).css("display", "block");
  });

  $(".faq-grid li h3").on("click", function () {
    $(this).parent().find("p").fadeToggle("slow");
    $(this).toggleClass("showed");
    // $(this).find('p').fadeToggle("slow");
  });

  $(".deeper-faq-grid li h3").on("click", function () {
    $(this).parent().find(".content").fadeToggle("slow");
    $(this).toggleClass("showed");
    // $(this).find('p').fadeToggle("slow");
  });

  $(".product-faq__selector").on("click", "li", function () {
    var from = $(this).text();
    if (from === "Troubleshooting") {
      from = "Function_Feature";
    }

    if (from === "DPN") {
      from = "DPN";
    }

    if (from === "Charges and Fees") {
      from = "Charges_and_Fees";
    }

    if (from === "Security Concerns") {
      from = "Security_Concerns";
    }

    $(".selected").removeClass("selected");
    $(this).addClass("selected");
    $(".product-faq__grid div").css("display", "none");
    $("#faq-" + from).css("display", "block");
  });

  $(".product-faq__grid li h3").on("click", function () {
    $(this).parent().find("p").fadeToggle("slow");
    $(this).toggleClass("showed");
    // $(this).find('p').fadeToggle("slow");
  });
});

function toggleContent(toggleLinkId, contentToManipulateClass) {
  var $toggleLink = $("#" + toggleLinkId);
  var $contentToManipulate = $("." + contentToManipulateClass);
  if ($toggleLink.length > 0 && $contentToManipulate.length > 0) {
    $toggleLink.click(function (e) {
      e.preventDefault(); // 阻止默认动作，比如链接的跳转
      $toggleLink.fadeOut(function () {
        $contentToManipulate.fadeIn();
      });
    });
  }
}
toggleContent(
  "why-did-the-ads-filter-not-work-learn-more",
  "why-did-the-ads-filter-not-work-more"
);
toggleContent(
  "why-am-i-still-using-the-real-ip-learn-more",
  "why-am-i-still-using-the-real-ip-more"
);
toggleContent(
  "cybersecurity-risks-to-bandwidth-providers-learn-more",
  "cybersecurity-risks-to-bandwidth-providers-more"
);
toggleContent(
  "what-are-the-notable-differences-in-user-experience-between-dpn-and-vpn-learn-more",
  "what-are-the-notable-differences-in-user-experience-between-dpn-and-vpn-more"
);

toggleContent(
  "deeper-features-apps-relocator-learn-more",
  "deeper-features-apps-relocator-more"
);
toggleContent(
  "geo-unlock-solution-video-learn-more",
  "geo-unlock-solution-video-more"
);
