let principal, rate, years, interest;
principal = prompt("Enter a principal");
rate = prompt("Enter rate of Interest ");
years = prompt("Enter number of years");
interest = principal * (1 + rate / 100) ** years;
interest = interest.toFixed(2);
document.write("Compound Interest : " + interest);