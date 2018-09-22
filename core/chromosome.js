exports.createChromosome = function(){
	var genes = []
	var addGene = function(gene) {
		genes.push(gene);
	}
	var getGenes = function() {
		return genes;
	}
	return {
		addGene: addGene,
		getGenes: getGenes
	}
}