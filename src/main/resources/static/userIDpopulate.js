
$( document ).ready(function() {
    var url = window.location;

    // GET REQUEST
    $ ("#useridname").focusin(function(){
        ajaxget();
    });

    // DO GET
    function ajaxget(){
        $.ajax({
            type : "GET",
            url : "http://localhost:8080/user/userId",
            success: function(data){
                console.log("Success");
                var dataLen = data.length;
                for (i=0; i<dataLen; i++) {
                    $('#names').append('<option value="' + data[i] + '">' +  '</option>');
                }
            },
            /*error : function(e) {
                $("#getResultDiv").html("<strong>Error</strong>");
                console.log("ERROR: ", e);
            }*/
        });
    }
})