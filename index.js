const calcy = () => {
  console.log("hello console");

  let wd = document.getElementById("wd").value;
  let pg = document.getElementById("pg").value;
  let maths = document.getElementById("maths").value;
  let phy = document.getElementById("phy").value;

  if (wd == "" || pg == "" || maths == "" || phy == "") {
    alert("Please fill your marks to see the result!");
  }
  else {
    // Calculate TotalMarks

    let totalMarks =
      parseFloat(wd) + parseFloat(pg) + parseFloat(maths) + parseFloat(phy);
    console.log(totalMarks);

    // Finish TotalMarks

    // Calculate Percentage

    let percent = (totalMarks / 400) * 100;
    console.log(percent);

    // Finish Percentage

    // Calculate Grades

    let grades = "";
    if (percent >= 80 && percent <= 100) {
      grades = "A";
    } 
    else if (percent >= 60 && percent <= 79) {
      grades = "B";
    }
    else if (percent >= 40 && percent <= 59) {
      grades = "C";
    }
    else {
      grades = "F";
    }
    console.log(grades);

    // Finish Grades

    // Calculate Pass or Fail

    let pof = "";
    if (percent >= 40) {
      pof = "Pass";
    } 
    else {
      pof = "Fail";
    }
    console.log(pof);

    // Finish Pass or Fail

    // Output all Result

    gradeResult = document.getElementById("gradeResult");
    gradeResult.innerHTML = `
                Out of 400 your total marks is ${totalMarks} and percentage is ${percent}%.
                <br>
                Your grade is ${grades} and you are ${pof}.
            `;

    // Finish Output result
  }
};
