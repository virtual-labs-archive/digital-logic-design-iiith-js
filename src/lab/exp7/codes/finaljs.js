$(function sai() {
  var $s = simcir;
  var $simcir = $('#mySimcir');
 // var saikumar;
  var  str ;
  var getCircuitData = function() {
    return $s.controller(
        $simcir.find('.simcir-workspace') ).text();
  };
  var setCircuitData = function(data) {
    $s.setupSimcir($simcir, JSON.parse(data) );
  };
  $('#getDataBtn').click(function() {
 $('#dataArea').val(getCircuitData() );
  });
  $('#getDataBtn1').click(function() {
 $('#dataArea').val(getCircuitData() );
var saikumar=getCircuitData();
var object1=JSON.parse(saikumar);
var i=0;
var devices_names=[];
var connection_from=[];
var connection_to=[];
var devices_id=[];
var devices_label=[];
var output=object1;
for (i in output.devices) {
	devices_names[i]=output.devices[i].type;
    devices_id[i]=output.devices[i].id;
    devices_label[i]=output.devices[i].label;
}
for (i in output.connectors) {
    connection_from[i]=output.connectors[i].from;
    connection_to[i]=output.connectors[i].to;
}
/*var ssnumber = 10,
    input_digits = [];
    var f_number=ssnumber+"sai";
    sNumber = f_number.toString();
for (i = 0, len = sNumber.length; i < len; i += 1)
{
    input_digits[i]=sNumber.charAt(i);
}*/
var input_digits=[0,1];
var object_opearation={}
var label_number=0;
for(var dev_name=0;dev_name<devices_names.length;dev_name++)
{
    if(devices_names[dev_name]=="In"){
        object_opearation[devices_label[dev_name]]=input_digits[label_number];
        label_number++;
    }
}
var dev_id=[],n,dev_d_dup="";
var c=0;
for(var op=0;op<devices_names.length;op++){
for(var op1=op;op1<devices_names.length;op1++){
    if(devices_names[op]=="In"){
        dev_id[c]=devices_id[op];
        c++;
        break;
    }
}
}
for(i=0;i<=dev_id.length;i++){
n=dev_id[i]+".out0";
object_opearation[n]=input_digits[i];
}
var count=0,str1="",gate_name="";
var find_connection="ok";
var gate_output="";
var gate_final="";
var gate_values=[];
var gate_value_index=0;
for(i=0;i<devices_names.length;i++){
    for(var j=0;j<connection_to.length;j++){
        var str = JSON.stringify(object_opearation);
        if(str.includes(devices_id[i]+".out0")){
            //if(devices_id[i]+".out0"==(connection_to[j])){
                object_opearation[connection_from[j]]=object_opearation[connection_to[j]];
                for(var final=0;final<=devices_names.length;final++){
                         str = JSON.stringify(object_opearation);
                         if(str.includes(devices_id[final]+".in0") && str.includes(devices_id[final]+".in1") ){
                             gate_name=devices_names[final];
                            if(gate_name=="AND" || gate_name=="OR" || gate_name=="NAND" || gate_name=="NOR" || gate_name=="XOR" || gate_name=="XNOR"){
                                gate_output=operations(gate_name,object_opearation[devices_id[final]+".in0"],object_opearation[devices_id[final]+".in1"]);
                                object_opearation[devices_id[final]+".out0"]=gate_output;//gate_final=gate_output;
                            }
                         }
                         else if(str.includes(devices_id[final]+".in0") && devices_names[final]=="NOT"){
                             gate_output=operationNOTBUF(devices_names[final],object_opearation[devices_id[final]+".in0"]);
                             object_opearation[devices_id[final]+".out0"]=gate_output;
                         }
                }
        }
    }
}
var final_value="";
for(i=0;i<devices_names.length;i++){
    if(devices_names[i]=="Out"){
        final_value=object_opearation[devices_id[i]+".in0"];
    }
}
function operations(dev,x,y){
    var perform="";
    if(dev=="AND"){
        perform=x&y;
    }
    else if(dev=="OR"){
        perform=x|y;
    }
    else if(dev=="NAND"){
        if(x==0 && y==0){
            perform=1;
        }
        else if(x==0 && y==1){
            perform=1;
        }
        else if(x==1 && y==0){
            perform=1;
        }
        else if(x==1 && y==1){
            perform=0;
        }
    }
    else if(dev=="NOR"){
        if(x==0 && y==0){
            perform=1;
        }
        else if(x==0 && y==1){
            perform=0;
        }
        else if(x==1 && y==0){
            perform=0;
        }
        else if(x==1 && y==1){
            perform=0;
        }
    }
    else if(dev=="XOR"){
        if(x==0 && y==0){
            perform=0;
        }
        else if(x==0 && y==1){
            perform=1;
        }
        else if(x==1 && y==0){
            perform=1;
        }
        else if(x==1 && y==1){
            perform=0;
        }
    }
    else if(dev=="XNOR"){
        if(x==0 && y==0){
            perform=1;
        }
        else if(x==0 && y==1){
            perform=0;
        }
        else if(x==1 && y==0){
            perform=0;
        }
        else if(x==1 && y==1){
            perform=1;
        }
    }
    return perform;
}
function operationNOTBUF(dev,x){
    var perform1="";
    if(dev=="NOT"){
        if(x==0){
            perform1=1;
        }
        else{
            perform1=0;
        }
    }
    return perform1;
}
var op=JSON.stringify(object_opearation);
document.getElementById("demo").innerHTML=final_value;
document.getElementById("dataArea1").innerHTML=op;
  });
  $('#setDataBtn').click(function() {
    setCircuitData($('#dataArea').val() );
  });
  setCircuitData('{ "width":989, "height":1000 }');
});
function re_load(){
    location.reload();
 }