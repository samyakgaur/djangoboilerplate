/*$(function(){
    // check if the keyboard is being used execute the following code 
    // watch the #search box
    $('#search').keyup(function() {
        if (!this.value.trim()) {
            $('#search-results').html('');
            return;
        }
        $.ajax({
            type:"POST",
            url: "/search/",
            data:{
                'search_text' : $('#search').val(),
                'csrfmiddlewaretoken' : $("input[name=csrfmiddlewaretoken]").val()
            },
            success: searchSuccess,
            dataType:'html'
        });
    });
});
function searchSuccess(data,textStatus,jqXHR)
{
    $('#search-results').html(data);
}
*/

//Added the code for hide the result when there is no text in textbox
$(function () {
    $('#search').keyup(function () {
        //clear result panel if the value is blank
        if (!this.value.trim()) {
            $('#search-results').html('');
            return;
        }
        $.ajax({
            type: "POST",
            url: "/search/",
            data: {
                'search_text': $('#search').val(),
                'csrfmiddlewaretoken': $("input[name=csrfmiddlewaretoken]").val()
            },
            success: searchSuccess,
            dataType: 'html'
        });
    });
});

function searchSuccess(data, textStatus, jqXHR) {
    $('#search-results').html(data);
}