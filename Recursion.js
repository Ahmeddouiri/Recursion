function isPalindrome(str) {
    for (let i = 0; i < str.length / 2; i++) {
        const j = str.length - 1 - i;
        if (str[i] !== str[j]) {
        console.log("not Palindrome");
            return false; 
        }
    }
    console.log("is Palindrome");
    return true;
}
isPalindrome("ABCCBA"); 