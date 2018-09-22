function Evolution(selection, classification, crossover, mutation) {
 	
 	var selection = selection;
 	var classification = classification;
 	var crossover = crossover;
 	var mutation = mutation;

	this.next = function(chromossome) {
		chromossome = classification.classify(chromossome)
		chromossome = selection.select(chromossome)
		chromossome = crossover.cross(chromossome)
		chromossome = mutation.mutate(chromossome)
		return chromossome;
	}
}