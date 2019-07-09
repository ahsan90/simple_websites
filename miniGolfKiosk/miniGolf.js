/*
* Author: Originally written by Don Bowers modified by Md Ahsanul Hoque
* Date: 31 March 2019
* Purpose: Provides functionality for miniGolf Application using Jquery javaScript library
* */

$(document).ready(function () {
    // declare a variable available within the scope
    let $totalAfterTax = 0.00;
        //hide div of id bearing totalArea when the window load
        $('#totalArea').hide();

        //display results when form has data from the user
        $('#adults, #children, #caa, #mil, #fun').on('change', function () {
            $('#totalArea').slideDown();
            //call updateTotal() function
            updateTotals();
        })
    $('#changeButton').on('click', calculateChange);
    $('#reset').on('click', resetForm);

    // create function to do the math calculation
    function updateTotals() {
        // get the data
        let $adults = $("#adults").val();
        let $children = $("#children").val();
        // ensure a qty is selected for above
        if ($adults == 0 && $children == 0) {
            // they need to select a qty for children or adults
            alert("You must select a quantity for adults or children.");

        } else {

            // calculate costs
            $("#numAdults").val($adults);
            let $adultTotal = $adults * 4.00;

            $("#numChildren").val($children);
            let $childTotal = $children * 2.00;

            $("#totalAdultsDiv").html("$" + $adultTotal.toFixed(2));
            $("#totalChildrenDiv").html("$" + $childTotal.toFixed(2));
            let $totalBeforeTax = ($adultTotal + $childTotal);

            // get discount radio choice
            let $deduct = 0;
            let $discountString = "None";
            if ($("#caa").prop("checked")) {
                $deduct = $totalBeforeTax * .10;
                $totalBeforeTax = $totalBeforeTax - $deduct;
                $discountString = "CAA saved $" + $deduct.toFixed(2);
            } else if ($("#mil").prop("checked")) {
                $deduct = $totalBeforeTax * .25;
                $totalBeforeTax = $totalBeforeTax - $deduct;
                $discountString = "Military saved $" + $deduct.toFixed(2);
            } else if ($("#fun").prop("checked")) {
                $deduct = $totalBeforeTax * .50;
                $totalBeforeTax = $totalBeforeTax - $deduct;
                $discountString = "Super Fun Club saved $" + $deduct.toFixed(2);
            }
            $("#discountString").html($discountString);

            $totalAfterTax = $totalBeforeTax * 1.1;
            $("#totalBeforeTaxDiv").html("$" + $totalBeforeTax.toFixed(2));
            $("#totalAfterTaxDiv").html("$" + $totalAfterTax.toFixed(2));
        } // end if no adults or children selected

    } // end update Totals function
    // create function to do the math calculation
    function calculateChange() {
        let $amountGiven = parseFloat(prompt("Enter amount client gave you"));
        let $changeDue = $amountGiven-$totalAfterTax;
        $("#changeDue").html("$"+$changeDue.toFixed(2));
        $("#changeOutput").css("display", "block");
    }
//create function to reset the form
    function resetForm() {
        window.location = "miniGolfKiosk.html";
    }
});
