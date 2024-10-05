// Create an array of states in india.
// Remove all the names starting with vowels from the list. Use array.filter.

const stateIndia=[  "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",];

    function removeStateStartingWithVowels(states)
    {
        const vowels=['A','E','I','O','U'];
        return states.filter((states)=>!vowels.includes(states[0]))
    }
const ans=removeStateStartingWithVowels(stateIndia);
console.log(ans);