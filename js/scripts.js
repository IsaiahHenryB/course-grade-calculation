/************** PART 1 **************/

// STEP 1: Write a variable that will store the total points possible (2500 points) that you can get in this course.


// STEP 2: Use a prompt to collect the number of points a student currently has in the course and store that number in a variable.


// STEP 3: Write an arrow function that accepts two arguments. The function should calculate and return the student's CURRENT grade percentage.


// STEP 4: Write on the page a sentence that will say, "Your current grade is [CURRENT GRADE PERCENTAGE]%."



/************** PART 2 **************/

// STEP 5: Use a prompt to collect the grade that the student would like to achieve. The prompt should state, "What is the grade you want? 90, 80, 70 or 60?" Store that number in a variable.


// STEP 6: Write an arrow function that accepts THREE arguments. This function will calculate and return the number of ADDITIONAL points the student needs to receive a specified grade. For example, if I tell the function that I have 1200 points and want to know how many points it will take to get a 90% in the course, the function will return 1050.


// STEP 7: Write a switch statement that will write on the page a sentence. The cases depends on what the student has entered for the grade that they want. The results for each case should say, "You have [CURRENT POINTS] points. You need [ADDITIONAL POINTS NEEDED] points to earn a [GRADE WANTED]% in this course." 
// EXAMPLE: "You have 1200 points. You need 1050 points to earn 90% in this course."
// The default should say, "To receive a specified grade, please enter either 90, 80, 70 or 60 to find out how many additional points you need."

const score = Number(prompt(`What is your current score? (0-2500)`));
const total = 2500;
const scoreCalc = (score, total) =>{
    const percent = Math.round((score / total)*(100));
    return percent
}
document.getElementById("grade").innerHTML = (`your grade is ${scoreCalc(score)}%!`)
const goal = Number(prompt(`What is the grade you want? 90, 80, 70 or 60?`))

const resolution = (goal, total, score) =>{
    switch (goal){
        case 90:
            return `You are currently at ${score} pionts and need ${2250-score} out of ${total} points to reach your goal of ${goal}%!`;

        case 80:
            return `You are currently at ${score} pionts and need ${2000-score} out of ${total} points to reach your goal of ${goal}%!`;

        case 70:
            return `You are currently at ${score} pionts and need ${1750-score} out of ${total} points to reach your goal of ${goal}%!`;

        case 60:
            return `You are currently at ${score} pionts and need ${1500-score} out of ${total} points to reach your goal of ${goal}%!`;
        
        default:
            return "To receive a specified grade, please enter either 90, 80, 70 or 60 to find out how many additional points you need."
    }
}

document.getElementById("resolution").innerHTML = resolution(goal,total,score)