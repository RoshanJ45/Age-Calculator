    function calculateAge() {
const dob = new Date(document.getElementById("dob").value);
if (isNaN(dob)) return;
const now = new Date();
let years = now.getFullYear() - dob.getFullYear();
let months = now.getMonth() - dob.getMonth();
let days = now.getDate() - dob.getDate();
if (days < 0) {
months--;
days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
}
if (months < 0) {
years--;
months += 12;
}
document.getElementById("result").textContent =
`You are ${years} years, ${months} months, and ${days} days old.`;
}
