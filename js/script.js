// Display searchBox
function displayForm(){
    $(".arouseSearchButton").animate({
        right: 5
    },700);
    setTimeout(function(){
        $(".searchForm").show();
        $(".arouseSearchButton").hide();
    },400);
}

//Display search results
// let arr = ["French","English","Chinese","Japanese","Indian","Korean","Spanish",
// "Malaysian","German","Russian"];

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
// var opDic = {};
function generateBox(boxContent){
    $('.result').hide();
    let resultList = document.querySelector(".result");
    // var div=document.createElement('div');
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

var queryVaribale={language:"",languageCode:null};
var queryResult={};

function getOptions(){
   options.forEach(element=>{
       getQueryVaribale(element);
       queryAPI(queryVaribale.language);
   })
   console.log(queryResult);
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
        writable: false
      });
    })
    .catch((error) => {
      console.error(error);
    });
}