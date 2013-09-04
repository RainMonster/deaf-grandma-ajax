$(document).ready(function() {

  $('form').on('submit', function(e){
    console.log("In submit");
    e.preventDefault();
    
    $.ajax({
      url: this.action,
      type: this.method,
      data: $(this).serialize()
    }).done(function(server_data){
      console.log("success: " + server_data);
      $("#say").html(server_data);
    }).fail(function(){
      console.log("fail");
    });
  
  });
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
});
