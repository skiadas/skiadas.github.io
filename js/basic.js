console.log("loading basic file");

function my_setup() {
   console.log("running my setup");
   create_toggleable_sections();
   $('.collapsable h2, .collapsable h3, .collapsable h4').click(function(ev) {
      $target = $(ev.target);
      if (!$target.hasClass('collapsable')) {
         $target = $target.closest('.collapsable');
      }
      $target.toggleClass('collapsed');
      ev.stopPropagation();
      return false;
   });
}

function create_toggleable_sections() {
   group_together('h4', 'h1, h2, h3, h4');
   group_together('h3', 'h1, h2, h3');
   group_together('h2', 'h1, h2');
}

function group_together(tag, until_tags) {
   $(tag).each(function(i, el) {
      let els = $(el).nextUntil(until_tags);
      $('<section class="collapsable collapsed"></section>').insertBefore(el)
         .append(el).append(els);
   });
}

if (document.readyState == "complete") {
   my_setup;
} else {
   $(my_setup);
}
