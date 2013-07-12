(function() {
  var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  (function($) {
    $["fn"]["uploadPreview"] = function(o) {
      o = $["extend"]({
        "types": ["image/jpeg", "image/png", "image/gif", "image/vnd.microsoft.icon"],
        'callback': function() {}
      }, o);
      this["each"](function() {
        var after, before, wrapper;
        wrapper = $("<span>");
        before = $("<span>");
        after = $("<span>");
        $(this)["wrap"](wrapper);
        $(this)["before"](before);
        $(this)["after"](after);
        return $(this)["on"]("change", function() {
          var obj, reader, _ref;
          obj = [];
          obj["target"] = $(this);
          obj["wrapper"] = wrapper;
          obj["before"] = before;
          obj["after"] = after;
          if (this.files && this.files[0] && (_ref = this.files[0].type, __indexOf.call(o.types, _ref) >= 0)) {
            reader = new FileReader();
            reader.onload = function(e) {
              var img;
              img = new Image();
              img.onload = function() {
                return o["callback"](obj);
              };
              img.src = e.target.result;
              return obj["img"] = img;
            };
            return reader.readAsDataURL(this.files[0]);
          } else {
            return o["callback"](obj);
          }
        });
      });
      $(this)["trigger"]("change");
      return this;
    };
    return this;
  })(jQuery);

}).call(this);
