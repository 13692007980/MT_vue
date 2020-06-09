const data = require('./data/data.json')
const business = data.business
const IndexesCity = data.IndexesCity
const ification = data.ification
const allIfication = data.allIfication

module.exports = {
    configureWebpack: {
        devServer: {
            before(app){
                app.get('/api/business',function(req,res){
                    res.json({ data: business });
                });
                app.get('/api/IndexesCity',function(req,res){
                    res.json({ data: IndexesCity });
                });
                app.get('/api/ification',function(req,res){
                    res.json({ data: ification });
                });
                app.get('/api/allIfication',function(req,res){
                    res.json({ data: allIfication });
                });
            },
            proxy: {
                "/dg": {
                    target: "http://mobilecdnbj.kugou.com/api/",
                    changeOrigin: true,
                    pathRewrite: { "^/dg": "" }
                }
            }
        }
        
    }
}