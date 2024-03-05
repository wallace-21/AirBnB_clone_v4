document.ready(function () {
    const amenity = {};
    $("li input[type=checkbox]").on('change', function () {
      const amenId = $(this).data('id');
      const ameName = $(this).data('name');
      if ($(this).is(':checked')) {
        amenity[amenId] = ameName;
      } else {
        delete amenity[amenId];
      }
      $('.amenities h4').text(Object.values(amenity).sort().join(', '));
    });
  });
