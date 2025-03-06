// UC-1: Check Employee Presence
const IS_ABSENT = 0;
let empCheck = Math.floor(Math.random() * 10) % 2; // Generates 0 or 1
if (empCheck === IS_ABSENT) {
    console.log("Employee is Absent");
} else {
    console.log("Employee is PRESENT");
}

// UC-2 & UC-3: Define Constants and Function for Working Hours
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

// Function to return working hours based on employee type
function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0; // If absent
    }
}

// UC-3: Calculate Daily Wage
let empCheckUC3 = Math.floor(Math.random() * 10) % 3; // Generates 0, 1, or 2
let empHrsUC3 = getWorkingHours(empCheckUC3);
let empWageUC3 = empHrsUC3 * WAGE_PER_HOUR;
console.log("Emp Wage: " + empWageUC3);

// UC-4: Calculate Wage for a Month (Assuming 20 Working Days)
const NUM_OF_WORKING_DAYS = 20;
let totalEmpHrs = 0;

// Loop through 20 days to accumulate working hours
for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHrs += getWorkingHours(empCheck);
}

// Calculate and Display Monthly Wage
console.log(`Total Monthly Hours: ${totalEmpHrs}, Total Monthly Wage: ${totalEmpHrs * WAGE_PER_HOUR}`);
