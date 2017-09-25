
EditEnable=0

if(getAppSettings("drop")){

var o = newAppObject({
					  text:"Drop!",
					  desc:"Distributed Reliable Operations Platform",
					  title:"Cluster resources",
					  logs:"State logs"
					 });


var nodes = newAppObject({
                      nodes:"Nodes: 4",
					  cpu:"CPU: 24",
					  ram:"RAM: 120G",
					  hdd:"HDD: 1T",
					  memo2:"12:00:23...node@localhost down ..."
			})

	
var nodet = newAppObject({
	
	nodes:[{name:"node1@localhost", is_active:1, cpu:2, cpu_percent:0.50, ram:200, ram_percent:0.4 },
		   {name:"node2@localhost", is_active:1, cpu:4, cpu_percent:0.20, ram:2100, ram_percent:0.5 },
		   {name:"node2@localhost", is_active:0, cpu:4, cpu_percent:0.20, ram:2100, ram_percent:0.5 },
		   {name:"node2@localhost", is_active:1, cpu:4, cpu_percent:0.20, ram:2100, ram_percent:0.5 },
		   {name:"node2@localhost", is_active:0, cpu:4, cpu_percent:0.20, ram:2100, ram_percent:0.5 },
		   {name:"node2@localhost", is_active:1, cpu:4, cpu_percent:0.20, ram:2100, ram_percent:0.5 },
		   {name:"node2@localhost", is_active:0, cpu:4, cpu_percent:0.20, ram:2100, ram_percent:0.5 }

	]

})

	


   var menu = newAppObject({});
	var app_menu = {
     params:{
			id:"app_menu",
			view_id:"app_menu",
			values:["nodes", "ppools", "flows", "images"],
			labels:["nodes", "ppools", "flows", "images"]
    	}
	};

	app_settings["app_menu"] = app_menu;	
   Render(new Menu2View(menu,"app_menu"),"app");


// logo
Render(new LabelView(o,"label"),"app")
Render(new LabelView(o,"desc"),"app");

//label dashboard
Render(new LabelView(o,"title"),"app");

//label logs
Render(new LabelView(o,"logs"),"app");

//common
Render(new LabelView(nodes,"nodes"),"app");
Render(new LabelView(nodes,"cpu"),"app");
Render(new LabelView(nodes,"ram"),"app");
Render(new LabelView(nodes,"hdd"),"app");

//logs
Render(new MemoView(nodes,"memo2"),"app");


//node table
Render(new GridView(nodet,"nodet"),"app");





}

