const form = document.querySelector('#calorie-form');
const calorieResult = document.querySelector('#calorie-result');
const calorieGoal = document.querySelector('#calorie-goal');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const age = parseInt(document.querySelector('#age').value);
  const activityLevel = document.querySelector('#activity-level').value;
  const weeklyHours = parseInt(document.querySelector('#weekly-hours').value);

  const BMR = calculateBMR(age);
  const dailyCalories = calculateDailyCalories(BMR, activityLevel, weeklyHours);
  const goalCalories = dailyCalories + 500;

  calorieResult.textContent = `${dailyCalories.toFixed(0)} cal`;
  calorieGoal.textContent = `${goalCalories.toFixed(0)} cal`;
});

function calculateBMR(age) {
  return 10 * age + 5;
}

function calculateDailyCalories(BMR, activityLevel, weeklyHours) {
  let activityFactor;

  switch(activityLevel) {
    case 'sedentary':
      activityFactor = 1.2;
      break;
    case 'lightly-active':
      activityFactor = 1.375;
      break;
    case 'moderately-active':
      activityFactor = 1.55;
      break;
    case 'very-active':
      activityFactor = 1.725;
      break;
    default:
      activityFactor = 1.2;
      break;
  }

  const dailyCalories = BMR * activityFactor + (weeklyHours * 200);

  return dailyCalories;
}