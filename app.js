
/*loading mongodb*/    
var mongojs = require("mongojs")
var db = mongojs("mongodb://guest:guest@ds027751.mongolab.com:27751/flat_btc_basicincome_co");   




var subscribe = require('./subscribe')
subscribe.connect(db)



var basicincome_co = require('./basicincome_co')
basicincome_co.connect(db, dividend_algorithm)



var algorithm = require("./dividend_algorithm")

function dividend_algorithm(account_id){
    algorithm.API(db, account_id, send_client)
function send_client(payment){
    basicincome_co.send_client(payment, account_id)
}
}
