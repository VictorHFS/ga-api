function Selection() {

	function desc (a, b) {
		return b - a;		
	}
	this.select(classified, qntd) {
		var selected = []
		return classified.sort(desc).split(0, qntd+1);
	}
}