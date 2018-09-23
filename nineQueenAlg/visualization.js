$(document)
.ready(function(){

	function createTable() {
		var light = true;
		for (var line = 8; line >= 1; line--) {
			for (var column = 8; column >= 1; column--) {
				var color = (light) ? 'light' : 'dark';
				var id = String(line)+':'+String(column);
				$('.board').append('<div class="square-board '+color+' id="'+id+'">'+id+'</div>')			
				light = !light;
			}
			light = !light
		}
	}

	createTable()
})