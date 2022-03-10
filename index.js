const app = require('./application')
const port = process.env.PORT || 5000

app.listen(5000, () =>{
	console.log(`Start on port ${port}`)
})