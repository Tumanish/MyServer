module.exports.start = (req,res) => {
	res.status(200).json({messge:" It's Start-page!"})
}

module.exports.home = (req,res) => {
	res.status(200).json({messge:" It's Home-page!"})
}

module.exports.test = (req,res) => {
	res.status(200).json({messge:" It's Test-page!"})
}