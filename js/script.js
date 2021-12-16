$('.pic').click(function (){
    $('button').removeAttr('disabled')
    $('button').css('cursor', 'pointer')
});
$('button').click(function (){
   //  console.log($('.face-photo')[0].value)
   // $.ajax({
   //     url : "addToBase.php",
   //     method : "POST",
   //     data : {"Name" : $('.person-info')[0].value, "Surname" : $('.person-info')[1].value, "Photo" : $(".face-photo")[0].value},
   //     success : function (data){
   //         console.log(data)
   //     }
   // })

});