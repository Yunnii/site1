(function (exports) {
    "use strict";

    function load() {
        $.getJSON("data.json")
            .error(function(err){
                console.log(err);
            })
            .success(function (result) {
                var i,
                    $el,
                    $link,
                    $list =  $('<ul />'),
                    $parent = $(".collection"),
                    fragment = document.createDocumentFragment();

                for(i = result.length - 1; i >= 0; i--) {

                    $el =  $('<li />', {
                        text:  "День " + (i + 1) + ": "
                    });
                    $link =  $('<a />', {
                        href: result[i].link,
                        text: result[i].name
                    }).appendTo($el);

                    $el.appendTo($list);
                }

                $list.appendTo(fragment);
                $parent.append(fragment);

                var $todaySite = $('<div />', {
                    text: "Сегодняшний сайт: "
                }),
                $todayLink =  $('<a />', {
                    href: result[result.length - 1].link,
                    text: result[result.length - 1].name
                }).appendTo($todaySite);
                $todaySite.insertBefore($parent);
            })
    }

    $(document).ready(load);
})(window);