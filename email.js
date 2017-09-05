var mail = "gameOfThrones@Season7.com";
var pattern = /\b[w! # $ % & ' * + - / = ? ^ _ ` { | } ~][@][w]\b[\.com]/g 
var ans = mail.match(pattern);

console.log(ans);