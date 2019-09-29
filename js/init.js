//  collapsible navbar close after clic

$(document).on("click", function() {
	$(".collapse").collapse("hide");
});

//  Masonry with isotope and imagesLoaded

var $grid = $(".grid").imagesLoaded(function() {
	$grid.isotope({
		itemSelector: ".grid-item",
		percentPosition: true,
		masonry: {
			columnWidth: ".grid-sizer"
		}
	});
});

//  portfolio filter with isotope

var filterFns = {};
// bind filter button click
$("#filters").on("click", ".filbutton", function() {
	var filterValue = $(this).attr("data-filter");
	// use filterFn if matches value
	filterValue = filterFns[filterValue] || filterValue;
	$grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$(".filtro").each(function(i, buttonGroup) {
	var $buttonGroup = $(buttonGroup);
	$buttonGroup.on("click", ".filbutton", function() {
		$buttonGroup.find(".is-checked").removeClass("is-checked");
		$(this).addClass("is-checked");
	});
});
