(function($) {
    // var options = {
    //   "items": ".items",
    //   "cloneEl": ".toclone",
    //   "cloneButton": ".clone",
    //   "onClick": function() {
    //
    //   }
    // };
    
    $.fn.dynamicForm = function(options) {
        var container = this;

        var button = container.find($(options.cloneButton));

        $(button).on('click', function(e) {
            e.preventDefault();

            var cloned = container.find($(options.cloneEl)).clone();

            cloned.find('textarea, input, select').each(function(key, value) {
                $(value).val('');
            });
            cloned.removeClass('toclone');

            container.find($(options.items)).append(cloned);

            // options.onClick();
        });

        var deleteButton = container.find($(options.deleteButton));

        if (deleteButton.length > 0) {
            $('body').on('click', options.deleteButton, function(e) {

            var row = $(this).closest(options.rowClass);
            if (container.find($(options.deleteButton)).length > 1 && !row.parent().hasClass('toclone')) $(row).remove();
            });
        }
    };
}(jQuery));
