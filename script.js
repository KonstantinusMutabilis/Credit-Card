const myForm = document.getElementById('my-form');

["click", "keyup"].forEach(ev => {
    myForm.addEventListener(ev, (e) => {
        // event.preventDefault();
        const nameInput = myForm.elements['fullname'];
        const cardNInput = myForm.elements['cardN'];
        const cvcInput = myForm.elements['cvc'];
        const monthInput = myForm.elements['date'];
        const errorMessage = document.getElementById("msg");
        const discountInput = myForm.elements['cupoun'];
        const nameRegex = /^(?=.{3,30}\s.{3,30}$)[a-zA-Z\s']+$/;
        const cardNRegex1 = /^[0-9]{4,4}$/;
        const cardNRegex2 = /^[0-9]{4,4}$/;
        const cardNRegex3 = /^[0-9]{4,4}$/;
        const cardNRegex4 = /^[0-9]{4,4}$/;
        const cardNRegex5 = /^[0-9]{4,4}$/;
        const cardNRegex6 = /^[0-9]{4,4}$/;
        const cvcRegex = /^[0-9]{3,3}/;
        const couponregex1 = /^[A-Z]{8,8}/;
        const couponregex2 = /^[0-9]{2,2}/;
        const couponregex3 = /^[A-Z]{3,3}/;
        const discountArray = discountInput.value.split('-');
        const cardNArray = cardNInput.value.split('-');
        const btn = document.getElementById('submit-btn');

        let test1 = couponregex1.test(discountArray[0]);
        let test2 = couponregex2.test(discountArray[1]);
        let test3 = couponregex3.test(discountArray[2]);

        let cardtest1 = cardNRegex1.test(cardNArray[0]);
        let cardtest2 = cardNRegex2.test(cardNArray[1]);
        let cardtest3 = cardNRegex3.test(cardNArray[2]);
        let cardtest4 = cardNRegex4.test(cardNArray[3]);
        let cardtest5 = cardNRegex5.test(cardNArray[4]);
        let cardtest6 = cardNRegex6.test(cardNArray[5]);




        if (!nameRegex.test(nameInput.value)) {
            errorMessage.textContent = "Full Name shoud be 2 words, more then 3 letters each";
            btn.disabled = true;
            return;
        }
        else if (!cardtest1 || !cardtest2 || !cardtest3 || !cardtest4 || !cardtest5 || !cardtest6) {
            errorMessage.textContent = "Card number shoud be XXXX-XXXX-XXXX-XXXX-XXXX-XXXX";
            btn.disabled = true;
            return;
        }
        else if (!cvcRegex.test(cvcInput.value)) {
            errorMessage.textContent = "CVC must be 3 digits.";
            btn.disabled = true;
            return;
        }
        else if (!monthInput.value) {
            errorMessage.textContent = "Choose card expiring date.";
            btn.disabled = true;
            return;
        }
        else if (!test1 || !test2 || !test3) {
            errorMessage.textContent = "please enter discount code with the pattern 'CHIKAMSO-20-OFF'.";
            btn.disabled = true;
            return;
        }

        btn.addEventListener('click', (e) => {

            var link = "mailto:me@example.com"
                + "&subject=" + encodeURIComponent("Card Data")
                + "&body=" + encodeURIComponent("Fullname: " + nameInput.value + ". " + "Card Number: " + cardNInput.value + ". " + "CVC: " + cvcInput.value + ". " + "Exp Date: " + monthInput.value + ". " + "Discount: " + discountInput.value + ". ");
            ;

            window.location.href = link;


        });


        errorMessage.textContent = "OK!"
        btn.disabled = false;


    });
});