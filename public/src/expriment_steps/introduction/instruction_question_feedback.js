var instruction_question_feedback = {
  type: "instructions",
  data: {},
  pages: function () {
    if (score < 3) {
      return [ "<p style='font-size:150px;'>&#9888;&#65039;</p>" +
        "<div class= 'instruction'>شما"+ score+"از ۳ سوال را درست زدید. لطفا با کلیک بر روی 'NEXT' دوباره آموزش را بگذرانید."  +
        "<p><strong style='color:crimson'>در نظر داشته باشید که اگر برای بار دوم در این کوییز موفق نشوید نمی‌توانید به آزمایش ادامه دهید. </p>" +
        "</div>"

      ];
    } else {
      return ["<h1 class= 'instruction'>عالی! همه پاسخ‌ها درست بود! </h1> <p>را کلیک کنید.'Next'</p>"];
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
