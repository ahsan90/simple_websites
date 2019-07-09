/*
Purpose: This program serves the form validation for trivia game and calculates results based on the user answers. Finally display them output div
Date: March 3, 2019
Author: Md Ahsanul Hoque
*/
window.onload = initPage;

function initPage() {
    document.getElementById("score").addEventListener("click",getDataFromUser);
}
function getDataFromUser() {
    let score = 0;
    let capitalName = document.getElementById("capital").value;
    let noOfContinents = document.getElementById("continents").value;
    let isQuestion_1_Answered = false,isQuestion_2_Answered = false,isQuestion_3_Answered = false,isQuestion_4_Answered = false,
        isQuestion_5_Answered = false,isQuestion_6_Answered = false,isQuestion_7_Answered = false;

    //Question 1 validation checking
    if (capitalName === ""){
        document.getElementById("error_capital_name").innerHTML = "<span class='alert alert-danger'>You must fill out the answer</span>";
        document.getElementById("capital").style.borderColor = "red";
    }else {
        document.getElementById("error_capital_name").innerText = "";
        document.getElementById("capital").style.borderColor = "green";
        isQuestion_1_Answered = true;
    }

    //Question 2 validation checking
    if (noOfContinents === ""){
        document.getElementById("error_no_of_continents").innerHTML = "<span class='alert alert-danger'>You must fill out the answer</span>";
        document.getElementById("continents").style.borderColor = "red";
    }else {
        if (isNaN(Number(noOfContinents))){
            document.getElementById("error_no_of_continents").innerHTML = "<span class='alert alert-danger'>Please enter a numeric value</span>";
            document.getElementById("continents").style.borderColor = "red";
        }else {
            document.getElementById("error_no_of_continents").innerText = "";
            document.getElementById("continents").style.borderColor = "green";
            isQuestion_2_Answered = true;
        }
    }

    //Question 3 validation checking for dropdown type of question
    let check_select_question_1 = document.getElementById("capitalOfUSA");
    if(check_select_question_1.value == "select"){
        getErrorMessage(document.getElementById("select_q3_error"));
        document.getElementById("capitalOfUSA").style.borderColor = "red";
    }else{
        document.getElementById("select_q3_error").innerText = "";
        document.getElementById("capitalOfUSA").style.borderColor = "green";
        isQuestion_3_Answered = true;
    }

    //Question 4 validation checking for dropdown type of question
    let check_select_question_2 = document.getElementById("harry_potter_character");
    if(check_select_question_2.value == "select"){
        getErrorMessage(document.getElementById("select_q4_error"));
        document.getElementById("harry_potter_character").style.borderColor = "red";
    }else{
        document.getElementById("select_q4_error").innerText = "";
        document.getElementById("harry_potter_character").style.borderColor = "green";
        isQuestion_4_Answered = true;
    }

    //Question 5 validation checking for MCQ type question
    let choice_question_1_array = document.getElementsByName("choice_question_1");
    if (checkObjectArray(choice_question_1_array)) {
        document.getElementById("mcq_question_1_error").innerText = "";
        isQuestion_5_Answered = true;
    }else {
        getErrorMessage(document.getElementById("mcq_question_1_error"));
    }

    //Question 6 validation checking for MCQ type question
    let choice_question_2_array = document.getElementsByName("choice_question_2");
    if (checkObjectArray(choice_question_2_array)) {
        document.getElementById("mcq_question_2_error").innerText = "";
        isQuestion_6_Answered = true;
    }else {
        getErrorMessage(document.getElementById("mcq_question_2_error"));
    }

    //Question 7 validation checking for checkbox type question
    let checkboxAnswers = document.getElementsByName("commonwealth");
    if (!checkObjectArray(checkboxAnswers)){
        getErrorMessage(document.getElementById("error"));
    } else {
        document.getElementById("error").innerText = "";
        isQuestion_7_Answered = true;
    }

    //Calculating score after all validation is passed
    if (isQuestion_1_Answered && isQuestion_2_Answered && isQuestion_3_Answered
        && isQuestion_4_Answered && isQuestion_5_Answered && isQuestion_6_Answered
        &&isQuestion_7_Answered){
        if (capitalName.toLowerCase() === "honolulu"){
            score++;
        }

        if(noOfContinents === "7"){
            score++;
        }

        if (check_select_question_1.value === "dc"){
            score++;
        }

        if (check_select_question_2.value === "daniel"){
            score++;
        }

        if (selectCorrectAnswerForRadio(choice_question_1_array, "1967")){
            score++
        }

        if (selectCorrectAnswerForRadio(choice_question_2_array, "egypt")){
            score++
        }

        if (checkboxAnswers[0].checked == true && checkboxAnswers[1].checked == true &&
            checkboxAnswers[2].checked == false && checkboxAnswers[3].checked == false){
            score++;
        }

        calculatePercentageAndDisplayResult(score);

    }else {
        document.getElementById("outputDiv").innerHTML = "<br/><span class='alert alert-danger'>Fix the above errors please</span>";
    }
}

//A function that checks  the array object
function checkObjectArray(object){
    for(let i = 0; i<object.length; i++){
        if(object[i].checked == true){
            return true;
        }
    }
    return false;
}

//A function that selects correct answer for radio button type question
function selectCorrectAnswerForRadio(obj, correctAnswer) {
    for (let i = 0; i<obj.length; i++){
        if(obj[i].checked && obj[i].value === correctAnswer){
            return true;
        }
    }
    return false;
}

//A function question that calculates percentage and display the result based on the score a user gets
function calculatePercentageAndDisplayResult(score) {
    let percentage = ((Number((score/7)*100))).toFixed(2);
    if (percentage=>0 && percentage<=50){
        document.getElementById("outputDiv").innerHTML = `<span class="redColor">Your score is: ${percentage}%</span>` ;
    }
    if(percentage>50 && percentage<80){
        document.getElementById("outputDiv").innerHTML = `<span class="orangeColor">Your score is: ${percentage}%</span>` ;
    }
    if(percentage>=80){
        document.getElementById("outputDiv").innerHTML = `<span class="greenColor">Your score is: ${percentage}%</span>`;
    }
}

// A function that display error message
function getErrorMessage(m) {
    m.innerHTML = "<br><span class='alert alert-danger'>You must choose an answer</span><br>";
}
