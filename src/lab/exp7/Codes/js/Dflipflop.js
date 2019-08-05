// this file is to be executed in the end, because the functions and variables used are declared in the library simcir files

// This D-FF-custom is made by me which has additional preset and clear feature required to make the ring counter
simcir.registerDevice("D-FF-custom",
{
	"width":520,
	"height":500,
	"devices":[
	{"type":"In","id":"dev0","x":16,"y":72,"label":"D"},
	{"type":"NAND","numInputs":3,"id":"dev1","x":80,"y":40,"label":"NAND"},
	{"type":"In","id":"dev2","x":160,"y":8,"label":"PR"},
	{"type":"NAND","numInputs":3,"id":"dev3","x":144,"y":48,"label":"NAND"},
	{"type":"NOT","id":"dev4","x":24,"y":168,"label":"NOT"},
	{"type":"NAND","numInputs":3,"id":"dev5","x":80,"y":168,"label":"NAND"},
	{"type":"NOT","id":"dev6","x":104,"y":112,"label":"NOT"},
	{"type":"NAND","numInputs":3,"id":"dev7","x":160,"y":176,"label":"NAND"},
	{"type":"NAND","id":"dev8","x":224,"y":176,"label":"NAND"},
	{"type":"NAND","id":"dev9","x":224,"y":48,"label":"NAND"},
	{"type":"NAND","numInputs":3,"id":"dev10","x":296,"y":176,"label":"NAND"},
	{"type":"Out","id":"dev11","x":344,"y":136,"label":"~Q"},
	{"type":"Out","id":"dev12","x":336,"y":80,"label":"Q"},
	{"type":"NAND","numInputs":3,"id":"dev13","x":288,"y":56,"label":"NAND"},
	{"type":"In","id":"dev14","x":120,"y":208,"label":"CLR"},
	{"type":"In","id":"dev15","x":16,"y":120,"label":"Clk"}
	],
	"connectors":[
	{"from":"dev1.in0","to":"dev14.out0"},
	{"from":"dev1.in1","to":"dev0.out0"},
	{"from":"dev1.in2","to":"dev15.out0"},
	{"from":"dev3.in0","to":"dev2.out0"},
	{"from":"dev3.in1","to":"dev1.out0"},
	{"from":"dev3.in2","to":"dev7.out0"},
	{"from":"dev4.in0","to":"dev0.out0"},
	{"from":"dev5.in0","to":"dev15.out0"},
	{"from":"dev5.in1","to":"dev4.out0"},
	{"from":"dev5.in2","to":"dev2.out0"},
	{"from":"dev6.in0","to":"dev15.out0"},
	{"from":"dev7.in0","to":"dev3.out0"},
	{"from":"dev7.in1","to":"dev5.out0"},
	{"from":"dev7.in2","to":"dev14.out0"},
	{"from":"dev8.in0","to":"dev6.out0"},
	{"from":"dev8.in1","to":"dev7.out0"},
	{"from":"dev9.in0","to":"dev3.out0"},
	{"from":"dev9.in1","to":"dev6.out0"},
	{"from":"dev10.in0","to":"dev13.out0"},
	{"from":"dev10.in1","to":"dev8.out0"},
	{"from":"dev10.in2","to":"dev14.out0"},
	{"from":"dev11.in0","to":"dev10.out0"},
	{"from":"dev12.in0","to":"dev13.out0"},
	{"from":"dev13.in0","to":"dev2.out0"},
	{"from":"dev13.in1","to":"dev9.out0"},
	{"from":"dev13.in2","to":"dev10.out0"}
	]
}
);