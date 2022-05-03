/*kacian Richards 1803752 */
var name, fname, lname;
fname = document.getElementById('fname').value;
lname = document.getElementById('lname').value;
/*email alert on focus-done */
function emailalert() {
     window.alert('Example: abc@email.com');
}
/*display all button function*/
function DisplayAll() {
     var age;
     var a, b, c;
     var today = new Date;
     var thisyear = today.getFullYear();
     a = document.getFullYear('dob').value;
     age = thisyear - a;
     document.getElementById("date").innerHTML = "" + today + "";
     b = document.getElementById('final').innerHTML;
     BMIcheck();

}
/*BMi submit function */
function BMIcheck() {
     var weight = document.getElementById('weight').value;
     var height = document.getElementById('height').value;
     var BMI;
     BMI = (weight * 703) / (height * height);
     BMI = parseFloat(BMI);
     window.alert(BMI);
     if (BMI <= 18.5) {
          document.write("<p>Underweight</p>");
     }
     if (BMI > 18.5 && BMI <= 24.9) {
          document.write("<p>healthy weight</p>");
     }
     if (BMI > 25.0 && BMI < 29.9) {
          document.write("<p>Overweight</p>");
     }
     if (BMI > 30.0) {
          document.write("<p>Obese</p>");
     }
}