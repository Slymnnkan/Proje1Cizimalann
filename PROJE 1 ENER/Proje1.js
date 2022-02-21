
$(document).ready(function(e) {
    
	$("#liste .tasi").draggable({
	
		
		revert:true,
	});


  $(".sepet").droppable({
		
		drop:function(event,ui){
			
			
			var nesne =ui.draggable;
			var kopya=nesne.clone();
			kopya.prepend("<p class='kaldir'>KALDIR</p>");
			kopya.attr('style','');
			
			
      kopya.find('.kaldir').click(function(){
				
        console.log(kopya.html());
				kopya.closest('.tasi').remove();
		
      });
			
			
			$(this).append(kopya);
      	}
		
	});
  });


  $(document).ready(function(e) {
    
$(document).ready( function ()  {  var toggle = 1;
  $('#buton1').click( function () {
      toggle++;
      if ( (toggle%2)==0){
          $('#liste img').css( {'transform': 'rotate(90deg)'});
      }
      else{
          $('#.liste').css({'transform': 'rotate(0deg)'});
      }
  });
  });
  $(document).ready( function ()  {  var toggle = 1;
  $('#buton1').click( function () {
      toggle++;
      if ( (toggle%2)==0){
          $('#liste img').css( {'transform': 'rotate(180deg)'});
      }
      else{
          $('#.liste').css({'transform': 'rotate(0deg)'});
      }
  });
  });
   $(document).ready( function ()  {  var toggle = 1;
  $('#buton1').click( function () {
      toggle++;
      if ( (toggle%2)==0){
          $('#liste img').css( {'transform': 'rotate(270deg)'});
      }
      else{
          $('#.liste').css({'transform': 'rotate(0deg)'});
      }
  });
  });


  $(document).ready(function(){
  $("#buton3").click(function(){
    $("#liste img").css("width", "105");
  });
});
$(document).ready(function(){
  $("#buton2").click(function(){
    $("#liste img").css("width", "40");
  });
});




$("#buton4").click(function(){
    $("#liste img").css("width", "65");
    $('#liste img').css({'transform': 'rotate(0deg)'});
  });
});


function bas(){
  
  window.alert("Sembollerin konum sıralamaları 1'den başlayıp soldan sağa ve yukarıdan aşağı şeklindedir!" );
  let age = prompt('En çok hangi konumdaki sembolü kullandınız? Sayı giriniz.', " ");

alert(`En çok ${age} konumlu sembolü kullandınız.`); 
}
