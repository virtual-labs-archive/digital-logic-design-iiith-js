var x=$(".simcir_outer_div").width();
x=x*1.08;
if(sessionStorage.getItem("SISO"))
{
	var counter={
		"width":989,
		"height":1000,
		"showToolbox":true,
		"toolbox":[
		  {"type":"In"},
		  {"type":"Out"},
		  {"type":"Joint"},
		  {"type":"DC"},
		  {"type":"LED"},
		  {"type":"PushOff"},
		  {"type":"PushOn"},
		  {"type":"Toggle"},
		  {"type":"BUF"},
		  {"type":"NOT"},
		  {"type":"AND"},
		  {"type":"NAND"},
		  {"type":"OR"},
		  {"type":"NOR"},
		  {"type":"XOR"},
		  {"type":"XNOR"},
		  {"type":"OSC"},
		  {"type":"RS-FF"},
		  {"type":"JK-FF"},
		  {"type":"T-FF"},
		  {"type":"D-FF-custom"},
		  {"type":"DSO"}
		],
		"devices":[
			{"type":"DC","id":"dev0","x":48,"y":264,"label":"DC"},
			{"type":"Toggle","id":"dev1","x":104,"y":264,"label":"Toggle","state":{"on":true}},
			{"type":"OSC","id":"dev2","x":88,"y":352,"label":"OSC"},
			{"type":"D-FF","id":"dev3","x":160,"y":272,"label":"D-1"},
			{"type":"Joint","id":"dev4","x":144,"y":360,"label":"Joint","state":{"direction":0}},
			{"type":"D-FF","id":"dev5","x":272,"y":272,"label":"D2"},
			{"type":"Joint","id":"dev6","x":256,"y":360,"label":"Joint","state":{"direction":0}},
			{"type":"D-FF","id":"dev7","x":392,"y":272,"label":"D-3"},
			{"type":"Joint","id":"dev8","x":376,"y":360,"label":"Joint","state":{"direction":0}},
			{"type":"D-FF","id":"dev9","x":504,"y":272,"label":"D-4"},
			{"type":"Joint","id":"dev10","x":488,"y":360,"label":"Joint","state":{"direction":0}},
			{"type":"DSO","id":"dev11","x":608,"y":272,"label":"DSO","state":{"playing":true,"rangeIndex":3}},
			{"type":"Joint","id":"dev12","x":552,"y":328,"label":"Joint","state":{"direction":0}}
		  ],
		  "connectors":[
			{"from":"dev1.in0","to":"dev0.out0"},
			{"from":"dev3.in0","to":"dev1.out0"},
			{"from":"dev3.in1","to":"dev4.out0"},
			{"from":"dev4.in0","to":"dev2.out0"},
			{"from":"dev5.in0","to":"dev3.out0"},
			{"from":"dev5.in1","to":"dev6.out0"},
			{"from":"dev6.in0","to":"dev4.out0"},
			{"from":"dev7.in0","to":"dev5.out0"},
			{"from":"dev7.in1","to":"dev8.out0"},
			{"from":"dev8.in0","to":"dev6.out0"},
			{"from":"dev9.in0","to":"dev7.out0"},
			{"from":"dev9.in1","to":"dev10.out0"},
			{"from":"dev10.in0","to":"dev8.out0"},
			{"from":"dev11.in0","to":"dev12.out0"},
			{"from":"dev11.in1","to":"dev9.out0"},
			{"from":"dev12.in0","to":"dev10.out0"}
		  ]
	  };
	
	var html1=JSON.stringify(counter);
	document.querySelector(".simcir").innerHTML=html1;
	document.querySelector(".simcir").classList.add("unclickable");

}
else if(sessionStorage.getItem("SIPO")){
	var counter={
		"width":989,
		"height":1000,
		"showToolbox":true,
		"toolbox":[
		  {"type":"In"},
		  {"type":"Out"},
		  {"type":"Joint"},
		  {"type":"DC"},
		  {"type":"LED"},
		  {"type":"PushOff"},
		  {"type":"PushOn"},
		  {"type":"Toggle"},
		  {"type":"BUF"},
		  {"type":"NOT"},
		  {"type":"AND"},
		  {"type":"NAND"},
		  {"type":"OR"},
		  {"type":"NOR"},
		  {"type":"XOR"},
		  {"type":"XNOR"},
		  {"type":"OSC"},
		  {"type":"RS-FF"},
		  {"type":"JK-FF"},
		  {"type":"T-FF"},
		  {"type":"D-FF-custom"},
		  {"type":"DSO"}
		],
		"devices":[
			{"type":"DC","id":"dev0","x":8,"y":56,"label":"DC"},
			{"type":"Toggle","id":"dev1","x":72,"y":56,"label":"Toggle","state":{"on":false}},
			{"type":"Joint","id":"dev2","x":128,"y":128,"label":"Joint","state":{"direction":0}},
			{"type":"Joint","id":"dev3","x":224,"y":128,"label":"Joint","state":{"direction":0}},
			{"type":"Joint","id":"dev4","x":320,"y":128,"label":"Joint","state":{"direction":0}},
			{"type":"Joint","id":"dev5","x":304,"y":240,"label":"Joint","state":{"direction":0}},
			{"type":"Joint","id":"dev6","x":408,"y":128,"label":"Joint","state":{"direction":0}},
			{"type":"OSC","id":"dev7","x":8,"y":120,"label":"OSC"},
			{"type":"Joint","id":"dev8","x":424,"y":208,"label":"Joint","state":{"direction":0}},
			{"type":"DSO","id":"dev9","x":512,"y":200,"label":"DSO","state":{"playing":true,"rangeIndex":3}},
			{"type":"Joint","id":"dev10","x":488,"y":272,"label":"Joint","state":{"direction":0}},
			{"type":"Joint","id":"dev11","x":208,"y":224,"label":"Joint","state":{"direction":0}},
			{"type":"Joint","id":"dev12","x":400,"y":256,"label":"Joint","state":{"direction":0}},
			{"type":"D-FF","id":"dev13","x":144,"y":64,"label":"D-1"},
			{"type":"D-FF","id":"dev14","x":240,"y":64,"label":"D-2"},
			{"type":"D-FF","id":"dev15","x":336,"y":64,"label":"D-3"},
			{"type":"D-FF","id":"dev16","x":424,"y":64,"label":"D-4"}
		  ],
		  "connectors":[
			{"from":"dev1.in0","to":"dev0.out0"},
			{"from":"dev2.in0","to":"dev7.out0"},
			{"from":"dev3.in0","to":"dev2.out0"},
			{"from":"dev4.in0","to":"dev3.out0"},
			{"from":"dev5.in0","to":"dev14.out0"},
			{"from":"dev6.in0","to":"dev4.out0"},
			{"from":"dev8.in0","to":"dev6.out0"},
			{"from":"dev9.in0","to":"dev8.out0"},
			{"from":"dev9.in1","to":"dev11.out0"},
			{"from":"dev9.in2","to":"dev5.out0"},
			{"from":"dev9.in3","to":"dev12.out0"},
			{"from":"dev9.in4","to":"dev10.out0"},
			{"from":"dev10.in0","to":"dev16.out0"},
			{"from":"dev11.in0","to":"dev13.out0"},
			{"from":"dev12.in0","to":"dev15.out0"},
			{"from":"dev13.in0","to":"dev1.out0"},
			{"from":"dev13.in1","to":"dev2.out0"},
			{"from":"dev14.in0","to":"dev13.out0"},
			{"from":"dev14.in1","to":"dev3.out0"},
			{"from":"dev15.in0","to":"dev14.out0"},
			{"from":"dev15.in1","to":"dev4.out0"},
			{"from":"dev16.in0","to":"dev15.out0"},
			{"from":"dev16.in1","to":"dev6.out0"}
		  ]
	  };
	
	var html1=JSON.stringify(counter);
	document.querySelector(".simcir").innerHTML=html1;
	document.querySelector(".simcir").classList.add("unclickable");
}
else{
	var obj={
		"width":x,
		"height":800,
		"showToolbox":true,
		"toolbox":[
			{"type":"In"},
			{"type":"Out"},
			{"type":"Joint"},
			{"type":"DC"},
			//{"type":"LED"},
			//{"type":"PushOff"},
			//{"type":"PushOn"},
			{"type":"Toggle"},
			//{"type":"BUF"},
			{"type":"NOT"},
			{"type":"AND"},
			{"type":"NAND"},
			{"type":"OR"},
			{"type":"NOR"},
			{"type":"XOR"},
			{"type":"XNOR"},
			{"type":"OSC"},
			//{"type":"RS-FF"},
			{"type":"JK-FF"},
			//{"type":"T-FF"},
			{"type":"D-FF"},
			{"type":"DSO"}
		],
		"devices":[
		],
		"connectors":[
		]
	};
	
	var html=JSON.stringify(obj);
	document.querySelector(".simcir").innerHTML=html;
}
$("#SISO_circuit").click(function(event) {
	sessionStorage.setItem("SISO",1);
	sessionStorage.removeItem("SIPO");
	location.reload();
});

$("#SIPO_circuit").click(function(event) {
	sessionStorage.setItem("SIPO",1);
	sessionStorage.removeItem("SISO");
	location.reload();
});

$("#clear_workspace").click(function(event) {
	sessionStorage.removeItem("SIPO");
	sessionStorage.removeItem("SISO");
	location.reload();
});



$("#clear_settings").click(function(event) {
	sessionStorage.clear();
});