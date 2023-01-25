"use strict";

/**
 * Scrembl JavaScript (c) Caesura Media Limited, 2023
 */
$(document).ready(function() {
	if (document.querySelector ('#todays-date-so-it-is')) {
		document.querySelector ('#todays-date-so-it-is').innerHTML = new Date().getFullYear();
	}
	var now         = new Date();
	var epochOffset = Math.floor(now/8.64e7) - 19000;
	var hex         = epochOffset.toString(16)
	var hex_arr     = hex.split ('');
	var base64      = Base64.encode(hex); // <script src="https://cdn.jsdelivr.net/npm/js-base64@2.5.2/base64.min.js"></script>

	document.querySelector ('#copy-scrembled'  ).classList.add ('hidden');
	document.querySelector ('#copy-unscrembled').classList.add ('hidden');
	document.querySelector ('#copy-unscrembled').style.color   ='black';
	document.querySelector ('#copy-scrembled'  ).style.color   ='black';
	document.querySelector ('#reload-icon'     ).classList.add ('hidden');

	// Scremble.
	//
	document.querySelector ('#scrembl').onclick = function (event) {
		document.querySelector ('#copy-scrembled'  ).style.color ='black';
		var input_text  = document.querySelector ('#input-text').value.trim();
		if (!input_text) {
			return false;
		}
		var chars       = input_text.split('');
		var output_text = "^";
		var offset      = 0;
		for (var i=0; i < chars.length; i++) {
			switch (i) {
				case 0  : offset = parseInt (hex_arr[0], 16);
				case 1  : offset = parseInt (hex_arr[1], 16);
				case 2  : offset = parseInt (hex_arr[2], 16);
				case 3  : offset = parseInt (hex_arr[3], 16);
				default : offset = 0;
			}
			var asci = (parseInt (offset + input_text.charCodeAt(i)) + parseInt (epochOffset)).toString(16);
			output_text += asci + "%";
		}
		output_text = output_text.replace (/\%$/, '\$') + base64;
		document.querySelector ('#output-text').value = output_text;
		document.querySelector ('#copy-scrembled'  ).classList.remove ('hidden');
		document.querySelector ('#reload-icon').classList.remove ('hidden');
	}

	// UnScremble.
	//
	document.querySelector ('#unscrembl').onclick = function (event) {
		document.querySelector ('#copy-unscrembled').style.color ='black';
		var input_text  = document.querySelector ('#output-text').value.trim();
		if (!input_text) {
			return false;
		}
		var enc_base64      = input_text.replace(/^.*\$/, '');
		if (enc_base64 !== base64) {
			document.querySelector ('#unscrembled-text').value = "Out of date Scremblr, sorry!";
			document.querySelector ('#copy-unscrembled').classList.add ('hidden');
			document.querySelector ('#reload-icon').classList.remove ('hidden');
		} else {
			var asciis      = input_text.replace(/^\^/, '').replace(/\$.+$/, '').split('\%');
			var output_text = "";
			var offset      = 0;
			for (var i=0; i < asciis.length; i++) {
				switch (i) {
					case 0  : offset = parseInt (hex_arr[0], 16);
					case 1  : offset = parseInt (hex_arr[1], 16);
					case 2  : offset = parseInt (hex_arr[2], 16);
					case 3  : offset = parseInt (hex_arr[3], 16);
					default : offset = 0;
				}
				var ch = String.fromCharCode((parseInt (asciis[i], 16) - offset - parseInt (epochOffset)));
				if (!ch.match(/^[\P{Cc}\P{Cn}\P{Cs}]+$/gu)) {
					output_text = "Out of date Scremblr, sorry!";
					break;
				}
				output_text += ch;
			}
			document.querySelector ('#unscrembled-text').value = output_text;
			document.querySelector ('#copy-unscrembled').classList.remove ('hidden');
			document.querySelector ('#reload-icon').classList.remove ('hidden');
		}
	}
	document.querySelector ('#copy-scrembled').onclick = function (event) {
		var copyText = document.getElementById("output-text");
		copyText.select();
		copyText.setSelectionRange(0, 99999);
		navigator.clipboard.writeText(copyText.value);
		document.querySelector ('#copy-scrembled').style.color ='#8fcae4';
		var scr_tooltip = document.getElementById("copy-scrembled-scr-tooltip");
		scr_tooltip.innerHTML = "Copied to Clipboard!";
	}
	document.querySelector ('#copy-scrembled').onmouseout = function (event) {
		var scr_tooltip = document.getElementById("copy-scrembled-scr-tooltip");
		scr_tooltip.innerHTML = "Copy to clipboard";
	}

	document.querySelector ('#copy-unscrembled').onclick = function (event) {
		var copyText = document.getElementById("unscrembled-text");
		copyText.select();
		copyText.setSelectionRange(0, 99999);
		navigator.clipboard.writeText(copyText.value);
		document.querySelector ('#copy-unscrembled').style.color ='#8fcae4';
		var scr_tooltip = document.getElementById("copy-unscrembled-scr-tooltip");
		scr_tooltip.innerHTML = "Copied to Clipboard!";
	}
	document.querySelector ('#copy-unscrembled').onmouseout = function (event) {
		var scr_tooltip = document.getElementById("copy-unscrembled-scr-tooltip");
		scr_tooltip.innerHTML = "Copy to clipboard";
	}
	document.querySelector ('#reload-icon').onclick = function (event) {
		document.getElementById("unscrembled-text").value = "";
		document.getElementById("output-text"     ).value = "";
		document.getElementById("input-text"      ).value = "";
		document.querySelector ('#reload-icon').classList.add ('hidden');
		document.querySelector ('#copy-scrembled'  ).classList.add ('hidden');
		document.querySelector ('#copy-unscrembled').classList.add ('hidden');
	}
});
