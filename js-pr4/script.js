function reverseString(str)
{
    return str.split("").reverse().join("");
}

function message()
{
    var msg = "Palindrome Checker";

    function display()
    {
        return msg;
    }
    return display;
}

function checkPalindrome()
{
    try
    {
        var word = document.getElementById("Word").value.trim();
        
        if(word === "")
        {
            throw "Please enter a word.";
        }

        if(!/^[A-Za-z]+$/.test(word))
        {
            throw "Only alphabets are allowed.";
        }

        if(word.length < 3)
        {
            throw "Please enter at least 3 characters.";
        }

        if(word.length > 20)
        {
            throw "Maximum 20 characters allowed.";
        }

        var reversed = reverseString(word);
        var result = (word.toLowerCase() === reversed.toLowerCase())
            ? "It is a palindrome."
            : "It is not a palindrome.";

        document.getElementById("result").textContent = result;
    }
    catch (error)
    {
        document.getElementById("result").textContent = error;
    }
}
