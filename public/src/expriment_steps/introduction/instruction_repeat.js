var repeat_counts = 0;



var instructions_texts = {
	welcome_page : 
		"<h2 class= 'instruction' style = 'font-size: xx-large' dir='rtl' > <b>بیایید یاد بگیریم که چطور بازی رو انجام بدیم.</b>  &#127891; </h2><p dir='rtl' > برای ادامه گزینه‌ی 'NEXT' را انتخاب کنید.	</p>",
  
	second_page : 
		"<div class= 'instruction' dir='rtl'> <p>در ابتدا باید بگیم که شما قراره این بازی را به 2 شکل انجام بدید:</p> "+
    " <p> ۱بار به‌صورت<b> تکی</b>  و ۱ بار در قالب <b>یک گروه 2 نفره.</b> </p>" + 
    "<p>پس ازتون ممنون می‌شیم با توجه به این‌که الان دارید بازی رو تکی انجام می‌دید یا گروهی، حتما 10 روز بعد برای انجام اون شکل دیگه‌ی بازی در آزمایشگاه حاضر شوید.  </p>"+
    " </div>" 
	// + "<img src='../img/page1.png' width='70%' height='70%'>"
	,
	  
	third_page : 
	"<div class= 'instruction' dir='rtl'> <p>بازی شامل 3 بلوک است و شما در هر بلوک 40 دور تکلیف خود را انجام می‌دهید. </p> "+
	" <p>در شروع هر دور به‌صورت تصادفی یک  <u>عکس‌</u> می‌بینید و با توجه به آن باید تصمیم بگیرید که در ادامه این دور <u>کاری بکنید</u> یا <u>کاری نکنید</u>.</p>"+
	"<p> به‌عبارت دیگر اگر تصمیمتان این بود که کاری بکنید با فشار دادن کلید مناسب از روی کی‌بورد محل <b>دایره مشکی</b> را گزارش کنید. </p> </div>" +
    "  <img src='../img/New_inst_images/page3.jpg' width='100%' height='100%'>",

	forth_page : 
	"<div class= 'instruction' dir='rtl'> <p> در این بازی 4 عکس متفاوت وجود دارد. </p> "+
	"<p>معنی دو تا از این عکس‌ها این است که اگر تصمیم درست بگیرید ( در مرحله بعد کاری بکنید یا نکنید) به احتمال 80 درصد امتیاز می‌گیرید (✅💰✅)، یا به احتمال 20 درصد چیزی به‌دست نمی‌آورید (➖).	</p>" +
	"<p>معنی دوتای دیگر از این عکس‌ها این است که اگر تصمیم درست بگیرید به احتمال 80 درصد چیزی از دست نمی‌دهید (➖)، یا به احتمال 20 درصد امتیاز از دست می‌دهید(❌💸❌). </p>" +
	"<p>* اگر تصمیم اشتباه بگیرید یا در ادامه سمت دایره را اشتباه گزارش کنید، این احتمالات برعکس می‌شود.</p>" +
	"<p>* پس توجه داشته باشید که وقتی به بهترین نتیجه خواهید رسید که بهترین استراتژی را انتخاب کنید و اگر استراتژی شما این بود که کاری کنید باید در ادامه سمت دایره را هم درست گزارش کنید تا به بهترین نتیجه برسید.</p>" +
	"</div>"
	// "<p>این‌ یک نمونه از تصویری است که ممکن است </p>"
	,
	// "<img src = '../img/eighth_3_page.png' width='30%' height='30%'>",

	fifth_page : 
	"<img src='../img/New_inst_images/page5.jpg' width='90%'>",
                 
	sixth_page : 
		"<div class= 'instruction' dir='rtl'> <p>حالا بیایید کمی دقیق‌تر شویم. </p> "+
		" <p>در شروع هر دور یک عکس می‌بینید که در این لحظه نیازی نیست کلیدی را فشار دهید.</p>"+
		"<p> * در واقع این‌جا تصمیم می‌گیرید که در مرحله‌ی بعد کاری بکنید یا کاری نکنید.</p> </div>" + 
		"<p dir='rtl'>این‌ یک نمونه از تصویری است که ممکن است ببینید:</p>"+
  	"<img src='../img/stim/f2_1.png' width='25%' height='25%'>",
  
	seventh_page : 
		"<div class= 'instruction' dir='rtl'><p>بعد از مکثی کوتاه، یک دایره‌ی مشکی خواهید دید که به صورت تصادفی سمت راست یا چپ یک مستطیل قرمز نمایش داده می‌شود.</p>"+
		"<p>با توجه به این‌که در مرحله قبل چه عکسی را دیده باشید و استراتژی بهتر برای آن تصویر چه باشد، این‌جا تصمیمتان را اجرا خواهید کرد.</p>"+
		"<p>در بازی انفرادی، برای انتخاب سمت چپ کلیدF  و برای انتخاب سمت راست از کلیدJ  باید استفاده کنید.</p>"+
		"<p>در بازی گروهی یکی از بازیکنان برای انتخاب سمت چپ کلیدF  و برای انتخاب سمت راست از کلیدJ  باید استفاده کند و بازیکن دیگر برای انتخاب سمت چپ کلیدK  و برای انتخاب سمت راست از کلیدD  باید استفاده کند.</p>" +
		"<p>* اگر می‌خواهید کاری انجام دهید، ۱ ثانیه زمان دارید تا تصمیم خود را عملی کنید. اگر در این 1 ثانیه کاری نکنید، تصور بر این است که شما از پاسخ دادن خودداری کرده اید.</p>"+
		"</div>"+
		"<img src='../img/New_inst_images/page7.jpg' width='40%' height='40%'>",
	eighth_page : 
		"<div class= 'instruction' dir='rtl'> <p>بعد از یک مکث کوتاه، یکی از سه نتیجه‌ی زیر را خواهید دید:</p> </div>"+
    // "<p> برای  نتیجه‌های مربوط به باختن ممکن است نمادهای &#10060;&#128184;&#10060; یا  &#x2796; را دریافت کنید. </p>"+
    // "<p> با انجام کار درست در هنگام ظاهر شدن دایره (یا کلید را فشار دادن یا از پاسخ دادن خودداری کردن) می توانید مطلوب‌ترین نتیجه را به دفعات به‌دست بیاورید .</p></div>" + 

    "<table style='margin-left:auto;margin-right:auto;table-layout:fixed !important; width:650px;border-spacing:3em;' dir='rtl'><tr>" +
    "<td> برد</td> <td style='font-size:30px;'> &#9989;&#128176;&#9989; </td>" +
    "</tr><tr>" +
    "<td>باخت</td> <td style='font-size:30px;'> &#10060;&#128184;&#10060; </td>" +
	"</tr><tr>" +
    "<td s>صفر</td> <td style='font-size:30px;'> &#x2796; </td>" +
    "</tr></table>",
  
	ninth_page : 
		"<img src='../img/New_inst_images/page9.jpg' width='80%' height='80%'>",
	
		ninth_p_page : 
	"<div class= 'instruction' dir='rtl'><p >نتیجه هر دور ( برنده یا بازنده شدن) احتمالاتی است یعنی ممکن است علیرغم تصمیم درست ضرر کنید. </p> " +
	"<p>اما با پیدا کردن بهترین استراتژی برای هر تصویر، می‌توانید احتمال دریافت نتیجه‌ی بهتر را بهینه کنید.</p>" +
	"<p>دقت کنید که برای بعضی از تصاویر استراتژی بهتر «کاری کردن» است و برای برخی دیگر بهترین استراتژی این است که «کاری نکنیم».</p>" +
	"<p>هدف شما در این بازی پیدا کردن و اجرای این استراتژی‌هاست.</p> </div>", 

	tenth_page :  
		"<div class= 'instruction' dir='rtl'> <p> <b>به نکاتی که در ادامه گفته می‌شود توجه کنید: </b></p> </div>"
    // "<p> <b> یعنی گاهی حتی اگر بهترین استراتژی را بدانید، ممکن است باز هم برنده نشوید، یا بازنده شوید.	</b> </p>" +
    // "<p>  با این حال، به یاد داشته باشید که برای هر تصویر یک استراتژی بهتر (یا فشار دادن یک کلید یا خودداری از پاسخ) وجود دارد که از دیگری بهتر است. <p></div>"
	,
  
  
	eleventh_page : 
		"<div class= 'instruction' dir='rtl'> <p>استراتژی مناسب برای هر عکس در طول بازی ثابت خواهد بود و در هر بلوک تغییر نخواهد کرد.</p>"+
    "<p>این بازی آسان نیست. بنابراین ما شما را به سعی‌ و خطا و پیدا کردن بهترین استراتژی تشویق می‌کنیم.</p></div>",

	twelve_page : 
	"<div class= 'instruction' dir='rtl'> <p>لطفاً توجه داشته باشید که هیچ ارتباطی بین چپ یا راست آمدن دایره‌ها و تصاویر وجود ندارد.</p>"+
"</div>",

thirteenth_page : 
"<div class= 'instruction' dir='rtl'> <p>قبل از شروع بازی اصلی، برای تمرین و آشنا شدن با شرایط، ۱۲ دور به صورت تمرینی بازی را انجام خواهید داد.</p>"+
"<p>پس از آن بازی اصلی که به ۳ بلوک تقسیم شده، شروع می‌شود. می توانید بین هر بلوک ۱ دقیقه استراحت کنید.</p>"+
// "<p>در پایان آزمایش برای بازی گروهی که انجام دادید مبلغ ۳۰۰ هزار تومان به‌عنوان پاداش ثابت دریافت خواهید کرد. در ضمن مجموع امتیازهای شما شمرده می شود و به ازای امتیازی که در بازی به دست آورده‌اید تا سقف ۱۵۰ هزار تومان به پاداش ثابت شما اضافه می‌شود.</p>"+
"</div>",

fourteenth_page : 
"<div class= 'instruction' dir='rtl'> <p>لطفاً توجه داشته باشید:</p>"+
"<p>اگر به صورت تصادفی پاسخ دهید، یعنی همیشه یک کلید را فشار دهید یا هرگز پاسخی ندهید، در پایان آزمایش پاداشی به شما تعلق نمی‌گیرد. </p>"+
"<p>برای دریافت پاداش بازی لازم است که در هر 2 آزمون ( بازی تک‌نفره و بازی گروهی) شرکت کنید.</p>"+
"</div>",

fifteenth_page : 
"<div class= 'instruction' dir='rtl'> <p>در طول بازی گروهی می‌توانید قبل از هر انتخاب با هم‌گروهیتان مشورت کنید. هرکدام از شما یک کیبورد در اختیار دارید که می‌توانید از آن استفاده کنید.</p>"+
"<p>به محض این‌که یکی از دو نفر از افراد تیم یکی از کلیدهای مربوطه را فشار دهد آن کلید به‌عنوان انتخاب گروه ثبت می‌شود. اگر در موعد مقرر (1 ثانیه) هیچ‌کدام از افراد کاری انجام ندهد، به منزله‌ی تصمیم بر خودداری از انجام کار تلقی می‌شود.</p>"+
// "<p>برای دریافت پاداش بازی لازم است که در هر 2 آزمون ( بازی تک‌نفره و بازی گروهی) شرکت کنید.</p>"+
"</div>",

};

	

var instructions = {
	type: 'instructions',
	pages: [
		instructions_texts.welcome_page, 
		instructions_texts.second_page,
		instructions_texts.third_page,
		instructions_texts.forth_page,
		instructions_texts.fifth_page,
		instructions_texts.sixth_page,
		instructions_texts.seventh_page,
		instructions_texts.eighth_page,
		instructions_texts.ninth_page,
		instructions_texts.ninth_p_page,
		instructions_texts.tenth_page,
		instructions_texts.eleventh_page,
		instructions_texts.twelve_page,
		instructions_texts.thirteenth_page,
		instructions_texts.fourteenth_page,
		instructions_texts.fifteenth_page


	],
	show_clickable_nav: true,

	data: {},
	on_finish: function(data) {

		jsPsych.data.addDataToLastTrial({
			exp_stage:"instructions",
			exp_part: "instructions"
		})
	}
}

var score = 0;
var comprehensionRounds = [];

var correctAnswers = { Q0: "False", Q1: "True", Q2: "False" };

var instruction_questions = {
  type: "survey-multi-choice",
  questions: [
    {
      prompt:
        "<p style='text-align: right' dir='rtl'>برای برخی از تصاویر، بهترین استراتژی همیشه فشار دادن کلید J است. برای برخی از تصاویر دیگر، بهترین استراتژی همیشه فشار دادن کلید F است.</p>",
      options: ["True", "False"],
      horizontal: true,
    },
    {
      prompt:
        "<p style='text-align: right' dir='rtl'>برای نشان دادن تصمیمم دکمه‌های F یا J را روی صفحه کلید فشار می دهم یا چیزی را فشار نمی دهم.</p>",
      options: ["True", "False"],
      horizontal: true,
    },
    // {
    //   prompt:
    //     "<p style='text-align: left'>for each condition, I will get either ✅💰✅ or ❌💸❌.</p>",
    //   options: ["True", "False"],
    //   horizontal: true,
    // },
    {
      prompt:
        "<p style='text-align: right' dir='rtl'>بازی فقط شامل 2 تصویر متفاوت است.</p>",
      options: ["True", "False"],
      horizontal: true,
    },
  ],
  required: true,
  data: {},
  on_load: function () {
    document.getElementById("jspsych-progressbar-container").style.visibility =
      "visible";
  },
  data: {},
  on_finish: function (data) {

	if(is_expired_by_changing_tab){
		return;
	}
	score = 0;
    var responses = data.response;
    var comprehensionTracker = [0, 0, 0];
    var questionCounter = 0;

	for( const Q in correctAnswers) {
	
		if(correctAnswers[Q] == responses[Q]){
			score += 1;
			comprehensionTracker[questionCounter] = 1;
		}
		questionCounter += 1;
	}

    comprehensionRounds.push(comprehensionTracker);

	console.log("your score is: ",score);

	if ((score < 3) & (repeat_counts > 0) ) {
		jsPsych.data.addDataToLastTrial({
			exp_final_status:"not_completed_by_failing_quiz",
		  });
	// 	var goodbye_fail_quiz = "<h1 style= 'font-size:100px;'><strong> ⚠️ </strong></h1>" + 
    //   "<h3 style= 'font-size:xx-large; color:crimson'>Due to not passing the quiz, your session has expired!</h3>" +
    //   "<p style= 'font-size:large;'>Unfortunately, because of this you can't continue the experiment and we would not be able you pay you.</p>" ;
	// 	jsPsych.endExperiment(goodbye_fail_quiz);
	jsPsych.endExperiment();
	}

    jsPsych.data.addDataToLastTrial({
      exp_stage: "instruction_questions",
      exp_part: "instructions",
      quiz_score: score,
    });
  },
};


var instruction_question_feedback = {
	type: "instructions",
	data: {},
	pages: function () {
	  if (score < 3) {
		return [ "<p style='font-size:150px;'>&#9888;&#65039;</p>" +
        "<div class= 'instruction' dir='rtl'>شما "+ score+"از  ۳ سوال را درست زدید. لطفا با کلیک بر روی  'NEXT' دوباره آموزش را بگذرانید."  +
        "<p><strong style='color:crimson'>در نظر داشته باشید که اگر برای بار دوم در این کوییز موفق نشوید نمی‌توانید به آزمایش ادامه دهید. </p>" +
        "</div>"
  
		];
	  } else {
		return ["<h1 class= 'instruction'>!عالی! همه پاسخ‌ها درست بود </h1> <p>را کلیک کنید 'Next'</p>"];
	  }
	},
	show_clickable_nav: true,
	on_finish: function(data) {
		

	  jsPsych.data.addDataToLastTrial({
		  exp_stage:"instruction_questions_feedback",
		  exp_part: "instructions"
	  })
  }
  };
  

var instructions_repeat = {
	timeline: [instructions, instruction_questions, instruction_question_feedback],
	data: {},
	conditional_function: function() {
		if(score == 3) {
			return false;
		} else {
			repeat_counts = repeat_counts +1;
			return true;
		}

	},
	// loop_function: function() {
	// 	if(score == 3) {
	// 		return false;
	// 	} else {
	// 		repeat_counts = repeat_counts +1;
	// 		console.log('repeat count:', repeat_counts);
	// 		jsPsych.endExperiment(goodbye_fail_quiz);
	// 		// return true;
			
	// 	}
	// },
};