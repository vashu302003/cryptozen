
const api_url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc"; 
async function getUser() { 


const response = await fetch(api_url); 


const data = await response.json(); 
console.log(data);
// var imgData = document.getElementById("img-data");
// imgData.src = data[0].image;
// var CoinName = document.getElementById("coin-name");
// CoinName.innerHTML = data[0].name;

// console.log(data[0]); 
// var CurrPrice = document.getElementById("curr-price");
// var Low24h = document.getElementById("low_24h");
// var High24h = document.getElementById("high_24h");
// CurrPrice.innerHTML = data[0].current_price;
// Low24h.innerHTML = data[0].low_24h;
// High24h.innerHTML = data[0].high_24h;

var curr_bitcoin = document.getElementById("curr_bitcoin");
var curr_ethereum = document.getElementById("curr_ethereum");
var curr_tether = document.getElementById("curr_tether");
var curr_binancecoin = document.getElementById("curr_binancecoin");


var price_change_percentage_bitcoin = document.getElementById("price_change_percentage_bitcoin");
var price_change_percentage_ethereum = document.getElementById("price_change_percentage_ethereum");
var price_change_percentage_tether = document.getElementById("price_change_percentage_tether");
var price_change_percentage_binancecoin = document.getElementById("price_change_percentage_binancecoin");

var bitcoin_img = document.getElementById("bitcoin_img");
var ethereum_img = document.getElementById("ethereum_img");
var tether_img = document.getElementById("tether_img");
var binancecoin_img = document.getElementById("binancecoin_img");


curr_bitcoin.innerHTML = "$ " +  data[0].current_price;
curr_ethereum.innerHTML = "$ " +  data[1].current_price;
curr_tether.innerHTML = "$ " +  data[2].current_price;
curr_binancecoin.innerHTML = "$ " +  data[3].current_price;



bitcoin_img.src = data[0].image;
ethereum_img.src = data[1].image;
tether_img.src = data[2].image;
binancecoin_img.src = data[3].image;

price_change_percentage_bitcoin.innerHTML = data[0].price_change_percentage_24h + "%";
price_change_percentage_ethereum.innerHTML = data[1].price_change_percentage_24h + "%";
price_change_percentage_tether.innerHTML = data[2].price_change_percentage_24h + "%";
price_change_percentage_binancecoin.innerHTML = data[3].price_change_percentage_24h + "%";

var coin_name = document.getElementsByClassName("coin_name");
var curr_price = document.getElementsByClassName("curr_price");
var crypto_img = document.getElementsByClassName("crypto_img");
var low_24h = document.getElementsByClassName("low_24h");
var p_change_per = document.getElementsByClassName("p_change_per");
var market_cap_rank = document.getElementsByClassName("market_cap_rank");
var coin_name_cap = document.getElementsByClassName("coin_name_cap");
var market_cap = document.getElementsByClassName("market_cap_");
var img_cap = document.getElementsByClassName("img_cap");
var cnt  = 4;
for(var i=0; i<4; i++){
    coin_name[i].innerHTML = data[cnt].name;
    curr_price[i].innerHTML = "$ " + data[cnt].current_price;
    crypto_img[i].src = data[cnt].image;
    low_24h[i].innerHTML = "$ " + data[cnt].low_24h;
    p_change_per[i].innerHTML = data[cnt].price_change_percentage_24h + "%";
    cnt++;
}
for(var i=0; i<4; i++){
    market_cap_rank[i].innerHTML = data[i].market_cap_rank;
    coin_name_cap[i].innerHTML = data[i].name;
    market_cap[i].innerHTML = data[i].market_cap;
    img_cap[i].src = data[i].image;
}

setTimeout(getUser, 1000);
}

getUser();