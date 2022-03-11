let fs =require('fs-extra')
const path = require('path')


async function loadLuFile() {
	let fileContent = await fs.readFile(path.join(__dirname,'../','../','readme.txt'),'utf8')
	return fileContent
}



module.exports.about = async (req,res)=>{
	await loadLuFile().then(
		(result)=>{
		res.render('about', { title: 'About', message: result })
		}
	)
}

module.exports.sudoku = async (req,res)=>{
	let field = '0681594327597283416342671589934157268278936145156842973729318654813465792465729831';
	let arr = Array(1,2,3,4,5,6,7,8,9);
	let result = [];
	let solve = [];
	for (var j=0;j<9;j++){
		arr.push(arr.splice((Math.random() * arr.length), 1));
	}
	for (var i=1;i<82;i++) {
			// true/false
		if ((Math.random()*10>5)) { 
			solve.push(isArr((arr[field.substr(i,1)-1])))
			result.push(isArr((arr[field.substr(i,1)-1]))) 
		} else { 
			solve.push(isArr((arr[field.substr(i,1)-1])))
			result.push(false);
		}
	}

	function isArr(obj) {
		if(Array.isArray(obj)){
			return isArr(obj[0]);
		}
		else{
			return obj;
		}
	}

	res.render('sudoku', { title: 'Sudoku', message: "Generate OK", data: result, solve: solve })
}