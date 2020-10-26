//API part inplemented by Wenjun Yao
var queryVaribale={language:"",languageCode:null};
//use queryResult to get number of people speaking a particualr language in different regions
var queryResult={};
// use totalNumber to get population of each region
var totalNUmber={};

window.onload=getTotalNumber;

//home page js
// Display searchBox
function displayForm(){
    $(".arouseSearchButton").animate({
        right: 5
    },700);
    setTimeout(function(){
        $(".searchForm").show();
        $(".arouseSearchButton").hide()
    },400);
}

//option array
let arr = ["French","English","Mandarin","Japanese","Italian","Korean","Spanish",
"Arabic","German","Russian"];

var options = [];

function updateResult(query) {
    let resultList = document.querySelector(".result");
    resultList.innerHTML = "";

    if (query === ""){
        return;
    }
    $('.result').show();
    arr.map(function(algo){
        query.split(" ").map(function (word){
            if(algo.toLowerCase().indexOf(word.toLowerCase()) != -1){
                resultList.innerHTML += `<li onclick="generateBox(this.innerHTML)" class="list-group-item">${algo}</li>`;
            }
        })
    })
}

var indexOfLang = 0;
//  Arjun Mahishi.(2017) Real-time search using basic JavaScript. https://codingislove.com/realtime-search-javascript/
function generateBox(boxContent){
    $('.result').hide();
    let resultList = document.querySelector(".result");
    var div = $('#optionsBox');
    var word = boxContent+"";
    div.append('<p class="options" id="option-' +indexOfLang+'-'+ word+'" onclick = "deleteOption(this)"></p>');
    Array.prototype.indexOf = function(val) {
        for (var i = 0; i < this.length; i++) {
         if (this[i] == val) {
             return i;
         }
     }
     return -1;
    };
    Array.prototype.remove = function(val) {
        var index = this.indexOf(val);
        if (index > -1) {
            this.splice(index, 1);
        }
    }
    // opDic[indexOfLang] = word;
    var langOption = $('#option-' + indexOfLang + '-'+word);
    document.getElementById('option-' + indexOfLang + '-' + word).addEventListener("click", function(){
        console.log(options);
        arr.push(word);
        options.remove(word);
    });

    arr.remove(boxContent);
    langOption.text(boxContent + " x");
    langOption.css('width', 88);
    langOption.css('height', 20);
    langOption.css('margin-right', 15);
    langOption.css('border-style', 'solid');
    langOption.css('border-width', '2px');
    langOption.css('text-align', 'center');
    langOption.css('border-radius', '10px');
    langOption.css('padding-left', '10px');
    langOption.css('padding-right', '3px');
    langOption.css('float', 'left');
    langOption.hover(function(){
        langOption.css("background-color","rgb(190, 190, 190)");
        langOption.css('width', 90);
        },function(){
            langOption.css("background-color","white");
            langOption.css('width', 88);
            langOption.css('height', 20);
      });
    indexOfLang++;
    options.push(word);
    console.log(options);
    $("#tags").val("");
}

function deleteOption(option){   
    Array.prototype.indexOf = function(val) {
        for (var i = 0; i < this.length; i++) {
         if (this[i] == val) {
             return i;
         }
     }
     return -1;
    };
    Array.prototype.remove = function(val) {
        var index = this.indexOf(val);
        if (index > -1) {
            this.splice(index, 1);
        }
    }
    // options.remove();

    option.remove();
}

function deleteLangInList(word){

}





function getQueryVaribale(element){
    switch(element){
        case "French":
            queryVaribale.language=element;
            queryVaribale.languageCode=2101;
            break
        case "English":
            queryVaribale.language=element;
            queryVaribale.languageCode=1201;
            break
        case "Mandarin":
            queryVaribale.language=element;
            queryVaribale.languageCode=7104;
            break
        case "Japanese":
            queryVaribale.language=element;
            queryVaribale.languageCode=7201;
            break
        case "Korean":
            queryVaribale.language=element;
            queryVaribale.languageCode=7301;
            break
        case "Spanish":
            queryVaribale.language=element;
            queryVaribale.languageCode=2303;
            break
        case "German":
            queryVaribale.language=element;
            queryVaribale.languageCode=1301;
            break
        case "Russian":
            queryVaribale.language=element;
            queryVaribale.languageCode=3402;
            break
        case "Italian":
            queryVaribale.language=element;
            queryVaribale.languageCode=2401;
            break
        case "Arabic":
            queryVaribale.language=element;
            queryVaribale.languageCode=4202;
            break
    }
}

function queryAPI(language){
    fetch(
        `http://stat.data.abs.gov.au/sdmx-json/data/ABS_C16_T09_SA/3.${queryVaribale.languageCode}.3.SA4.301+302+303+304+305/all?startTime=2016&endTime=2016`,{
        method:'GET',
      }
    ).then((response)=>response.json()).then(data=>{

     if(queryResult[language]!=null){
         return;
     }

     Object.defineProperty(queryResult, language, {
        value: {
            'BrisbaneEast':data.dataSets[0].series["0:0:0:0:0"].observations[0]['0'],
            'BrisbaneNorth':data.dataSets[0].series["0:0:0:0:1"].observations[0]['0'],
            'BrisbaneSouth':data.dataSets[0].series["0:0:0:0:2"].observations[0]['0'],
            'BrisbaneWest':data.dataSets[0].series["0:0:0:0:3"].observations[0]['0'],
            'BrisbaneInnerCity':data.dataSets[0].series["0:0:0:0:4"].observations[0]['0'],
        },
        writable: true,
        enumerable: true
      });
    })
    .catch((error) => {
      console.error(error);
    });
}



// get population of each region
// window.onload = getTotalNumber();

function getTotalNumber(){
    fetch(
        "http://stat.data.abs.gov.au/sdmx-json/data/ABS_C16_T09_SA/3.TOT.3.SA4.301+302+303+304+305/all?startTime=2016&endTime=2016",{
        method:'GET',
      }
    ).then((response)=>response.json()).then(data=>{

     Object.defineProperties(totalNUmber, {
        BrisbaneEast: {
          value:  data.dataSets[0].series["0:0:0:0:0"].observations[0]['0'],
          writable: true,
          enumerable: true
        },
        BrisbaneNorth: {
            value: data.dataSets[0].series["0:0:0:0:1"].observations[0]['0'],
            writable: true,
            enumerable: true
          },
          BrisbaneSouth: {
            value: data.dataSets[0].series["0:0:0:0:2"].observations[0]['0'],
            writable: true,
            enumerable: true
          },
          BrisbaneWest: {
            value: data.dataSets[0].series["0:0:0:0:3"].observations[0]['0'],
            writable: true,
            enumerable: true
          },
          BrisbaneInnerCity: {
            value: data.dataSets[0].series["0:0:0:0:4"].observations[0]['0'],
            writable: true,
            enumerable: true
          }
      });
    })
    .catch((error) => {
      console.error(error);
    });
}

function getOptions(){
    options.forEach(element=>{
        getQueryVaribale(element);
        queryAPI(queryVaribale.language); 
    });
    
     localStorage.setItem('newQueryResult',JSON.stringify(queryResult));
     localStorage.setItem('newTotalNumber',JSON.stringify(totalNUmber));
     var a=localStorage.getItem('newQueryResult');
     if(a==='{}'){
         return;
     }else{
     }
     window.location='./map/index.html';
 }

    


function changeImage(element){
    console.log(element.id);
    var elementId =  $('#'+ element.id);
    elementId.css('right', '-3.5px');
    elementId.css('width', '12px');

    if (element.id == 'button1'){
        console.log('right');
        $('#image1').show();
        $('#image2').hide();
        $('#image3').hide();
        $('#image4').hide();
        $('#button2').css('right', '-2px');
        $('#button2').css('width', '8px');
        $('#button3').css('right', '-2px');
        $('#button3').css('width', '8px');
        $('#button4').css('right', '-2px');
        $('#button4').css('width', '8px');

    } else if (element.id == 'button2'){
        $('#image2').show();
        $('#image1').hide();
        $('#image3').hide();
        $('#image4').hide();
        $('#button1').css('right', '-2px');
        $('#button1').css('width', '8px');
        $('#button3').css('right', '-2px');
        $('#button3').css('width', '8px');
        $('#button4').css('right', '-2px');
        $('#button4').css('width', '8px');

    } else if (element.id == 'button3'){
        $('#image3').show();
        $('#image2').hide();
        $('#image1').hide();
        $('#image4').hide();
        $('#button2').css('right', '-2px');
        $('#button2').css('width', '8px');
        $('#button1').css('right', '-2px');
        $('#button1').css('width', '8px');
        $('#button4').css('right', '-2px');
        $('#button4').css('width', '8px');

    } else {
        $('#image4').show();
        $('#image2').hide();
        $('#image3').hide();
        $('#image1').hide();
        $('#button2').css('right', '-2px');
        $('#button2').css('width', '8px');
        $('#button3').css('right', '-2px');
        $('#button3').css('width', '8px');
        $('#button1').css('right', '-2px');
        $('#button1').css('width', '8px');

    }

}
