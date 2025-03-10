// 1. ATM Withdrawal System
function atmWithdrawal(balance, amount, pin, enteredPin) {
    if (pin !== enteredPin) return "Incorrect PIN";
    if (amount > balance) return "Insufficient Funds";
    if (amount % 100 !== 0) return "Enter amount in multiples of 100";
    return `Withdrawal Successful. New Balance: ${balance - amount}`;
}

// 2. Online Shopping Discount & Free Shipping
function calculateFinalAmount(orderAmount) {
    let discount = 0;
    if (orderAmount > 1000) discount = 0.2;
    else if (orderAmount >= 500) discount = 0.1;
    
    let discountedAmount = orderAmount - (orderAmount * discount);
    let shipping = discountedAmount > 50 ? 0 : 10;
    return discountedAmount + shipping;
}

// 3. Student Grading System with Extra Credit
function calculateGrade(marks, attendance) {
    if (attendance > 90) marks += 5;
    if (marks >= 90) return "A";
    if (marks >= 80) return "B";
    if (marks >= 70) return "C";
    if (marks >= 60) return "D";
    return "F";
}

// 4. Smart Traffic Light System
function trafficLightControl(density) {
    if (density === "Heavy Traffic") return 60;
    if (density === "Moderate Traffic") return 40;
    return 20;
}

// 5. Movie Ticket Pricing with Time and Age Discount
function calculateTicketPrice(age, showTime) {
    let price = 12;
    if (showTime < 17) price *= 0.8;
    if (age > 60) price *= 0.7;
    if (age < 12) price *= 0.6;
    return price;
}

// 6. Job Application Filter
function isEligibleForJob(age, experience, qualification) {
    return age >= 21 && age <= 55 && experience >= 2 && qualification === "Bachelor's Degree";
}

// 7. E-commerce Coupon Redemption
function applyCoupon(orderAmount, couponCode) {
    if (couponCode === "DISCOUNT10" && orderAmount > 500) return orderAmount * 0.9;
    if (couponCode === "FREESHIP" && orderAmount > 200) return orderAmount;
    return orderAmount;
}

// 8. Fitness Membership Plan
function choosePlan(planType, wantsTrainer, wantsDietPlan) {
    if (planType === "VIP" || (wantsTrainer && wantsDietPlan)) return "VIP ($80/month)";
    if (planType === "Premium" || wantsTrainer) return "Premium ($50/month)";
    return "Basic ($20/month)";
}

// 9. Electricity Bill Calculation with Peak Hours
function calculateElectricityBill(units, timeOfDay) {
    let rate = units > 300 ? 3 : units > 100 ? 4 : 5;
    if (timeOfDay >= 20 || timeOfDay < 8) rate *= 1.1;
    return units * rate;
}

// 10. Flight Ticket Booking System
function calculateFlightFare(classType, luggageWeight, isStudent, isSenior) {
    let fare = 300;
    if (classType === "Business") fare += 200;
    if (classType === "First Class") fare += 500;
    
    if (luggageWeight > 20) fare += Math.ceil((luggageWeight - 20) / 10) * 50;
    if (isStudent) fare *= 0.85;
    else if (isSenior) fare *= 0.90;
    
    return fare;
}


