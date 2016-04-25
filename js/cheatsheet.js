// document.ready allows you to assign
// events to page elements, so that when
// a user interacts with a page in a given
// way, something happens on-screen
// $(document).ready(function() {
//     $("div").fadeOut(1000);
// });
// in order for anything to happen, the
// programmer must target the page element
// by entering the id, class, or tag name
// in their code. In the above example,
// I am telling the div to fade out.
// Referring to a css element allows the programmer
// to associate an action to that element.

// dotNotation
// $(document).ready(function() {
//     $("div").fadeOut(1000);
// dotNotation allows us to assign actions
// to page elements. In the above example above, I am telling
// all the divs in the page to fade out.

// Linking jquery to html
// <head>
//         <title></title>
//         <script src="js/example.js"</script>
        
//     </head>

// In order for the web browser to read the
// jquery code, we must attach a separatte .js file via the <script> tag.
// alert("Hello")
// alert("Is it me you're looking for?")

$(document).ready(function(){
  $("h1").slideToggle();
  $("h1").slideToggle();

  $("#Link1").click(function(){
  	$("#Link1").fadeOut(5000);
  })


  $("#del").fadeOut(5000);
  $("#del").fadeIn(10000);
  $("#del").css("background-color","blue");
  $("#del").css("color","white");

  $("#column2").css("background-color","pink");
   $("#column2").css("color","green");

  $("#steady").css("background-color","yellow");
  $("#steady").css("color","red");

  // $("#footer").click(function(){
  // 	("#footer").hide;
  // }

//   $("div").
});