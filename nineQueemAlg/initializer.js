var gn = require('../core/chromosome')
var nb = require('../util/number');

function generateGene() {
	var x = nb.getRandomInt(1,9);
	var y = nb.getRandomInt(1,9);
	return {
		x:x,
		y:y
	}
}

var generateNineQueenGenes = function() {
	genes = [];
	n = 8;
	while(n>0) {
		--n;
		genes.push(generateGene());
	}
	return genes;
}

exports.generate = function() {
	var chromo = gn.createChromosome();
	generateNineQueenGenes().forEach(gene => {
		chromo.addGene(gene);
	})
	return chromo;
}


console.log(this.generate())
console.log(this.generate().getGenes())