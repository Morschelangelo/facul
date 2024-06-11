$(document).ready(function() {
  $('#telefone').on('input', function() {
    var tel = $(this).val().replace(/\D/g, '');
    if (tel.length === 11) {
      $(this).val('+55 (' + tel.substring(0, 2) + ') ' + tel.substring(2, 7) + '-' + tel.substring(7, 11));
    }
  });

  $('#cep').on('blur', function() {
    var cep = $(this).val().replace(/\D/g, '');
    if (cep.length === 8) {
    }
  });
});
