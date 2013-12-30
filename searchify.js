$(document).ready(function(){

https://www.google.com/#q=test
https://www.google.com/#q=test+site:lifehacker.com

$("#googleField").keydown(function(e){
	if(e.keyCode === 13) {
		this.google = document.getElementById("googleField").value;
		if (this.google === "" || this.google === "google search..." || this.google === " ") {
			alert("Please enter a search term!");
			}
		else {
			window.open("https://www.google.com/#q=" + this.google);
			}
	} else{}
	});	

$("#googleSearch").click(function(){
		this.google = document.getElementById("googleField").value;
		if (this.google === "" || this.google === "google search..." || this.google === " ") {
			alert("Please enter a search term!");
			}
		else {
			window.open("https://www.google.com/#q=" + this.google);
			}
	});

$('#googleField').data('defaultValue','google search...').focus(function () {
	if (this.value === $(this).data('defaultValue'))
		this.value = "";
	}).blur(function () {
		if (!this.value.length) this.value = $(this).data('defaultValue');
	}).blur();	

	
	
	
$("#bingField").keydown(function(e){
	if(e.keyCode === 13) {
		this.bing = document.getElementById("bingField").value;
		if (isNaN(this.bing)) {
			alert("Please enter a search term!");
			}
		else {
			window.open("http://www.bing.com/search?q=" + this.bing);
			}
	} else{}
	});	

$("#bingSearch").click(function(){
		this.bing = document.getElementById("bingField").value;
		if (isNaN(this.bing)) {
			alert("Please enter a search term!");
			}
		else {
			window.open("http://www.bing.com/search?q=" + this.bing);
			}
	});

$('#bingField').data('defaultValue','bing search...').focus(function () {
	if (this.value === $(this).data('defaultValue'))
		this.value = "";
	}).blur(function () {
		if (!this.value.length) this.value = $(this).data('defaultValue');
	}).blur();	
});