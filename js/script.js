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
let arr = ["French","English","Chinese","Japanese","Indian","Korean","Spanish",
"Malaysian","German","Russian"]

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

function getOptions(){
    console.log(options);
    return options;
}