$(document).ready(function() {

    $("button").click(function() {

        var hasil = $("form").serializeArray();
        var sum = 0;
        $.each(hasil, function(i, field) {

            //console.log(hasil[i].value);
            sum = sum + parseInt(hasil[i].value);
        });

        if (sum >= 7) {
            $("#output").append('<p>Kayaknya kamu stress, yang semangat ya, silahkan konsul ke psikolog sesat</p>');
        } else {
            $("#output").append('<p>Bagus, kamu gak stress, jadi gausah sok sokan stress ya</p>');
        }
        //console.log(sum);

    });
});