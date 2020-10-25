$(document).ready(function() {
    
    $(".card img, #show-popup .close-button a").click(function(event) {
		$("body").toggleClass("show-properties-popup");
		event.preventDefault();
    });

    // var x = document.getElementsByClassName("card");
    // x.onclick = function(){
    //     alert("成功");
    //     $("body").toggleClass("show-properties-popup");
    // $(function(){
    //     $('.card').bind('click', function(event){
    //         $("body").toggleClass("show-properties-popup");
    //         event.preventDefault();
    //         alert('goo');
    //     })
    // });

    
    var peopleNum = 1;
    var roomNum = 1;
    
    $( "#people-minus" ).click(function() {
        if (peopleNum == 1){
            alert('Number of people is out of range! (1-4)')
        } else{
            peopleNum = peopleNum - 1;
        }
        var info = '$' + peopleNum * 10 + '<br>' + peopleNum + 'people';
        $( ".people p" ).html(info);
      });


    $( "#people-plus" ).click(function() {
        if (peopleNum == 4){
            alert('Number of people is out of range! (1-4)')
        } else{
            peopleNum = peopleNum + 1;
        }
        var info = '$' + peopleNum * 10 + '<br>' + peopleNum + 'people';
        $( ".people p" ).html(info);
      });

    $( "#room-minus" ).click(function() {
        roomNum = roomNum - 1;
        if (roomNum == 1){
            var roomInfo = '$' + roomNum * 200 + '<br>' + roomNum + 'room';
        } else if (roomNum > 1) {
            var roomInfo = '$' + roomNum * 200 + '<br>' + roomNum + 'rooms';
            
        } else if (roomNum == 0){
            alert('Number of room is out of range! (1-2)');
            var roomInfo = '$' + roomNum * 200 + '<br>' + roomNum + 'room';
        }
        $( ".room p" ).html(roomInfo);
      });


    $( "#room-plus" ).click(function() {
        if (roomNum == 2){
            alert('Number of room is out of range! (1-2)');
        } else{
            roomNum = roomNum + 1;
        }
        var roomInfo = '$' + roomNum * 200 + '<br>' + roomNum + 'rooms';
        $( ".room p" ).html(roomInfo);
      });

      $( "#book-button" ).click(function() {
        alert('Book Successfully!');
      });


});
