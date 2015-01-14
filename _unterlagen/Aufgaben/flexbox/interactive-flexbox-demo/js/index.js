$("#control h1").click(function(){
  $("#controls").slideToggle("fast");
})

$("#flexvariants button").click(function(){
  var flextarget = $(this).data("flextarget");
  var btntarget = $(this).data("btntarget");
  var addclass = $(this).data("addclass");
  var info = $(this).data("info");

  $("."+flextarget).removeClass("as-column as-row switchposition1").addClass(addclass);
  $(this).siblings().removeClass("active").end().addClass("active");
  printInfo(info);
});

$("#screenwidths button").click(function(){
  var screenwidth = $(this).data("screenwidth");
  var info = $(this).data("info");

  $("#wrapper").removeClass().addClass(screenwidth);
  console.log("info - erstes Vorkommen: " + info);
  printInfo(info);
});	


function printInfo(info) {
	
	console.log("info - zweites Vorkommen: "+info);
	var infotext = "";
		
	if (info == "col1") {
		infotext = 'All primary teasers are set in a column, using <code>flex-direction: column;</code>. The order is the standard, means by source order.  '; 
	} else if (info == "col2") {
		infotext = 'All primary teasers are set in a column, using <code>flex-direction: column;</code>. The order is set to <code>flex-direction: column-reverse</code>, which means source order turned upside down.';
	} else if (info == "col3") {
		infotext = 'All secondary teasers are set in a columns, using <code>flex-direction: column;</code>. The order is the standard, means by source order.  ';
	} else if (info == "row1") {
		infotext = 'All primary teasers are set in a row, using <code>flex-direction: row</code>, which is standard. So you don\'t have to set it until you reset a different value of this property.';
	} else if (info == "row2") {
	  infotext = 'All primary teasers are set in a row, using <code>flex-direction: row;</code>. The order is set to <code>flex-direction: row-reverse</code>, which means source order turned upside down.';
	} else if (info == "row3") {
		infotext = 'All secondary teasers are set in a row, using <code>flex-direction: row</code>, which is standard. So you don\'t have to set it until you reset a different value of this property.';
	} else if (info == "w400") {
    infotext = 'Width is set to 400px. <code>flex-direction: row;</code> seems useless with this much content.';
  } else if (info == "w620") {
    infotext = 'For demonstration purposes the wrapper-container is now 620px wide.';
  } else if (info == "w740") {
    infotext = 'For demonstration purposes the wrapper-container is now 740px wide.';
  } else if (info == "w1000") {
    infotext = 'For demonstration purposes the wrapper-container is now 1000px wide.';
  } else if (info == "w1200") {
    infotext = 'For demonstration purposes the wrapper-container is now 1200px wide.';
  }
	
	$(".intro").next(".info").remove();
	$(".intro").after('<div class="info"><p>'+infotext+'</p>');
}

