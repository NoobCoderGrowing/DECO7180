function landLord(){
    window.location="../landlord.html";
}

function home(){
    window.location="../index.html";
}

window.onload=function(){
    if(localStorage.getItem('newTotalNumber')!='{}'&&localStorage.getItem('newQueryResult')!='{}'){
        console.log(JSON.parse(localStorage.getItem('newTotalNumber')));
        var totalNum=JSON.parse(localStorage.getItem('newTotalNumber'));
        console.log(JSON.parse(localStorage.getItem('newQueryResult')));
        var result=JSON.parse(localStorage.getItem('newQueryResult'));
        var east=0;
        var north=0;
        var south=0;
        var west=0;
        var innerCity=0;
        Object.keys(result).forEach(function(key){
            east+=result[key]['BrisbaneEast'];
            north+=result[key]['BrisbaneNorth'];
            south+=result[key]['BrisbaneSouth'];
            west+=result[key]['BrisbaneWest'];
            innerCity+=result[key]['BrisbaneInnerCity'];
        })
        document.querySelector('.f13').innerHTML=`${Math.round(east/totalNum['BrisbaneEast']*100)}% people alike`;
        document.querySelector('.f11').innerHTML=`${Math.round(north/totalNum['BrisbaneNorth']*100)}% people alike`;
        document.querySelector('.f15').innerHTML=`${Math.round(south/totalNum['BrisbaneSouth']*100)}% people alike`;
        document.querySelector('.f14').innerHTML=`${Math.round(west/totalNum['BrisbaneWest']*100)}% people alike`;
        document.querySelector('.f12').innerHTML=`${Math.round(innerCity/totalNum['BrisbaneInnerCity']*100)}% people alike`;        
    }
}




//Map page
var map = L.map("map").setView([-27.46, 153.12], 11);

L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}", {
 
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
	
	
}).addTo(map);

var geojson ={
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "properties": {
            "name": "center"},
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[153.0694, -27.4414],[153.0708, -27.4374],[153.0781, -27.4345],[153.0747, -27.4069],[153.0501, -27.4040],[153.0256, -27.4219],[153.0013, -27.4154],[152.9633, -27.4409],[152.9583, -27.4580],[152.9701, -27.4878],[153.0875, -27.4814],[153.0896, -27.4493]]]
            }
        },
        {"type": "Feature",
         "properties": {
             "name": "west"},
         "geometry": {
            "type": "Polygon",
            "coordinates": [[[153.0013, -27.4154], [152.9165, -27.394], [152.9169, -27.3946], [152.9151, -27.4056], [152.8991, -27.4036], [152.897, -27.4168], [152.8725, -27.4132], [152.8627, -27.4178], [152.862, -27.4222], [152.8491, -27.4219], [152.8433, -27.4178], [152.8369, -27.4187], [152.8139, -27.4021], [152.7985, -27.4044], [152.7997, -27.4091], [152.8275, -27.431], [152.8236, -27.4569], [152.8109, -27.4612], [152.8129, -27.4785], [152.8421, -27.4959], [152.8412, -27.5154], [152.8491, -27.5263], [152.8455, -27.5285], [152.8524, -27.5451], [152.8493, -27.5594], [152.856, -27.5962], [152.8613, -27.5977], [152.8697, -27.581], [152.8759, -27.5795], [152.8975, -27.6018], [152.906, -27.6003], [152.8936, -27.5773], [152.9023, -27.5682], [152.9219, -27.5676], [152.9221, -27.562], [152.9617, -27.5542], [152.9681, -27.5428], [152.9707, -27.5484], [152.9964, -27.5494], [153.0201, -27.5007], [152.9701, -27.4878], [152.9583, -27.458], [152.9633, -27.4409]]]
            }
        },
        {"type": "Feature",
        "properties": {
            "name": "south"},
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[152.9701, -27.4878], [153.0201, -27.5007], [152.9964, -27.5494], [152.9863, -27.5574], [152.9875, -27.5763], [152.9978, -27.5948], [152.9926, -27.6029], [152.998, -27.6128], [152.9923, -27.6183], [152.9791, -27.6248], [152.9713, -27.6373], [153.0369, -27.6592], [153.0405, -27.6538], [153.0586, -27.6567], [153.0692, -27.6526], [153.0946, -27.6451], [153.1057, -27.5935], [153.1216, -27.5953], [153.1233, -27.5874], [153.1555, -27.5916], [153.1754, -27.6067], [153.1739, -27.5333], [153.1229, -27.5311], [153.0875, -27.4814]]]
            }
        },
        {"type": "Feature",
        "properties": {
            "name": "east"},
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[153.0875, -27.4814], [153.0896, -27.4498], [153.1138, -27.4409], [153.1243, -27.4308], [153.1421, -27.4219], [153.1553, -27.4029], [153.158, -27.3992], [153.1582, -27.3945], [153.1566, -27.3939], [153.1565, -27.3924], [153.1608, -27.3831], [153.1678, -27.3761], [153.1738, -27.3668], [153.1719, -27.3657], [153.1777, -27.3595], [153.1787, -27.36], [153.1887, -27.3455], [153.2021, -27.3528], [153.1792, -27.3857], [153.1884, -27.3997], [153.1885, -27.4022], [153.1878, -27.4032], [153.1823, -27.3989], [153.1819, -27.3984], [153.1809, -27.3983], [153.1751, -27.3954], [153.173, -27.3951], [153.1722, -27.3956], [153.1683, -27.3937], [153.1676, -27.3938], [153.1671, -27.3965], [153.1654, -27.3982], [153.1658, -27.4012], [153.1701, -27.4014], [153.171, -27.4027], [153.173, -27.4042], [153.1735, -27.4048], [153.1742, -27.4096], [153.1738, -27.4157], [153.1714, -27.4161], [153.17, -27.4172], [153.1709, -27.4196], [153.1704, -27.4231], [153.1691, -27.4245], [153.1702, -27.4273], [153.1718, -27.4288], [153.172, -27.4313], [153.1714, -27.4318], [153.1738, -27.4346], [153.1754, -27.4404], [153.1814, -27.4454], [153.1869, -27.4462], [153.1879, -27.4476], [153.187, -27.4483], [153.1863, -27.45], [153.1875, -27.4518], [153.1919, -27.4506], [153.1939, -27.4523], [153.1948, -27.4563], [153.1944, -27.459], [153.1901, -27.462], [153.1943, -27.4702], [153.2026, -27.4731], [153.2031, -27.4793], [153.2179, -27.4814], [153.2347, -27.4799], [153.2378, -27.4671], [153.2405, -27.4651], [153.2434, -27.4816], [153.2596, -27.4826], [153.2623, -27.5166], [153.2874, -27.5143], [153.2893, -27.5093], [153.2843, -27.5343], [153.2778, -27.5405], [153.2912, -27.5649], [153.3078, -27.5652], [153.308, -27.5691], [153.3046, -27.5735], [153.3114, -27.5817], [153.3152, -27.5795], [153.3178, -27.5822], [153.3116, -27.589], [153.3009, -27.6029], [153.3121, -27.6176], [153.3135, -27.6421], [153.3094, -27.6531], [153.3205, -27.6744], [153.3157, -27.6807], [153.3229, -27.6997], [153.302, -27.7077], [153.2927, -27.6911], [153.2858, -27.6937], [153.2802, -27.6586], [153.2548, -27.6528], [153.1739, -27.6341], [153.1756, -27.6236], [153.1806, -27.624], [153.1754, -27.6067], [153.1739, -27.5333], [153.1229, -27.5311]]]
           }
        },
        {"type": "Feature",
        "properties": {
            "name": "north"},
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[153.0875, -27.4814], [153.0896, -27.4493], [153.0694, -27.4414], [153.0708, -27.4374], [153.0781, -27.4345], [153.0747, -27.4069], [153.0501, -27.404], [153.0256, -27.4219], [152.958, -27.4044], [152.9758, -27.3921], [152.9837, -27.3845], [152.9817, -27.3585], [152.9872, -27.3585], [152.987, -27.3541], [152.9788, -27.3464], [153.0, -27.3213], [152.9972, -27.3023], [153.011, -27.3004], [153.0147, -27.2878], [153.0344, -27.2978], [153.0417, -27.279], [153.0661, -27.2811], [153.0644, -27.2992], [153.068, -27.3112], [153.0756, -27.3207], [153.088, -27.328], [153.0822, -27.3333], [153.1384, -27.3611], [153.156, -27.3633], [153.16, -27.3769], [153.1464, -27.3881], [153.1502, -27.3947], [153.141, -27.4165], [153.1073, -27.4402], [153.0902, -27.4455]]]
           }
        }]
    };

L.geoJSON(geojson).addTo(map);
function style(feature) {
    return {
        fillColor: '#ced8db',
        weight: 2,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.3
    };
}

L.geoJson(geojson, {style: style}).addTo(map);
function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
		fillColor: '#8d969a',
        weight: 2,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.3
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
}
var geo;
// ... our listeners
geo = L.geoJson(geojson);

function resetHighlight(e) {
    geo.resetStyle(e.target);
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        
    });
}

geo = L.geoJson(geojson, {
    style: style,
    onEachFeature: onEachFeature
}).addTo(map);


//list pane
jQuery(document).ready(function($)
{
	$('.list ul li p').clickdown();
	$('.list-se p[class=title]').clickup();
	$('.list>ul>li').ad();
	console.log($().index())
});
$.fn.clickup=function()
{
	$(this).click(function(){
		$(this).parent().slideUp().siblings().slideDown('fast');
		$(this).siblings('li').css('right', '-100%');
	});
}
$.fn.clickdown=function()
{
	$(this).click(function()
	{
		$(this).siblings('.list-se').slideToggle('fast').siblings().slideToggle('fast');
		$(this).parent().siblings().children('.list-se').slideUp('fast').siblings().slideDown('fast');
		var li = $(this).siblings('.list-se').children('li');
		for(var i=0;i<li.length;i++){
			li.eq(i).animate({right:'0'},i*25);
		}
        $(this).parent().siblings().children('.list-se').children('li').css('right', '-100%');
        map.setView([-27.46, 153.12], 11);
	})

}

$.fn.ad=function()
{
	var t = $(this);
	for(var i = 0 ; i<t.length ; i++)
	{
		var count = t.eq(i).children().children().length;
		if (count>1) 
		{
			t.eq(i).children('p[class=title]');
			t.eq(i).children('.list-se').children('p[class=title]');
		}
	}
}


//map zoom
var layer = [];
function mapzoom(area){
    if(area=="north"){
        map.setView([-27.36005, 153.06406], 12);
        var marker_north = L.marker([-27.3, 153.04]).addTo(map);
        var marker_north = L.marker([-27.36005, 153.06406]).addTo(map);      
    }
    if(area=="center"){
        map.setView([-27.45499, 153.02828], 13);
        var marker_center = L.marker([-27.45499, 153.02828]).addTo(map);     
    }
    if(area=="west"){
        map.setView([-27.48773, 152.89664], 12);
        var marker_west = L.marker([-27.48773, 152.89664]).addTo(map);     
    }
    if(area=="east"){
        map.setView([-27.51367, 153.22267], 12);
        var marker_east = L.marker([-27.51367, 153.22267]).addTo(map);     
    }
    if(area=="south"){
        map.setView([-27.59656, 153.05490], 12);
        var marker_south = L.marker([-27.59656, 153.05490]).addTo(map);     
    }
}

//click hide other areas
function Showself(area) {
    if(area=="north"){
        document.getElementById("center").style.display = ( document.getElementById("center").style.display != 'none' ? 'none' : 'block' );
        document.getElementById("west").style.display = ( document.getElementById("west").style.display != 'none' ? 'none' : 'block' );
        document.getElementById("east").style.display = ( document.getElementById("east").style.display != 'none' ? 'none' : 'block' );
        document.getElementById("south").style.display = ( document.getElementById("south").style.display != 'none' ? 'none' : 'block' );
    }
    if(area=="center"){
        document.getElementById("north").style.display = ( document.getElementById("north").style.display != 'none' ? 'none' : 'block' );
        document.getElementById("west").style.display = ( document.getElementById("west").style.display != 'none' ? 'none' : 'block' );
        document.getElementById("east").style.display = ( document.getElementById("east").style.display != 'none' ? 'none' : 'block' );
        document.getElementById("south").style.display = ( document.getElementById("south").style.display != 'none' ? 'none' : 'block' );
    }
    if(area=="west"){
        document.getElementById("center").style.display = ( document.getElementById("center").style.display != 'none' ? 'none' : 'block' );
        document.getElementById("north").style.display = ( document.getElementById("north").style.display != 'none' ? 'none' : 'block' );
        document.getElementById("east").style.display = ( document.getElementById("east").style.display != 'none' ? 'none' : 'block' );
        document.getElementById("south").style.display = ( document.getElementById("south").style.display != 'none' ? 'none' : 'block' );
    }
    if(area=="east"){
        document.getElementById("center").style.display = ( document.getElementById("center").style.display != 'none' ? 'none' : 'block' );
        document.getElementById("west").style.display = ( document.getElementById("west").style.display != 'none' ? 'none' : 'block' );
        document.getElementById("north").style.display = ( document.getElementById("north").style.display != 'none' ? 'none' : 'block' );
        document.getElementById("south").style.display = ( document.getElementById("south").style.display != 'none' ? 'none' : 'block' );
    }
    if(area=="south"){
        document.getElementById("center").style.display = ( document.getElementById("center").style.display != 'none' ? 'none' : 'block' );
        document.getElementById("west").style.display = ( document.getElementById("west").style.display != 'none' ? 'none' : 'block' );
        document.getElementById("east").style.display = ( document.getElementById("east").style.display != 'none' ? 'none' : 'block' );
        document.getElementById("north").style.display = ( document.getElementById("north").style.display != 'none' ? 'none' : 'block' );
    }
    
}

//mouseon
var imgid;
function highlightonmap(area, imgid){
    function style(feature) {
        return {
            fillColor: '#8d969a',
            weight: 2,
            color: '#666',
            dashArray: '',
            fillOpacity: 0.3
        };
    }

    if(area=="north"){
    
        geojson_north =  {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "properties": {
                    "name": "north"},
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [[[153.0875, -27.4814], [153.0896, -27.4493], [153.0694, -27.4414], [153.0708, -27.4374], [153.0781, -27.4345], [153.0747, -27.4069], [153.0501, -27.404], [153.0256, -27.4219], [152.958, -27.4044], [152.9758, -27.3921], [152.9837, -27.3845], [152.9817, -27.3585], [152.9872, -27.3585], [152.987, -27.3541], [152.9788, -27.3464], [153.0, -27.3213], [152.9972, -27.3023], [153.011, -27.3004], [153.0147, -27.2878], [153.0344, -27.2978], [153.0417, -27.279], [153.0661, -27.2811], [153.0644, -27.2992], [153.068, -27.3112], [153.0756, -27.3207], [153.088, -27.328], [153.0822, -27.3333], [153.1384, -27.3611], [153.156, -27.3633], [153.16, -27.3769], [153.1464, -27.3881], [153.1502, -27.3947], [153.141, -27.4165], [153.1073, -27.4402], [153.0902, -27.4455]]]
                    }
                }]
        };    
       var layer_north =  L.geoJSON(geojson_north, {style: style}).addTo(map); 
       $("#north").mouseout(function(){
          layer_north.remove()
       });     
    } 
    if(area=="center"){
        geojson_center = {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "properties": {
                    "name": "center"},
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [[[153.0694, -27.4414],[153.0708, -27.4374],[153.0781, -27.4345],[153.0747, -27.4069],[153.0501, -27.4040],[153.0256, -27.4219],[153.0013, -27.4154],[152.9633, -27.4409],[152.9583, -27.4580],[152.9701, -27.4878],[153.0875, -27.4814],[153.0896, -27.4493]]]
                }
            }]
        };
        var layer_center =  L.geoJSON(geojson_center, {style: style}).addTo(map);
        $("#center").mouseout(function(){
            layer_center.remove()
         });  
    }
    if(area=="west"){
        geojson_west = {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "properties": {
                    "name": "west"},
                "geometry": {
                    "type": "Polygon",
                     "coordinates": [[[153.0013, -27.4154], [152.9165, -27.394], [152.9169, -27.3946], [152.9151, -27.4056], [152.8991, -27.4036], [152.897, -27.4168], [152.8725, -27.4132], [152.8627, -27.4178], [152.862, -27.4222], [152.8491, -27.4219], [152.8433, -27.4178], [152.8369, -27.4187], [152.8139, -27.4021], [152.7985, -27.4044], [152.7997, -27.4091], [152.8275, -27.431], [152.8236, -27.4569], [152.8109, -27.4612], [152.8129, -27.4785], [152.8421, -27.4959], [152.8412, -27.5154], [152.8491, -27.5263], [152.8455, -27.5285], [152.8524, -27.5451], [152.8493, -27.5594], [152.856, -27.5962], [152.8613, -27.5977], [152.8697, -27.581], [152.8759, -27.5795], [152.8975, -27.6018], [152.906, -27.6003], [152.8936, -27.5773], [152.9023, -27.5682], [152.9219, -27.5676], [152.9221, -27.562], [152.9617, -27.5542], [152.9681, -27.5428], [152.9707, -27.5484], [152.9964, -27.5494], [153.0201, -27.5007], [152.9701, -27.4878], [152.9583, -27.458], [152.9633, -27.4409]]]
               }
           }]
        };
        var layer_west = L.geoJSON(geojson_west, {style: style}).addTo(map);
        $("#west").mouseout(function(){
            layer_west.remove()
         });
    }
    if(area=="east"){
        geojson_east = {
            "type": "FeatureCollection",
            "features": [{"type": "Feature",
            "properties": {
                "name": "east"},
            "geometry": {
                "type": "Polygon",
                "coordinates": [[[153.0875, -27.4814], [153.0896, -27.4498], [153.1138, -27.4409], [153.1243, -27.4308], [153.1421, -27.4219], [153.1553, -27.4029], [153.158, -27.3992], [153.1582, -27.3945], [153.1566, -27.3939], [153.1565, -27.3924], [153.1608, -27.3831], [153.1678, -27.3761], [153.1738, -27.3668], [153.1719, -27.3657], [153.1777, -27.3595], [153.1787, -27.36], [153.1887, -27.3455], [153.2021, -27.3528], [153.1792, -27.3857], [153.1884, -27.3997], [153.1885, -27.4022], [153.1878, -27.4032], [153.1823, -27.3989], [153.1819, -27.3984], [153.1809, -27.3983], [153.1751, -27.3954], [153.173, -27.3951], [153.1722, -27.3956], [153.1683, -27.3937], [153.1676, -27.3938], [153.1671, -27.3965], [153.1654, -27.3982], [153.1658, -27.4012], [153.1701, -27.4014], [153.171, -27.4027], [153.173, -27.4042], [153.1735, -27.4048], [153.1742, -27.4096], [153.1738, -27.4157], [153.1714, -27.4161], [153.17, -27.4172], [153.1709, -27.4196], [153.1704, -27.4231], [153.1691, -27.4245], [153.1702, -27.4273], [153.1718, -27.4288], [153.172, -27.4313], [153.1714, -27.4318], [153.1738, -27.4346], [153.1754, -27.4404], [153.1814, -27.4454], [153.1869, -27.4462], [153.1879, -27.4476], [153.187, -27.4483], [153.1863, -27.45], [153.1875, -27.4518], [153.1919, -27.4506], [153.1939, -27.4523], [153.1948, -27.4563], [153.1944, -27.459], [153.1901, -27.462], [153.1943, -27.4702], [153.2026, -27.4731], [153.2031, -27.4793], [153.2179, -27.4814], [153.2347, -27.4799], [153.2378, -27.4671], [153.2405, -27.4651], [153.2434, -27.4816], [153.2596, -27.4826], [153.2623, -27.5166], [153.2874, -27.5143], [153.2893, -27.5093], [153.2843, -27.5343], [153.2778, -27.5405], [153.2912, -27.5649], [153.3078, -27.5652], [153.308, -27.5691], [153.3046, -27.5735], [153.3114, -27.5817], [153.3152, -27.5795], [153.3178, -27.5822], [153.3116, -27.589], [153.3009, -27.6029], [153.3121, -27.6176], [153.3135, -27.6421], [153.3094, -27.6531], [153.3205, -27.6744], [153.3157, -27.6807], [153.3229, -27.6997], [153.302, -27.7077], [153.2927, -27.6911], [153.2858, -27.6937], [153.2802, -27.6586], [153.2548, -27.6528], [153.1739, -27.6341], [153.1756, -27.6236], [153.1806, -27.624], [153.1754, -27.6067], [153.1739, -27.5333], [153.1229, -27.5311]]]
                }   
            }]
        };
        var layer_east = L.geoJSON(geojson_east, {style: style}).addTo(map);
        $("#east").mouseout(function(){
            layer_east.remove()
         });
    }
    if(area=="south"){
        geojson_south = {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "properties": {"name": "south"},
            "geometry": {
                "type": "Polygon",
                "coordinates": [[[152.9701, -27.4878], [153.0201, -27.5007], [152.9964, -27.5494], [152.9863, -27.5574], [152.9875, -27.5763], [152.9978, -27.5948], [152.9926, -27.6029], [152.998, -27.6128], [152.9923, -27.6183], [152.9791, -27.6248], [152.9713, -27.6373], [153.0369, -27.6592], [153.0405, -27.6538], [153.0586, -27.6567], [153.0692, -27.6526], [153.0946, -27.6451], [153.1057, -27.5935], [153.1216, -27.5953], [153.1233, -27.5874], [153.1555, -27.5916], [153.1754, -27.6067], [153.1739, -27.5333], [153.1229, -27.5311], [153.0875, -27.4814]]]
                }
            }]
        };
        var layer_south =L.geoJSON(geojson_south, {style: style}).addTo(map); 
        $("#south").mouseout(function(){
            layer_south.remove()
         });
    }
    if(imgid=='#pic'){$(imgid).attr('src','css/images/scrolldown_clicked.png');}
    if(imgid=='#pic1'){$(imgid).attr('src','css/images/scrolldown_clicked.png');}
    if(imgid=='#pic2'){$(imgid).attr('src','css/images/scrolldown_clicked.png');}
    if(imgid=='#pic3'){$(imgid).attr('src','css/images/scrolldown_clicked.png');}
    if(imgid=='#pic4'){$(imgid).attr('src','css/images/scrolldown_clicked.png');}
}

function hoverscroll(imgid){
    if(imgid=='#picR'){$(imgid).attr('src','css/images/scrolldown_clickedReverse.png');}
    if(imgid=='#picR1'){$(imgid).attr('src','css/images/scrolldown_clickedReverse.png');}
    if(imgid=='#picR2'){$(imgid).attr('src','css/images/scrolldown_clickedReverse.png');}
    if(imgid=='#picR3'){$(imgid).attr('src','css/images/scrolldown_clickedReverse.png');}
    if(imgid=='#picR4'){$(imgid).attr('src','css/images/scrolldown_clickedReverse.png');}
}
function highlightarrow(imgname){
    if(imgname=='#arrow0'){$(imgname).attr('src','css/images/arrow.png');}
    if(imgname=='#arrow1'){$(imgname).attr('src','css/images/arrow.png');}
    if(imgname=='#arrow2'){$(imgname).attr('src','css/images/arrow.png');}
    if(imgname=='#arrow3'){$(imgname).attr('src','css/images/arrow.png');}
    if(imgname=='#arrow4'){$(imgname).attr('src','css/images/arrow.png');}
    if(imgname=='#arrow5'){$(imgname).attr('src','css/images/arrow.png');}
    if(imgname=='#arrow6'){$(imgname).attr('src','css/images/arrow.png');}
    if(imgname=='#arrow7'){$(imgname).attr('src','css/images/arrow.png');}
    if(imgname=='#arrow8'){$(imgname).attr('src','css/images/arrow.png');}
    if(imgname=='#arrow9'){$(imgname).attr('src','css/images/arrow.png');}
    if(imgname=='#arrow10'){$(imgname).attr('src','css/images/arrow.png');}
    if(imgname=='#arrow11'){$(imgname).attr('src','css/images/arrow.png');}
    if(imgname=='#arrow12'){$(imgname).attr('src','css/images/arrow.png');}
    if(imgname=='#arrow13'){$(imgname).attr('src','css/images/arrow.png');}
    if(imgname=='#arrow14'){$(imgname).attr('src','css/images/arrow.png');}
    if(imgname=='#arrow15'){$(imgname).attr('src','css/images/arrow.png');}
    if(imgname=='#arrow16'){$(imgname).attr('src','css/images/arrow.png');}
    if(imgname=='#arrow17'){$(imgname).attr('src','css/images/arrow.png');}
    if(imgname=='#arrow18'){$(imgname).attr('src','css/images/arrow.png');}
    if(imgname=='#arrow19'){$(imgname).attr('src','css/images/arrow.png');}
    if(imgname=='#arrow20'){$(imgname).attr('src','css/images/arrow.png');}
    if(imgname=='#arrow21'){$(imgname).attr('src','css/images/arrow.png');}
    if(imgname=='#arrow22'){$(imgname).attr('src','css/images/arrow.png');}
    if(imgname=='#arrow23'){$(imgname).attr('src','css/images/arrow.png');}
    if(imgname=='#arrow24'){$(imgname).attr('src','css/images/arrow.png');}
    if(imgname=='#arrow25'){$(imgname).attr('src','css/images/arrow.png');}
    if(imgname=='#arrow26'){$(imgname).attr('src','css/images/arrow.png');}
    if(imgname=='#arrow27'){$(imgname).attr('src','css/images/arrow.png');}
    if(imgname=='#arrow28'){$(imgname).attr('src','css/images/arrow.png');}
    if(imgname=='#arrow29'){$(imgname).attr('src','css/images/arrow.png');}
}

//mouseout
function resetscroll(imgid){
    if(imgid=='#pic'){
        $(imgid).attr('src','css/images/scrolldown_grey.png');
    }
    if(imgid=='#pic1'){
        $(imgid).attr('src','css/images/scrolldown_cobalt.png');
    }
    if(imgid=='#pic2'){
        $(imgid).attr('src','css/images/scrolldown_cyan.png');
    }
    if(imgid=='#pic3'){
        $(imgid).attr('src','css/images/scrolldown_orange.png');
    }
    if(imgid=='#pic4'){
        $(imgid).attr('src','css/images/scrolldown_orange1.png');
    }
    
}

function resethoverscroll(imgid){
    if(imgid=='#picR'){$(imgid).attr('src','css/images/scrolldown_greyReverse.png');}
    if(imgid=='#picR1'){$(imgid).attr('src','css/images/scrolldown_cobaltReverse.png');}
    if(imgid=='#picR2'){$(imgid).attr('src','css/images/scrolldown_cyanReverse.png');}
    if(imgid=='#picR3'){$(imgid).attr('src','css/images/scrolldown_orangeReverse.png');}
    if(imgid=='#picR4'){$(imgid).attr('src','css/images/scrolldown_orange1Reverse.png');}
}
function resethighlightarrow(imgname){
    if(imgname=='#arrow0'){$(imgname).attr('src','css/images/arrow_unclick.png');}
    if(imgname=='#arrow1'){$(imgname).attr('src','css/images/arrow_unclick.png');}
    if(imgname=='#arrow2'){$(imgname).attr('src','css/images/arrow_unclick.png');}
    if(imgname=='#arrow3'){$(imgname).attr('src','css/images/arrow_unclick.png');}
    if(imgname=='#arrow4'){$(imgname).attr('src','css/images/arrow_unclick.png');}
    if(imgname=='#arrow5'){$(imgname).attr('src','css/images/arrow_unclick.png');}
    if(imgname=='#arrow6'){$(imgname).attr('src','css/images/arrow_unclick.png');}
    if(imgname=='#arrow7'){$(imgname).attr('src','css/images/arrow_unclick.png');}
    if(imgname=='#arrow8'){$(imgname).attr('src','css/images/arrow_unclick.png');}
    if(imgname=='#arrow9'){$(imgname).attr('src','css/images/arrow_unclick.png');}
    if(imgname=='#arrow10'){$(imgname).attr('src','css/images/arrow_unclick.png');}
    if(imgname=='#arrow11'){$(imgname).attr('src','css/images/arrow_unclick.png');}
    if(imgname=='#arrow12'){$(imgname).attr('src','css/images/arrow_unclick.png');}
    if(imgname=='#arrow13'){$(imgname).attr('src','css/images/arrow_unclick.png');}
    if(imgname=='#arrow14'){$(imgname).attr('src','css/images/arrow_unclick.png');}
    if(imgname=='#arrow15'){$(imgname).attr('src','css/images/arrow_unclick.png');}
    if(imgname=='#arrow16'){$(imgname).attr('src','css/images/arrow_unclick.png');}
    if(imgname=='#arrow17'){$(imgname).attr('src','css/images/arrow_unclick.png');}
    if(imgname=='#arrow18'){$(imgname).attr('src','css/images/arrow_unclick.png');}
    if(imgname=='#arrow19'){$(imgname).attr('src','css/images/arrow_unclick.png');}
    if(imgname=='#arrow20'){$(imgname).attr('src','css/images/arrow_unclick.png');}
    if(imgname=='#arrow21'){$(imgname).attr('src','css/images/arrow_unclick.png');}
    if(imgname=='#arrow22'){$(imgname).attr('src','css/images/arrow_unclick.png');}
    if(imgname=='#arrow23'){$(imgname).attr('src','css/images/arrow_unclick.png');}
    if(imgname=='#arrow24'){$(imgname).attr('src','css/images/arrow_unclick.png');}
    if(imgname=='#arrow25'){$(imgname).attr('src','css/images/arrow_unclick.png');}
    if(imgname=='#arrow26'){$(imgname).attr('src','css/images/arrow_unclick.png');}
    if(imgname=='#arrow27'){$(imgname).attr('src','css/images/arrow_unclick.png');}
    if(imgname=='#arrow28'){$(imgname).attr('src','css/images/arrow_unclick.png');}
    if(imgname=='#arrow29'){$(imgname).attr('src','css/images/arrow_unclick.png');}
    
}