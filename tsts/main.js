////solicitud mediante HTTP con  un fetch  en async await
//function obtData(){
//    const response = await fetch ("http://localhost:63342/JSON/JSON.json");
//    const json = await response.text();
//    console.log(json)
//    console.log(JSON.parse(json)); ////
//    console.log(JSON.stringify(json));
//    console.log(JSON(json.alert))
//
//
//
//obtData();


//:( #!@#$%^&*^%

//function data(){
//    const x = `{
//            "status": true
//               }`;
//               }

//$(function(){
//window.setInterval(function(){
//datas()
//},1000)

//}
//});


//function datas(){
//$.ajax({
//url:"http://localhost:63342/JSON/JSON.json",
//type:"GET",
//dataType: "json",
//success: function(data){
//    $(alert).replaceWith(data)
//}
//
//});

//@$%^&^%$#@
//

//    function funct_ajax_get_json()
//    {
//        var info;
//        if (window.XMLHttpRequest){
//            info = new XMLHttpRequest();
//
//        }
//        else{
//         info = new ActiveXObject("Microsoft.XMLHTTP");
//       }
//       info.onreadystatechange = function(){
//            if(info.readyState === 4 && info.status === 200){
//                var data = JSON.parse(info.responseText);
//                console.log(data);
//
//
//
//           }
//       }
//       info.open("GET", "JSON.json", true);
//       info.send();
//     }

var alert = '{"alert": true }';
var valueAlert = JSON.parse(alert);
document.write(typeof personaJSON);
var stringJSON = JSON.stringify(valueAlert);

document.write(typeof stringJSON)

