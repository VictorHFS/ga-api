function Classifier(criteria) {
	var criteria = criteria;
	this.classify = function(chromosomes) {
		var classified = [];
		chromosomes.forEach(chromo => {
			var grade = criteria(chromo);
			classified.append({chromo, grade});
		});
		return classified;
	}
}