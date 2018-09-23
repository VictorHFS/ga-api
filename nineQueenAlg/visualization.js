function createTable(genes) {
	var table = document.createElement('TABLE');
	genes.forEach(gene => {
		var row = table.insetRow(gene.x);
		var cell = row.insertCell(gene.y);
		cell.innerHTML = gene;
	})
	return table
}

exports.showTable = function(chromosome){
	var table = createTable(genes);
	var genes =chromosome.getGenes();
	$('body').innerHTML(table)
	return table;
}


var chromo = init.generate()
var table = this.showTable(chromo);