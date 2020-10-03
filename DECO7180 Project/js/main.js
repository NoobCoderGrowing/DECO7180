let arr = ["French","Fries","fafeawef","adfewf","qweqwe","wewe","erert"]

function updateResult(query) {
    let resultList = document.querySelector(".result");
    resultList.innerHTML = "";

    arr.map(function(algo){
        query.split(" ").map(function (word){
            if(algo.toLowerCase().indexOf(word.toLowerCase()) != -1){
                resultList.innerHTML += `<li onclick="generateBox(this.innerHTML)" class="list-group-item">${algo}</li>`;
            }
        })
    })
}

function generateBox(boxContent){
    let resultList = document.querySelector(".result");
    var div=document.createElement('div');
    div.classList.add('option');
    div.innerHTML="<p>"+boxContent+"</p>"
    resultList.append(div)
}

{/* <div>
    <p>french<>
</div> */}