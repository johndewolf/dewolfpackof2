$( document ).ready(function() {

	$(".weddingPartyMember").on("click", function() {
		var party = $(this).parents().eq(5)[0];
		var active = party.getElementsByClassName("active");
		var featImage = $("#" + party.id + "Feature").children()[0]
		var imageParent = this;
		$(featImage).fadeOut("fast", function() {
			$("#" + party.id + "Feature").empty();
			$("#" + party.id + "Feature").append("<img src='img/"+$(imageParent).parent()[0].id+".jpg' />");
		});



		for (var x = 0; x < active.length + 1; x++) {
			$(active[0]).removeClass("active");
		}
		$(this).addClass("active");
		$(this).siblings().addClass("active");


	});
});
