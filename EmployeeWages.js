// UC-1: Check Employee Attendance
const IS_ABSENT = 0;
let empCheck = Math.floor(Math.random() * 10) % 2;
if (empCheck === IS_ABSENT) {
    console.log("UC1 - Employee is Absent");
} else {
    console.log("UC1 - Employee is Present");
}

// UC-2: Constants for Work Hours and Wage
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

// UC-3: Function to Get Working Hours
function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

// UC-4: Calculate Daily Wage
let empCheckUC3 = Math.floor(Math.random() * 10) % 3;
let empHrsUC3 = getWorkingHours(empCheckUC3);
let empWageUC3 = empHrsUC3 * WAGE_PER_HOUR;
console.log("UC4 - Employee Daily Wage:", empWageUC3);

// UC-5: Calculate Monthly Wage with Fixed 20 Days
const NUM_OF_WORKING_DAYS = 20;
let totalEmpHrs = 0;
for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHrs += getWorkingHours(empCheck);
}
console.log(`UC5 - Total Monthly Hours: ${totalEmpHrs}, Total Monthly Wage: ${totalEmpHrs * WAGE_PER_HOUR}`);

// UC-6: Calculate Monthly Wage with Condition (Max 100 Hours or 10 Days)
const MAX_HRS_IN_MONTH = 100;
const NUM_OF_WORKING_DAYS_LIMIT = 10;
let totalEmpHrsLimit = 0;
let totalWorkingDaysLimit = 0;
while (totalEmpHrsLimit < MAX_HRS_IN_MONTH && totalWorkingDaysLimit < NUM_OF_WORKING_DAYS_LIMIT) {
    totalWorkingDaysLimit++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHrsLimit += getWorkingHours(empCheck);
    let empWageLimit = totalEmpHrsLimit * WAGE_PER_HOUR;
    console.log(`UC6 - Total Days: ${totalWorkingDaysLimit}, Total Hrs: ${totalEmpHrsLimit}, Emp Wage: ${empWageLimit}`);
}

// UC-7: Store Daily Wage in an Array
function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

const MAX_HRS_INMONTH = 160;
const NUM_OF_WORKINGDAYS = 20;
let totalEmpHr = 0;
let totalWorkingDays = 0;
let empDailyWageArr = [];
let empDailyWageMap = new Map();

while (totalEmpHr <= MAX_HRS_INMONTH && totalWorkingDays < NUM_OF_WORKINGDAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHr += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
    empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
}

console.log("UC7 - Employee Daily Wage Map:", empDailyWageMap);

// UC-8: Calculate Total Wage using Map
console.log("UC8 - Total Employee Wage from Map:", Array.from(empDailyWageMap.values()).reduce((total, wage) => total + wage, 0));

// -------------------- UC-9: Store Daily Hours and Wages in a Map --------------------
let empDailyHrsMap = new Map();
empDailyHrsMap.set(1, 8);
empDailyHrsMap.set(2, 4);
empDailyHrsMap.set(3, 0);
empDailyHrsMap.set(4, 8);
empDailyHrsMap.set(5, 4);

// UC-9A: Compute Total Hours and Wages using Arrow Functions
const findTotal = (totalVal, dailyVal) => totalVal + dailyVal;
let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal, 0);
let totalSalary = empDailyWageArr.filter(dailyWage => dailyWage > 0).reduce(findTotal, 0);
console.log("UC9A - Employee Wage with Arrow Functions:", "Total Hours:", totalHours, "Total Wages:", totalSalary);

// UC-9B: Categorize Working Days
let nonWorkingDays = [];
let partWorkingDays = [];
let fullWorkingDays = [];

empDailyHrsMap.forEach((value, key) => {
    if (value === 8) fullWorkingDays.push(key);
    else if (value === 4) partWorkingDays.push(key);
    else nonWorkingDays.push(key);
});

console.log("UC9B - Full Working Days:", fullWorkingDays);
console.log("UC9B - Part-Time Working Days:", partWorkingDays);
console.log("UC9B - Non-Working Days:", nonWorkingDays);
