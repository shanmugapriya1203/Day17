const timer = document.querySelector(".counter");


setTimeout(function () {
    timer.innerText = "10";
    setTimeout(function () {
        timer.innerText = "9";
        setTimeout(function () {

          timer.innerText = "8";
            setTimeout(function () {

              timer.innerText = "7";
                setTimeout(function () {

                   timer.innerText = "6";
                    setTimeout(function () {

                       timer.innerText = "5";
                        setTimeout(function () {

                          timer.innerText = "4";
                            setTimeout(function () {

                              timer.innerText = "3";
                                setTimeout(function () {

                                    timer.innerText = "2";
                                    setTimeout(function () {

                                        timer.innerText = "1";
                                        setTimeout(function () {

                                           timer.innerText = "Happy Independence Day!";

                                        }, 1000);


                                    }, 1000);


                                }, 1000);


                            }, 1000);

                        }, 1000);

                    }, 1000);

                }, 1000);

            }, 1000);

        }, 1000);
    }, 1000);
}, 1000);