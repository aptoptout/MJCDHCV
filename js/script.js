var getButton;


$(window).resize(function(){

  $(".bullet-note").each(function(){
    var colWidth  = $(".column-two").width();
    $("<style>.bullet-note:before { width: " + colWidth + "px; }</style>" ).appendTo(this);
  });

  $(".bullet-sub").each(function(){
    var colWidth = $(".column-two").width();
    $("<style>.bullet-sub:before { width: " + colWidth + "px; }</style>" ).appendTo(this);
  });

  $("h3").each(function(){
    noteHeight(this);
  });

  $("#computerskills .bullet-subs").each(function(){
    subHeight(this);
  });

});

$(document).ready(function(){

  checkWindow();

  $('div.sectionSpacer').each(function(){
    getRelPos(this);
  });

  $(".bullet-note").each(function(){
    var colWidth  = $(".column-two").width();
    $("<style>.bullet-note:before { width: " + colWidth + "px; }</style>" ).appendTo(this);
  });

  $(".bullet-sub").each(function(){
    var colWidth = $(".column-two").width();
    $("<style>.bullet-sub:before { width: " + colWidth + "px; }</style>" ).appendTo(this);
  });

  $("h3").each(function(){
    noteHeight(this);
  });

  $("#computerskills .bullet-subs").each(function(){
    subHeight(this);
  });

  $(window).scroll(function(){
    $('div.sectionSpacer').each(function(){
      getRelPos(this);
    });
  });

  $("a.button").click(function(){
    getButton = $(this);

    $("a.button").each(function(){
      if($(this)!= getButton){
        $(this).removeClass('activechapter');
      }
    });
  });

  $(".print").click(function(){
    window.print();
  });

  var widthColThre = $(".column-three").width();
  $("div.hideContainer").css('width', widthColThre);

  $("h3[data-content='full name']").mouseenter(function(){
    $("div.hideContainer").addClass("showContainer");
  });
  $("h3[data-content='full name']").mouseleave(function(){
    $("div.hideContainer").removeClass("showContainer");
  });

});

function noteHeight(i){

  var i = $(i);

  var subj = i.attr('data-content');
  var subjTop = i.offset().top;
  var subjHeight = i.height();

  var colLeft = $(".column-two").offset().left;
  var colRight = colLeft + colWidth;
  var colWidth = $(".column-two").width();

  // console.log(subj, subjHeight);

  var getThisDiv = $(".side-note[data-content='" + subj + "']");
  getThisDiv.css({"top": subjTop, "height": subjHeight, "width": colWidth});

  $("<style>.side-note:after { width: " + colWidth + "px; }</style>" ).appendTo( getThisDiv );

}

function subHeight(i){

  var i = $(i);

  var subj = i.attr('data-content');
  var subjTop = i.offset().top;
  var subjHeight = i.height();

  var colLeft = $(".column-two").offset().left;
  var colRight = colLeft + colWidth;
  var colWidth = $(".column-two").width();

  // console.log(subj, subjHeight);

  var getThisDiv = $(".sub-note[data-content='" + subj + "']");
  getThisDiv.css({"top": subjTop, "height": subjHeight, "width": colWidth});

  $("<style>.sub-note:after { width: " + colWidth + "px; }</style>" ).appendTo( getThisDiv );

}

function subHeight(i){

  var i = $(i);

  var subj = i.attr('data-content');
  var subjTop = i.offset().top;
  var subjHeight = i.height();

  var colLeft = $(".column-two").offset().left;
  var colRight = colLeft + colWidth;
  var colWidth = $(".column-two").width();

  // console.log(subj, subjHeight);

  var getThisDiv = $(".sub-note[data-content='" + subj + "']");
  getThisDiv.css({"top": subjTop, "height": subjHeight, "width": colWidth});

  $("<style>.sub-note:after { width: " + colWidth + "px; }</style>" ).appendTo( getThisDiv );

}

function getRelPos(i) {
  var i = $(i);

  var windowHeight = $(window).height();
  var trigger = windowHeight/5;

  var eTop = i.offset().top;
  var eHeight = i.next().height();

  var curscrollTop = $(window).scrollTop();

  var relTopPos = eTop - $(window).scrollTop();
  var relBotPos = (eTop + eHeight) - $(window).scrollTop();

  if(relTopPos < trigger && relBotPos > 0){
    var currentSection = i.attr('id');
    
    getButton = $("a.button[href='#" + currentSection + "']");
    getButton.addClass('activechapter');

    if(getButton.prev().hasClass('activechapter')){
      getButton.prev().removeClass('activechapter');
    } else if(getButton.next().hasClass('activechapter')){
      getButton.next().removeClass('activechapter');
    } 
  }

  return getButton;
}

function checkWindow(){
  windowWidth = $(window).width();
  // console.log(windowWidth);

  if(windowWidth < 1280 && windowWidth > 800){
    $("h3[data-content='higher education']").attr("data-content", "higher edu.");
    $(".side-note[data-content='higher education']").attr("data-content", "higher edu.");

    $("h3[data-content='vocational education']").attr("data-content", "vocational edu.");
    $(".side-note[data-content='vocational education']").attr("data-content", "vocational edu.");

    $("h3[data-content='secondary education']").attr("data-content", "secondary edu.");
    $(".side-note[data-content='secondary education']").attr("data-content", "secondary edu.");

    $("h3[data-content='primary education']").attr("data-content", "primary edu.");
    $(".side-note[data-content='primary education']").attr("data-content", "primary edu.");

    $("h3[data-content='architecture studio']").attr("data-content", "archit. studio");
    $(".side-note[data-content='architecture studio']").attr("data-content", "archit. studio");

    $("h3[data-content='communication studio']").attr("data-content", "commu. studio");
    $(".side-note[data-content='communication studio']").attr("data-content", "commu. studio");

    $("h3[data-content='basic communication']").attr("data-content", "basic commu.");
    $(".side-note[data-content='basic communication']").attr("data-content", "basic commu.");

  } else if(windowWidth == 414 && windowWidth > 375){
    $("h3[data-content='maritial status']").attr("data-content", "mari. status");
    $(".side-note[data-content='maritial status']").attr("data-content", "mari. status");

    $("h3[data-content='higher education']").attr("data-content", "higher edu.");
    $(".side-note[data-content='higher education']").attr("data-content", "higher edu.");

    $("h3[data-content='vocational education']").attr("data-content", "vocatio. edu.");
    $(".side-note[data-content='vocational education']").attr("data-content", "vocatio. edu.");

    $("h3[data-content='secondary education']").attr("data-content", "secondary edu.");
    $(".side-note[data-content='secondary education']").attr("data-content", "secondary edu.");

    $("h3[data-content='primary education']").attr("data-content", "primary edu.");
    $(".side-note[data-content='primary education']").attr("data-content", "primary edu.");

    $("h3[data-content='architecture studio']").attr("data-content", "archit. studio");
    $(".side-note[data-content='architecture studio']").attr("data-content", "archit. studio");

    $("h3[data-content='communication studio']").attr("data-content", "commu. studio");
    $(".side-note[data-content='communication studio']").attr("data-content", "commu. studio");

    $("h3[data-content='bachelor thesis']").attr("data-content", "thesis");
    $(".side-note[data-content='bachelor thesis']").attr("data-content", "thesis");

    $(".bullet-subs[data-content='scripts and languages']").attr("data-content", "languages");
    $(".sub-note[data-content='scripts and languages']").attr("data-content", "languages");

    $(".bullet-subs[data-content='microsoft office']").attr("data-content", "ms office");
    $(".sub-note[data-content='microsoft office']").attr("data-content", "ms office");

    $(".bullet-subs[data-content='operating systems']").attr("data-content", "OS");
    $(".sub-note[data-content='operating systems']").attr("data-content", "OS");

    $("h3[data-content='highly proficient']").attr("data-content", "highly profic.");
    $(".side-note[data-content='highly proficient']").attr("data-content", "highly profic.");

    $("h3[data-content='basic communication']").attr("data-content", "basic commu.");
    $(".side-note[data-content='basic communication']").attr("data-content", "basic commu.");
  } else if(windowWidth <= 375){
    $("h3[data-content='maritial status']").attr("data-content", "mari. status");
    $(".side-note[data-content='maritial status']").attr("data-content", "mari. status");

    $("h3[data-content='higher education']").attr("data-content", "higher edu.");
    $(".side-note[data-content='higher education']").attr("data-content", "higher edu.");

    $("h3[data-content='vocational education']").attr("data-content", "voc. edu.");
    $(".side-note[data-content='vocational education']").attr("data-content", "voc. edu.");

    $("h3[data-content='secondary education']").attr("data-content", "second. edu.");
    $(".side-note[data-content='secondary education']").attr("data-content", "second. edu.");

    $("h3[data-content='primary education']").attr("data-content", "primary edu.");
    $(".side-note[data-content='primary education']").attr("data-content", "primary edu.");

    $("h3[data-content='graphic design']").attr("data-content", "graphic d.");
    $(".side-note[data-content='graphic design']").attr("data-content", "graphic d.");

    $("h3[data-content='architecture studio']").attr("data-content", "studio");
    $(".side-note[data-content='architecture studio']").attr("data-content", "studio");

    $("h3[data-content='communication studio']").attr("data-content", "comm. studio");
    $(".side-note[data-content='communication studio']").attr("data-content", "comm. studio");

    $("h3[data-content='bachelor thesis']").attr("data-content", "thesis");
    $(".side-note[data-content='bachelor thesis']").attr("data-content", "thesis");

    $(".bullet-subs[data-content='adobe software']").attr("data-content", "adobe");
    $(".sub-note[data-content='adobe software']").attr("data-content", "adobe");

    $(".bullet-subs[data-content='maxon software']").attr("data-content", "maxon");
    $(".sub-note[data-content='maxon software']").attr("data-content", "maxon");

    $(".bullet-subs[data-content='apple software']").attr("data-content", "apple");
    $(".sub-note[data-content='apple software']").attr("data-content", "apple");

    $(".bullet-subs[data-content='scripts and languages']").attr("data-content", "languages");
    $(".sub-note[data-content='scripts and languages']").attr("data-content", "languages");

    $(".bullet-subs[data-content='microsoft office']").attr("data-content", "ms office");
    $(".sub-note[data-content='microsoft office']").attr("data-content", "ms office");

    $(".bullet-subs[data-content='other software']").attr("data-content", "other");
    $(".sub-note[data-content='other software']").attr("data-content", "other");

    $(".bullet-subs[data-content='operating systems']").attr("data-content", "OS");
    $(".sub-note[data-content='operating systems']").attr("data-content", "OS");

    $("h3[data-content='native speaker']").attr("data-content", "native");
    $(".side-note[data-content='native speaker']").attr("data-content", "native");

    $("h3[data-content='highly proficient']").attr("data-content", "h. profi.");
    $(".side-note[data-content='highly proficient']").attr("data-content", "h. profi.");

    $("h3[data-content='basic communication']").attr("data-content", "basic commu.");
    $(".side-note[data-content='basic communication']").attr("data-content", "basic commu.");
  }
}