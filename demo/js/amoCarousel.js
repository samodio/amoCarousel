function Carousel(obj) {
	this.delaytime = obj.delaytime;
	this.total = $("#carousel img").length;
	var index;
	self = this;

    this.start = function() {
		var delaytime = this.delaytime;
		$("#caro-back, #caro-forward").hide();
		$("#carousel img").each(function (index){
			self.index = index;
			if (index == 0) {
				$(this).css("position", "relative")
				$(this).animate({"z-index":"1"}, 0).delay(delaytime).animate({"z-index":"-1"}, 0);
			} else {
				if (index < (self.total -1)) 
				{
					$(this).delay(delaytime * index).animate({"z-index":"1"}, 0).delay(delaytime).animate({"z-index":"-1"}, 0);
				} else {
					$(this).delay(delaytime * index).animate({"z-index":"1"}, 0);
				}	
			}		
		});
		$("#caro-back").delay(delaytime * self.total).show(30).click(function() {
				self.back();
		});
		$("#caro-forward").delay(delaytime * self.total).click(function() {
				self.forward();
		});	
    }

	this.back = function() {
	  	if (this.index > 0) {
	  		  	var elem = $("#carousel img").get(this.index--);
	  		  	$(elem).animate({"z-index":"-1"}, 0);
	  		  	elem = $("#carousel img").get(this.index);
	  		  	$(elem).animate({"z-index":"1"}, 0);
	  	}
	  	if (this.index < this.total) {
	  		$("#caro-forward").show(30);
	  	} 
	  	if (this.index == 0) {
	  		$("#caro-back").hide(30);
	  	}
	}

  this.forward = function() {
	  	if (this.index < this.total) {
	  		  	var elem = $("#carousel img").get(this.index++);
	  		  	$(elem).animate({"z-index":"-1"}, 0);
	  		  	elem = $("#carousel img").get(this.index);
	  		  	$(elem).animate({"z-index":"1"}, 0);
	  	}
	  	if (this.index > 0) {
	  		$("#caro-back").show(30);
	  	} else if (this.index == this.total -1) {
	  		$("#caro-forward").hide(30);
	  	}
  }
  return self;
}
