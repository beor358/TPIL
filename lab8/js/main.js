( function() {
	$( function() {
      $( "#tabs" ).tabs();
    } 
  );
  $(document).ready( function() {
    $("a.animals").each( function() {
      $("<img/>").attr("src", $(this).attr('href')).load();
      $(this).colorbox({
        html: '<img src="' + $(this).attr('href') + '" style="width: 900px; height: 600px" />',
        rel: 'animals'
      });
    });
  });
  })();