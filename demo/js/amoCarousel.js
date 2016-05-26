function Carousel(obj) {
  this.delaytime = obj.delaytime;
  this.start = function() {
	var delaytime = this.delaytime;
	var total = $(".carousel img").length;
	$(".carousel img").each(function (index){
		if (index == 0) {
			$(this).css("position", "relative")
			$(this).animate({"z-index":"1"}, 0).delay(delaytime).animate({"z-index":"-1"}, 0);
		} else {
			if (index < (total -1)) 
			{
				$(this).delay(delaytime * index).animate({"z-index":"1"}, 0).delay(delaytime).animate({"z-index":"-1"}, 0);
			} else {
				$(this).delay(delaytime * index).animate({"z-index":"1"}, 0);
			}	
		}		
	
	});
  }

}
