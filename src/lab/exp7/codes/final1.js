    $(function sai() {
        var $s = simcir;
        var $simcir = $('#mySimcir');
       // var saikumar;
        var  str;
        var sai;
        var getCircuitData = function() {
          return $s.controller(
              $simcir.find('.simcir-workspace') ).text();
        };
        var setCircuitData = function(data) {
          $s.setupSimcir($simcir, JSON.parse(data) );
        };
      $('#getDataBtn').click(function(){
       $('#dataArea').val(getCircuitData());
        });
      $('#getDataBtn1').click(function(){
      $('#dataArea').val(getCircuitData());
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
      var sNumber="001s",input_digits=[];
      var Number1="";
      Number1=sNumber.toString();
      for (i = 0;i<Number1.length-1;i++)
      {
          input_digits[i]=sNumber.charAt(i);
      }
      var clock_cycles=8;
      //var input_digits=[0,0]
      var clock=1;
      var object_opearation={}
      var dev_in=[],inindex=0;
      var dev_cl=[],clindex=0;
      var n="";
      for(i=0;i<devices_names.length;i++){
          var name="In"+i;
          for( var j=i;j<devices_names.length;j++){
                  if(devices_label[j]==name){
                          dev_in[inindex]=devices_id[j];
                          inindex++;
                  }
          }
      }
      for( var j=0;j<devices_names.length;j++){
                  if(devices_label[j]=="clock"){
                      dev_cl[clindex]=devices_id[j];
                      clindex++;
                  }
      }
      for(i=0;i<dev_cl.length;i++){
          n=dev_cl[i]+".out0";
          object_opearation[n]=clock;
      }
      var gate_name="";
      var gate_output="";
      var stateindex=0;
      var states_object={};
      var clock_check=0;
      for(var state=0;state<clock_cycles;state++){
          clock_check++;
      for(i=0;i<=dev_in.length;i++){
              n=dev_in[i]+".out0";
              object_opearation[n]=input_digits[i];
      }
      for(i=0;i<devices_names.length;i++){
          for(var j=0;j<connection_to.length;j++){
              var str = JSON.stringify(object_opearation);
              if(str.includes(devices_id[i]+".out0")){
                      object_opearation[connection_from[j]]=object_opearation[connection_to[j]];
                      for(var final=0;final<=devices_names.length;final++){
                               str = JSON.stringify(object_opearation);
                               if(str.includes(devices_id[final]+".in0") && str.includes(devices_id[final]+".in1") ){
                                   gate_name=devices_names[final];
                                  if(gate_name=="AND" || gate_name=="OR" || gate_name=="NAND" || gate_name=="NOR" || gate_name=="XOR" || gate_name=="XNOR"){
                                      gate_output=operations(gate_name,object_opearation[devices_id[final]+".in0"],object_opearation[devices_id[final]+".in1"]);
                                      object_opearation[devices_id[final]+".out0"]=gate_output;//gate_final=gate_output;
                                  }
                                  else if(gate_name=="D-FF"){
                                      object_opearation[devices_id[final]+".out0"]=object_opearation[devices_id[final]+".in0"];
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
      var final_value=[],x=0;
      for(i=0;i<devices_names.length;i++){
          if(devices_names[i]=="Out"){
              final_value[x]=object_opearation[devices_id[i]+".in0"];
              x++;
          }
      }
      var nextstate="";
      for(var string_v=0;string_v<final_value.length;string_v++){
      nextstate=nextstate+final_value[string_v];
      }
      for(var st=0;st<1;st++){
          states_object["state"+stateindex]=nextstate;
          stateindex++;
      }
      for(i=0;i<final_value.length;i++){
         input_digits[i]=final_value[i];
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
      var op1=JSON.stringify(states_object);
      //var op2=JSON.stringify(input);
      //document.getElementById("demo").innerHTML=op2;
      document.getElementById("dataArea1").innerHTML=op;
      document.getElementById("dataArea2").innerHTML=op1;
        });
        $('#setDataBtn').click(function() {
          setCircuitData($('#dataArea').val() );
        });
        setCircuitData('{ "width":989, "height":1000 }');
      });
      function re_load(){
          location.reload();
       }
      function inputvalues1(){
          //var x=x1.input;
          var x2=3;
          alert("entered into function");
      }