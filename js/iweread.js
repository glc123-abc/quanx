var body = $response.body;
const path1 = "/pay/memberCardSummary";
const path2 = "/pay/balance";
var path = $request.path;
$notify("path: ", path)
$console.log(path)
function modify_card() {
  let obj = JSON.parse(body);
  obj["remainCoupon"] = 99999;
  obj["expiredTime"] = 1594223999;
  obj["expired"] = 0;
  obj["remainTime"] = 1330440;
  body = JSON.stringify(obj);
}

function modify_balance() {
  let obj = JSON.parse(body);
  obj["balance"] = 200;
  obj["giftBalance"] = 100;
  obj["peerBalance"] = 100;
  body = JSON.stringify(obj);
   }
   
if (path = path1){
  modify_card();
}
if (path = path2){
  modify_balance();
}
$done(body);
