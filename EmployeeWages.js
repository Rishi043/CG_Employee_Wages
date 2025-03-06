// UC-1: Check Employee Attendance
const IS_ABSENT = 0;
let empCheck = Math.floor(Math.random() * 10) % 2;
if (empCheck === IS_ABSENT) {
    console.log("UC1 - Employee is Absent");
} else {
    console.log("UC1 - Employee is Present");
}

// Constants
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;

// UC-2: Function to Get Working Hours
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

// UC-3: Calculate Daily Wage
let empCheckUC3 = Math.floor(Math.random() * 10) % 3;
let empHrsUC3 = getWorkingHours(empCheckUC3);
let empWageUC3 = empHrsUC3 * WAGE_PER_HOUR;
console.log("UC3 - Employee Daily Wage:", empWageUC3);

// UC-4: Calculate Monthly Wage (Fixed 20 Days)
let totalEmpHrs = 0;
for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHrs += getWorkingHours(empCheck);
}
console.log(`UC4 - Total Monthly Hours: ${totalEmpHrs}, Total Monthly Wage: ${totalEmpHrs * WAGE_PER_HOUR}`);

// UC-5: Calculate Monthly Wage with Condition (Max 160 Hours or 20 Days)
let totalEmpHr = 0;
let totalWorkingDays = 0;
while (totalEmpHr < MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHr += getWorkingHours(empCheck);
}
console.log(`UC5 - Total Days: ${totalWorkingDays}, Total Hours: ${totalEmpHr}, Monthly Wage: ${totalEmpHr * WAGE_PER_HOUR}`);

// UC-6: Store Daily Wage in an Array
function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

let empDailyWageArr = [];
totalEmpHr = 0;
totalWorkingDays = 0;

while (totalEmpHr <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHr += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
}

console.log("UC6 - Daily Wages Array:", empDailyWageArr);
console.log(`UC6 - Total Days: ${totalWorkingDays}, Total Hrs: ${totalEmpHr}, Employee Wage: ${calcDailyWage(totalEmpHr)}`);

// UC-7: Filter data using Array Helper Functions

// UC7A: Calculate Total Employee Wage using forEach and reduce
let totalEmpWage = 0;
empDailyWageArr.forEach(wage => totalEmpWage += wage);
console.log("UC7A - Total Wage using forEach:", totalEmpWage);
console.log("UC7A - Total Wage using reduce:", empDailyWageArr.reduce((total, wage) => total + wage, 0));

// UC7B: Map Day with Daily Wage
let dailyCounter = 0;
let mapDayWithWageArr = empDailyWageArr.map(wage => `Day ${++dailyCounter}: ${wage}`);
console.log("UC7B - Day with Wages:", mapDayWithWageArr);

// UC7C: Filter Days with Full-Time Wage
let fullTimeWageArr = empDailyWageArr.filter(wage => wage === 160);
console.log("UC7C - Full-Time Wage Days:", fullTimeWageArr);

// UC7D: Find First Day with Full-Time Wage
console.log("UC7D - First Full-Time Wage Earned on:", empDailyWageArr.find(wage => wage === 160));

// UC7E: Check if All Entries are Full-Time Wage
console.log("UC7E - Are all full-time wages?:", fullTimeWageArr.every(wage => wage === 160));

// UC7F: Check if Any Part-Time Wage Exists
console.log("UC7F - Is there any Part-Time Wage?:", empDailyWageArr.some(wage => wage === 80));

// UC7G: Count Number of Days Worked
let totalDaysWorked = empDailyWageArr.reduce((days, wage) => (wage > 0 ? days + 1 : days), 0);
console.log("UC7G - Number of Days Worked:", totalDaysWorked);

