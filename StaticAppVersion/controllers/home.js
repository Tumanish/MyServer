module.exports.start = (req,res) => {
	res.render('start', { title: 'Start' })
}

module.exports.home = (req,res) => {
	res.render('home', { title: 'Home' })
}

module.exports.test = (req,res) => {
	res.render('test', { title: 'Test', message: " try hard"})
}