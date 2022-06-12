$(function () {
  // ２. カレンダーを表示する
  $("#calendar_basics2").datepicker({
    dateFormat: "yy/mm/dd", //選択した日付を「yy/mm/dd」にする
  });

  // ３. カレンダーの初期値の日付を設定する
  $("#calendar_basics3").datepicker({
    dateFormat: "yy/mm/dd",
  });
  let today = new Date();
  // 今日から5日後に設定
  let calendarDateMax = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 5);
  $("#calendar_basics3").datepicker("setDate", calendarDateMax);

  // ４. カレンダーの日付フォーマットを「yyyy年mm月dd日」にする
  $("#calendar_basics4").datepicker({
    dateFormat: "yy年mm月dd日",
  });

  // ５. カレンダーを日本語にする
  $("#calendar_basics5").datepicker({
    dateFormat: "yy/mm/dd",
    monthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    dayNamesMin: ["日", "月", "火", "水", "木", "金", "土"],
    yearSuffix: "年 ",
    showMonthAfterYear: true, //カレンダーのヘッダーを「年月」の順番にする
  });

  // ６. カレンダーをアイコンからクリックして表示する
  $("#calendar_basics6").datepicker({
    dateFormat: "yy/mm/dd",
    buttonImage: "https://akimochiblog.com/wp-content/themes/stingerplus2/images/icon_calendar.png", // カレンダーアイコン画像 16px
    buttonText: "カレンダー", // カーソルを当てると表示する文言
    buttonImageOnly: true, // カレンダーアイコン画像のみ表示
    showOn: "button", // カレンダーアイコンクリックでカレンダーを表示
  });

  // １. 現在から1ヶ月後までを選択できるようにする
  let calendarDateFrom = new Date(today.getFullYear(), today.getMonth() + 1, 1);

  $("#calendar_advanced1").datepicker({
    dateFormat: "yy/mm/dd",
    maxDate: calendarDateFrom,
  });

  // ２. 現在から3ヶ月前後までを選択できるようにする
  let calendarDateTo3month = new Date(today.getFullYear(), today.getMonth() - 3, 1);
  let calendarDateFrom3month = new Date(today.getFullYear(), today.getMonth() + 3, 1);

  $("#calendar_advanced2").datepicker({
    dateFormat: "yy/mm/dd",
    minDate: calendarDateTo3month,
    maxDate: calendarDateFrom3month,
  });

  //３. カレンダーの土日の色を変更する

  //４. カレンダーで日付を選択したらプルダウンにセットする
  let calendarDateNow = new Date(today.getFullYear(), today.getMonth(), 1);
  let optionHtml = "";
  for (let year = calendarDateNow.getFullYear(); year <= calendarDateNow.getFullYear() + 1; year++) {
    optionHtml += '<option value="' + year + '">';
    optionHtml += year;
    optionHtml += "</option>";
  }
  $("#calendar_y").append(optionHtml);

  $("#calendar_y").val(calendarDateNow.getFullYear());
  $("#calendar_m").val(calendarDateNow.getMonth() + 1);
  $("#calendar_d").val(calendarDateNow.getDate());

  $("#calendar_advanced4").datepicker({
    dateFormat: "yy/mm/dd",
    changeYear: false,
    beforeShow: function (input, inst) {
      let y = $("#calendar_y").val();
      let m = $("#calendar_m").val();
      let d = $("#calendar_d").val();
      $(this).datepicker("setDate", new Date(y, m - 1, d));
    },
    onSelect: function (dateText, inst) {
      let dates = dateText.split("/");
      $("#calendar_y").val(parseInt(dates[0]));
      $("#calendar_m").val(parseInt(dates[1]));
      $("#calendar_d").val(parseInt(dates[2]));
      $("#calendar_y").change();
    },
  });
});
