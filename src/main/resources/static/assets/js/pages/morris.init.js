!function(r){
    "use strict";
    function a(){}
    a.prototype.createStackedChart=function(a,e,r,t,o,i){
        Morris.Bar({element:a,data:e,xkey:r,ykeys:t,stacked:!0,labels:o,hideHover:"auto",dataLabels:!1,resize:!0,gridLineColor:"rgba(65, 80, 95, 0.07)",barColors:i}
    )},

   a.prototype.createAreaChart=function(a,e,r,t,o,i,b,l,s){
        Morris.Area({element:a,pointSize:e,lineWidth:r,data:t,xkey:o,dataLabels:!1,ykeys:i,labels:b,fillOpacity:l,hideHover:"auto",resize:!0,gridLineColor:"rgba(65, 80, 95, 0.07)",lineColors:s}
   )},

   a.prototype.createLineChart=function(a,e,r,t,o,i,b,l,s){
        Morris.Line({element:a,data:e,dataLabels:!1,xkey:r,ykeys:t,labels:o,fillOpacity:i,pointFillColors:b,pointStrokeColors:l,behaveLikeLine:!0,gridLineColor:"rgba(65, 80, 95, 0.07)",hideHover:"auto",lineWidth:"3px",pointSize:0,preUnits:"$",resize:!0,lineColors:s}
   )},

   a.prototype.createBarChart=function(a,e,r,t,o,i){
        Morris.Bar({element:a,data:e,dataLabels:!1,xkey:r,ykeys:t,labels:o,hideHover:"auto",resize:!0,gridLineColor:"rgba(65, 80, 95, 0.07)",barSizeRatio:.4,xLabelAngle:35,barColors:i}
   )},

   a.prototype.createAreaChartDotted=function(a,e,r,t,o,i,b,l,s,c){
        Morris.Area({element:a,pointSize:3,lineWidth:1,data:t,dataLabels:!1,xkey:o,ykeys:i,labels:b,hideHover:"auto",pointFillColors:l,pointStrokeColors:s,resize:!0,smooth:!1,behaveLikeLine:!0,fillOpacity:.4,gridLineColor:"rgba(65, 80, 95, 0.07)",lineColors:c}
   )},

   a.prototype.createDonutChart=function(a,e,r){
        Morris.Donut({element:a,data:e,barSize:.2,resize:!0,colors:r,backgroundColor:"transparent"}
   )},

   a.prototype.init=function(){
        // var a=["#1abc9c","#3bafda","#e3eaef"];
        // (e=r("#morris-bar-stacked").data("colors"))&&(a=e.split(",")),
        //     this.createStackedChart("morris-bar-stacked",[{y:"2007",a:45,b:180,c:100},{y:"2008",a:75,b:65,c:80},{y:"2009",a:100,b:90,c:56},{y:"2010",a:75,b:65,c:89},{y:"2011",a:100,b:90,c:120},{y:"2012",a:75,b:65,c:110},{y:"2013",a:50,b:40,c:85},{y:"2014",a:75,b:65,c:52},{y:"2015",a:50,b:40,c:77},{y:"2016",a:75,b:65,c:90},{y:"2017",a:100,b:90,c:130},{y:"2018",a:80,b:65,c:95}],"y",["a","b","c"],["Bitcoin","Ethereum","Litecoin"],a);

        a=["#1abc9c","#ebeff2"];
        (e=r("#morris-area-example").data("colors"))&&(a=e.split(",")),
                this.createAreaChart("morris-area-example",0,0,[{y:"2012",a:10,b:20},{y:"2013",a:75,b:65},{y:"2014",a:50,b:40},{y:"2015",a:75,b:65},{y:"2016",a:50,b:40},{y:"2017",a:75,b:65},{y:"2018",a:90,b:60}],"y",["a","b"],["Bitcoin","Ethereum"],["1"],a);

        // a=["#1abc9c","#3bafda"];
        // (e=r("#morris-line-example").data("colors"))&&(a=e.split(",")),
        //         this.createLineChart("morris-line-example",[{y:"2010",a:50,b:0},{y:"2011",a:75,b:50},{y:"2012",a:30,b:80},{y:"2013",a:50,b:50},{y:"2014",a:75,b:10},{y:"2015",a:50,b:40},{y:"2016",a:75,b:50},{y:"2017",a:100,b:70}],"y",["a","b"],["Bitcoin","Ethereum"],["0.1"],["#ffffff"],["#999999"],a);

        a=["#1abc9c","#3bafda","#ebeff2"];
        (e=r("#morris-bar-example").data("colors"))&&(a=e.split(",")),
                this.createBarChart("morris-bar-example",[{y:"2012",a:100,b:90,c:40},{y:"2013",a:75,b:65,c:20},{y:"2014",a:50,b:40,c:50},{y:"2015",a:75,b:65,c:95},{y:"2016",a:50,b:40,c:22},{y:"2017",a:75,b:65,c:56},{y:"2018",a:100,b:90,c:60}],"y",["a","b","c"],["Bitcoin","Ethereum","Litecoin"],a);

        a=["#e3eaef","#3bafda"];
        (e=r("#morris-area-with-dotted").data("colors"))&&(a=e.split(",")),
                this.createAreaChartDotted("morris-area-with-dotted",0,0,[{y:"2012",a:10,b:20},{y:"2013",a:75,b:65},{y:"2014",a:50,b:40},{y:"2015",a:75,b:65},{y:"2016",a:50,b:40},{y:"2017",a:75,b:65},{y:"2018",a:90,b:60}],"y",["a","b"],["Bitcoin","Litecoin"],["#ffffff"],["#999999"],a);
        var e;
        // a=["#3bafda","#1abc9c","#ebeff2"];
        // (e=r("#morris-donut-example").data("colors"))&&(a=e.split(",")), this.createDonutChart("morris-donut-example",[{label:"Ethereum",value:12},{label:"Bitcoin",value:30},{label:"Litecoin",value:20}],a)
   },

        r.MorrisCharts=new a,
        r.MorrisCharts.Constructor=a}(window.jQuery),

    function(){"use strict";window.jQuery.MorrisCharts.init()}();