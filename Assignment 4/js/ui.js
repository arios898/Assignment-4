$(document).ready(function() {
  var max_fields      = 20; //maximum input boxes allowed
  var wrapper   		= $(".input_fields_wrap"); //Fields wrapper
  var add_button      = $(".add_ingredient_button"); //Add button ID

  var x = 1; //initlal text box count
  $(add_button).click(function(e) { //on add input button click
    e.preventDefault();
    if (x < max_fields) { //max input box allowed
      x++; //text box increment
      $(wrapper).append(
        '<div class="input-group mb-3"><input placeholder="Add Ingredient" type="text" name="mytext[]"  class="form-control col s10"><div class="input-group-append col s2"><button  style="border:solid 2px black; background-color: darkred; color:black;"class="btn  remove_field" type="button">X</button></div></div>'); //add input box
    }
  });

  $(wrapper).on("click", ".remove_field", function(e) { //user click on remove text
    e.preventDefault();
    $(this).parent('div').parent('div').remove();
    x--;
  })
});
