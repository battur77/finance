// дэлгэцтэй ажиллах контроллер
var uiController = (function () {
  var x = 200;

  function add(y) {
    return x + y;
  }
  return {
    publicAdd: function (a) {
      a = add(a);
      console.log("garsan utga " + a);
    },
  };
})();

// Санхүүтэй ажиллах контроллер
var financeController = (function () {})();

// Программыг холбогч контроллер
var appController = (function (uiController, financeController) {
  var ctrlAddItem = function () {
    // оруулах өгөгдөлүүдийг дэлгэцнээс олж авна
    console.log("daragdaj bna");
    // олж авсан өгөгдөлүүдээ санхүүгийн контроллерт дамжуулж тэнд хадгална.

    // Олж авсан өгөгдөлүүдээ вэб дээр тохирох хэсгүүдэд гаргана.

    // Төсөвийг тооцоолно.

    // Эцэсийн үлдэгдэл тооцоог дэлгэцэнд гаргана.
  };
  document.querySelector(".add__btn").addEventListener("click", function () {
    ctrlAddItem();
  });

  document.addEventListener("keypress", function (event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });
})(uiController, financeController);
