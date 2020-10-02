// $(function(){
//       $(".arouseSearchButton").click(function(){
//         $(".searchForm").show();
//         $(".arouseSearchButton").hide();
//       })
// })

function displayForm(){
    $(".arouseSearchButton").animate({
        right: 5
    },700);
    
    
    setTimeout(function(){
        $(".searchForm").show();
        $(".arouseSearchButton").hide();
    },400);
    
}
