var init = require('./initializer')
var visu = require('./visualization')

exports.criteria = function(chromosome) {
	var genes = chromosome.getGenes();
	var table = visu.showTable(chromosome);
	console.log(table)
}

var chromo = init.generate()
this.criteria(chromo)

