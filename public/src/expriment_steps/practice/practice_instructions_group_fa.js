var practice_instructions_texts = {
	zeroth_page:
	"<div class= 'instruction'> <p>From here on in, you will do 12 trials of the Practice and you will be informed when a response is correct and when it is incorrect or too late.</p>"+
"<p>Thereafter you will proceed with the proper game, which is divided in 3 parts. You can take a break for 1 minute between each part.</p>"+
"<p> Your total winnings will be counted and you will get paid at the end of the experiment with a minimum of 5$.</p> </div>",
	welcome_page :  
		"<h1 class= 'instruction' style = 'font-size: xx-large' dir='rtl'>بیایید تمرین کنیم! &#128170;</h1> <p>برای ادامه گزینه‌ی “NEXT” را انتخاب کنید.</p>",


	first_page : 
		"<p class= 'instruction' dir='rtl'> در این‌ جدول تصویرهایی که در حین مرحله تمرینی خواهید دید به همراه بهترین استراتژی مربوط به آن‌ها، قرار داده شده است.<br>"+ 
		" البته در طول بازی اصلی تصاویر متفاوت دیگری را مشاهده خواهید کرد. <br> توجه داشته باشید که وقتی به بهترین نتیجه خواهید رسید که بهترین استراتژی را انتخاب کنید.</p>" +
		"<img src='../img/New_inst_images/practice1.jpg' width='70%' height='70%'>",
		// "<table style='margin-left:auto;margin-right:auto;table-layout:fixed !important; width:50% ;border-spacing:1em;'><tr>" +
		// "<td dir='rtl'> تصویر </td> "+ "<td dir='rtl'> بهترین استراتژی مربوط به تصویر</td>" + "<td dir='rtl'> نتیجه‌ای که از بهترین استراتژی به‌دست می‌آید </td>" +
		// "</tr><tr>" +
		// "<td> <img src = '../img/stim/f1_1.png' width='80' height='80'> </td>" +
		// "<td> <img src = '../img/doing.png' width='100' height='80'></td>" +
		// "<td style='font-size:15px;'> &#9989;&#128176;&#9989; or &#x2796;</td>" +
		// "</tr><tr>" +
		// "<td> <img src = '../img/stim/f1_2.png' width='80' height='80'></td>" +
		// "<td> <img src = '../img/holding.png' width='100' height='80'></td>" +
		// "<td style='font-size:15px;'> &#9989;&#128176;&#9989; or &#x2796;</td>" +
		// "</tr><tr>" +
		// "<td > <img src = '../img/stim/f1_3.png' width='80' height='80'> </td>" +
		// "<td> <img src = '../img/doing.png' width='100' height='80'></td>" +
		// "<td style='font-size:15px;'> &#10060;&#128184;&#10060; or &#x2796;</td>" +
		// "</tr><tr>" +
		// "<td > <img src = '../img/stim/f1_4.png' width='80' height='80'> </td>" + 
		// "<td> <img src = '../img/holding.png' width='100' height='80'></td>" +
		// "<td style='font-size:15px;'> &#10060;&#128184;&#10060; or &#x2796;</td>" +
		// "</tr></table>",


	first_prime_page : 
		"<p style='font-size:60px'> &#10071; </p>" + 
		"<p class= 'instruction'> <b>در طول بازی واقعی تصاویر متفاوت دیگری را مشاهده خواهید کرد.	</b> </p>",
	first_zegond_page: "<div  class= 'instruction' dir='rtl'></p>لطفاً توجه داشته باشید:<p> " + 
	"<p>لطفاً توجه داشته باشید که اگر به صورت تصادفی پاسخ دهید، همیشه یک کلید را فشار دهید یا هرگز پاسخی ندهید، ما نمی‌توانیم به شما پولی بابت انجام آزمایش پرداخت کنیم.</p> <p>برای دریافت پاداش بازی لازم است که در هر 2 آزمون ( بازی تک‌نفره و بازی گروهی) شرکت کنید.</p> </div>",
	
	second_page: 		"<div class= 'instruction' dir='rtl'> <p>در طول بازی گروهی می‌توانید قبل از هر انتخاب با هم‌گروهیتان مشورت کنید. هرکدام از شما یک کی‌بورد در اختیار دارید که می‌توانید از آن استفاده کنید. </p>"+
    // "<p>اگر هر یکی از دو نفر از افراد تیم کلید چپ یا راست را فشار دهد نتیجه تیم همان کلید چپ یا راستی است که فشار داده شده است.</p>"+
    "<p> به محض این‌که یکی از دو نفر از افراد تیم یکی از کلیدهای مربوطه را فشار دهد آن کلید به‌عنوان انتخاب گروه ثبت می‌شود. اگر در موعد مقرر (1 ثانیه) هیچ‌کدام از افراد کاری انجام ندهد، به منزله‌ی تصمیم بر خودداری از انجام کار تلقی می‌شود.</p> </div>",

	third_page: 
		"<h1 class= 'instruction' style = 'font-size: xx-large' >آماده‌اید؟ 	&#128170;</h1>  <p dir='rtl'>برای ادامه گزینه‌ی “NEXT” را انتخاب کنید.</p>"
  
}

var practice_instruction = {
	type: 'instructions',
	pages: [
		// practice_instructions_texts.zeroth_page,
		practice_instructions_texts.welcome_page,
		practice_instructions_texts.first_page,
		practice_instructions_texts.second_page,
		// practice_instructions_texts.first_prime_page,
		practice_instructions_texts.first_zegond_page,
		practice_instructions_texts.third_page,
	],
	show_clickable_nav: true,
	show_page_number: true,
	data: {},
	on_finish: function() {
		jsPsych.data.addDataToLastTrial({
			exp_stage:"practice_start",
			// primary_key: subjectId + '_' + weekId + '_' + expId + '_' + data.trial_index,
			exp_part: "practice"
		})
	}
}