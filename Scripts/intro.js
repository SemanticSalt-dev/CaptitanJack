document.getElementById('date').innerHTML = new Date().toDateString();
window.onload = function() {

document.getElementById("random1").onclick = function() {
         document.body.style.backgroundColor = "#"+((1<<24)*Math.random()|0).toString(16);
       };
};
