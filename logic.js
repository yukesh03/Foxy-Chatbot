// Let's code our chatbot's logic!
function IsEnter()
{
	var TextBox_val = document.getElementById("InputBox").value; // Get all the data from the input box.

	// If enter key is pressed then only respond.
	if (TextBox_val != "")
	{
		if (event.keyCode == 13)
			main();
	}
}

function main()
{
	// the main logic will be coded here.
	var TextBox_val = document.getElementById("InputBox").value; // Get all the data from the input box.
	var ResponseText_val = document.getElementById("ResponseText"); // Get all the data from the response text.

	var FormatInput = TextBox_val.toLowerCase().trim(); // convert our given input to lowercase.
	// For example "Apple" -> "apple".

	// Let's code the Logic for chatting...
	// and like this you can add several more features to it make it really advance.
	// As i said, i will be uploading it's source code it github so just check the link in description!
	if (FormatInput.includes("hi") || FormatInput.includes("hello"))
		ResponseText_val.innerHTML = "Hello!";

	else if (FormatInput.includes("how are you"))
		ResponseText_val.innerHTML = "I'm fine! Thanks for asking!";

	else if (FormatInput.includes("your name"))
	{
	        ResponseText_val.innerHTML = "I'm Foxy your personal chatbot!";
	}

	else if (FormatInput.includes("what is your name"))
	{
		ResponseText_val.innerHTML = "I'm Foxy your personal chatbot!";
	}

	else if (FormatInput.includes("who created you"))
	{
		ResponseText_val.innerHTML = "My Master Yukesh created me!";
	}

	else if (FormatInput.includes("who invented you"))
	{
		ResponseText_val.innerHTML = "My Master Yukesh invented me!";
	}

	else if (FormatInput.includes("who develop you"))
	{
		ResponseText_val.innerHTML = "My Master Yukesh invented me!";
	}

	else if (FormatInput.includes("bye"))
	{		
		ResponseText_val.innerHTML = "Have a good day!";
	}


	else if (FormatInput.includes("foxy"))
	{
		ResponseText_val.innerHTML = "tell me sir , can i help you!";
	}

	else if (FormatInput.includes("bye"))
	{
		ResponseText_val.innerHTML = "Have a good day!";
	}




	// Open websites!
	else if (FormatInput.includes("open google"))
	{
		// "https://" is important!
		ResponseText_val.innerHTML = "Opening Google";
		window.open("https://www.google.com", "_blank");
	}

	else if (FormatInput.includes("open youtube"))
	{
		// "https://" is important!
		ResponseText_val.innerHTML = "Opening YouTube";
		window.open("https://www.youtube.com", "_blank");
	}

	else if (FormatInput.includes("open onestate"))
	{
		// "https://" is important!
		ResponseText_val.innerHTML = "Opening Onestate Coding on YouTube";
		window.open("https://www.youtube.com/channel/UCrphqZNc_r-KsOTeTKH5hwA", "_blank");
	}

	else if (FormatInput.includes("open light-lens"))
	{
		// "https://" is important!
		ResponseText_val.innerHTML = "Opening Light-Lens on Github";
		window.open("https://github.com/Light-Lens", "_blank");
	}



	else if (FormatInput.includes("open github"))
	{
		// "https://" is important!
		ResponseText_val.innerHTML = "Opening github";
		window.open("https://www.google.com", "_blank");
	}

	else if (FormatInput.includes("open insta"))
	{
		// "https://" is important!
		ResponseText_val.innerHTML = "Opening insta";
		window.open("https://www.instagram.com/", "_blank");
	}

	else if (FormatInput.includes("open whatsapp"))
	{
		// "https://" is important!
		ResponseText_val.innerHTML = "Opening whatsapp";
		window.open("https://web.whatsapp.com/", "_blank");
	}


	
	else if (FormatInput.includes("open spotify"))
	{
		// "https://" is important!
		ResponseText_val.innerHTML = "Opening spotify";
		window.open("https://open.spotify.com/track/7fZBQnc0zXwVybgCIrQQil?si=14af68d3a287467b", "_blank");
	}


	else if (FormatInput.includes("open showflix"))
	{
		// "https://" is important!
		ResponseText_val.innerHTML = "Opening showflix";
		window.open("https://showflix.in/", "_blank");
	}


	else if (FormatInput.includes("open facebook"))
	{
		// "https://" is important!
		ResponseText_val.innerHTML = "Opening facebook";
		window.open("https://www.facebook.com/", "_blank");
	}


	

	else if (FormatInput.includes("time"))
	{
	
		window.open("https://www.google.com/search?q=india+time+now&rlz=1C1YTUH_enIN1036IN1036&oq=india+time&aqs=chrome.0.0i67i131i433j69i57j0i131i433i512j0i20i263i512j0i131i433i512j0i20i263i512j0i131i433j0i512l3.7904j0j7&sourceid=chrome&ie=UTF-8", "_blank");
		
	}


	else if (FormatInput.includes("open date"))
	{
		
		window.open("https://www.google.com/search?q=india+date&rlz=1C1YTUH_enIN1036IN1036&sxsrf=ALiCzsYoHru-cMxu6ndCrSy-ONCEPWhYNA%3A1672594175485&ei=_8KxY9ihHcS23LUP1oKM2Ag&ved=0ahUKEwiYnbvt8qb8AhVEG7cAHVYBA4sQ4dUDCBA&uact=5&oq=india+date&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzILCAAQsQMQgwEQkQIyBQgAEJECMgsIABCABBCxAxCDATIFCAAQgAQyBQgAEIAEMgUIABCABDIKCAAQgAQQhwIQFDIFCAAQgAQyBQgAEIAEMgUIABCABDoHCCMQ6gIQJzoMCAAQ6gIQtAIQQxgBOgQIIxAnOgQIABBDOhEILhCABBCxAxCDARDHARDRAzoQCAAQgAQQhwIQsQMQgwEQFDoICAAQsQMQgwE6CAgAEIAEELEDOgsILhCDARCxAxCABDoOCC4QgAQQsQMQxwEQ0QM6CAguEIAEELEDOgUILhCABEoECEEYAEoECEYYAVAAWP0pYLYtaAFwAXgAgAGlAYgBkwuSAQQwLjEwmAEAoAEBsAEUwAEB2gEGCAEQARgB&sclient=gws-wiz-serp", "_blank");
	}


	else
		ResponseText_val.innerHTML = "Sorry, I can't understand you 😔";
}

