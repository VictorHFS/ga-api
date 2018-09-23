var gn = require('../core/chromosome')
var nb = require('../util/number');

function generateGene() {
	var x = nb.getRandomInt(0,8);
	var y = nb.getRandomInt(0,8);
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