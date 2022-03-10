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