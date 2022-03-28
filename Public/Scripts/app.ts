/* custom js goes here */

// IIFE - Immediately Invoked Function Expression (AKA an anonymous self-executing function)

(function () {
  $(".btn-danger").click(function (event) {

    if (!confirm("Are you sure?")) {
      event.preventDefault();
      window.location.assign("/survey");
    }
  });
})();