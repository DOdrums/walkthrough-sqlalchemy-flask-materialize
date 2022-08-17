document.addEventListener('DOMContentLoaded', function() {
  // sidenav initialization (mobile menu) 
  let sidenav = document.querySelectorAll('.sidenav');
  M.Sidenav.init(sidenav);


  // datepicker initializationå
    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
      format: "dd mmmm, yyyy",
      i18n: {done: "Select"}
    })

    // select initialization
    let selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);

    // collapsible initialization
    let collapsibles = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsibles);
});