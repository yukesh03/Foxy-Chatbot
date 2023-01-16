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
		ResponseText_val.innerHTML = "Tell me sir,How can i help you!";
	}

	else if (FormatInput.includes("bye"))
	{
		ResponseText_val.innerHTML = "Have a good day!";
	}




	else if (FormatInput.includes("love you"))
	{
		s=ResponseText_val.innerHTML = "Thank you!🥰";

	}

//-------------------Terms And Condition------------//

	else if (FormatInput.includes("about"))
	{
		// "https://" is important!
		ResponseText_val.innerHTML = "Opening Terms And Condition";
		window.open("https://www.privacypolicies.com/live/72a1e687-e395-45e2-8b09-0ff704f34426", "_blank");
	}


	else if (FormatInput.includes("terms"))
	{
		// "https://" is important!
		ResponseText_val.innerHTML = "Opening Terms And Condition";
		window.open("https://www.privacypolicies.com/live/72a1e687-e395-45e2-8b09-0ff704f34426", "_blank");
	}

	else if (FormatInput.includes("privacy"))
	{
		// "https://" is important!
		ResponseText_val.innerHTML = "Opening Terms And Condition";
		window.open("https://www.privacypolicies.com/live/72a1e687-e395-45e2-8b09-0ff704f34426", "_blank");
	}

	else if (FormatInput.includes("privacy and policy"))
	{
		// "https://" is important!
		ResponseText_val.innerHTML = "Opening Terms And Condition";
		window.open("https://www.privacypolicies.com/live/72a1e687-e395-45e2-8b09-0ff704f34426", "_blank");
	}

	else if (FormatInput.includes("policy"))
	{
		// "https://" is important!
		ResponseText_val.innerHTML = "Opening Terms And Condition";
		window.open("https://www.privacypolicies.com/live/72a1e687-e395-45e2-8b09-0ff704f34426", "_blank");
	}




//-------------------google------------//

	// Open websites!
	else if (FormatInput.includes("open google"))
	{
		// "https://" is important!
		ResponseText_val.innerHTML = "Opening Google";
		window.open("https://www.google.com", "_blank");
	}

	else if (FormatInput.includes("google"))
	{
		// "https://" is important!
		ResponseText_val.innerHTML = "Opening Google";
		window.open("https://www.google.com", "_blank");
	}


//-------------------youtube------------//

	else if (FormatInput.includes("open youtube"))
	{
		// "https://" is important!
		ResponseText_val.innerHTML = "Opening YouTube";
		window.open("https://www.youtube.com", "_blank");
	}

	else if (FormatInput.includes("youtube"))
	{
		// "https://" is important!
		ResponseText_val.innerHTML = "Opening YouTube";
		window.open("https://www.youtube.com", "_blank");
	}




//----------------light-lens---------------//
	else if (FormatInput.includes("open light-lens"))
	{
		// "https://" is important!
		ResponseText_val.innerHTML = "Opening Light-Lens on Github";
		window.open("https://github.com/Light-Lens", "_blank");
	}

	else if (FormatInput.includes("light lens"))
	{
		// "https://" is important!
		ResponseText_val.innerHTML = "Opening Light-Lens on Github";
		window.open("https://github.com/Light-Lens", "_blank");
	}
//----------------Github---------------//

	else if (FormatInput.includes("open github"))
	{
		// "https://" is important!
		ResponseText_val.innerHTML = "Opening github";
		window.open("https://www.google.com", "_blank");
	}

	else if (FormatInput.includes("github"))
	{
		// "https://" is important!
		ResponseText_val.innerHTML = "Opening github";
		window.open("https://www.google.com", "_blank");
	}

	
//----------------instagram---------------//
	else if (FormatInput.includes("open insta" ))
	{
		// "https://" is important!
		ResponseText_val.innerHTML = "Opening insta";
		window.open("https://www.instagram.com/", "_blank");
	}

	else if (FormatInput.includes("instagram" ))
	{
		// "https://" is important!
		ResponseText_val.innerHTML = "Opening insta";
		window.open("https://www.instagram.com/", "_blank");
	}

	else if (FormatInput.includes("insta" ))
	{
		// "https://" is important!
		ResponseText_val.innerHTML = "Opening insta";
		window.open("https://www.instagram.com/", "_blank");
	}
//----------------whatsapp---------------//
	else if (FormatInput.includes("open whatsapp"))
	{
		// "https://" is important!
		ResponseText_val.innerHTML = "Opening whatsapp";
		window.open("https://web.whatsapp.com/", "_blank");
	}

	else if (FormatInput.includes("whatsapp"))
	{
		// "https://" is important!
		ResponseText_val.innerHTML = "Opening whatsapp";
		window.open("https://web.whatsapp.com/", "_blank");
	}


//----------------spotify---------------//	
	else if (FormatInput.includes("open spotify"))
	{
		// "https://" is important!
		ResponseText_val.innerHTML = "Opening spotify";
		window.open("https://open.spotify.com/track/7fZBQnc0zXwVybgCIrQQil?si=14af68d3a287467b", "_blank");
	}


	else if (FormatInput.includes("spotify"))
	{
		// "https://" is important!
		ResponseText_val.innerHTML = "Opening spotify";
		window.open("https://open.spotify.com/track/7fZBQnc0zXwVybgCIrQQil?si=14af68d3a287467b", "_blank");
	}

//----------------showflix---------------//	
	else if (FormatInput.includes("open showflix"))
	{
		// "https://" is important!
		ResponseText_val.innerHTML = "Opening showflix";
		window.open("https://showflix.in/", "_blank");
	}

	else if (FormatInput.includes("showflix"))
	{
		// "https://" is important!
		ResponseText_val.innerHTML = "Opening showflix";
		window.open("https://showflix.in/", "_blank");
	}
//----------------facebook---------------//	

	else if (FormatInput.includes("open facebook"))
	{
		// "https://" is important!
		ResponseText_val.innerHTML = "Opening facebook";
		window.open("https://www.facebook.com/", "_blank");
	}
	
	else if (FormatInput.includes("facebook"))
	{
		// "https://" is important!
		ResponseText_val.innerHTML = "Opening facebook";
		window.open("https://www.facebook.com/", "_blank");
	}

	else if (FormatInput.includes("fb"))
	{
		// "https://" is important!
		ResponseText_val.innerHTML = "Opening facebook";
		window.open("https://www.facebook.com/", "_blank");
	}

	
//----------------time---------------//	
	else if (FormatInput.includes("time"))
	{
	
		window.open("https://yukesh03.github.io/Digital-Clock/");
	
		
	}

//----------------date---------------//	
	else if (FormatInput.includes("date"))
	{
		
		window.open("https://yukesh03.github.io/Digital-Clock/");
	}

//----------------netlify---------------//	

	
	else if (FormatInput.includes("open netlify"))
	{
		
		window.open("https://www.netlify.com/");
	}

	else if (FormatInput.includes("netlify"))
	{
		
		window.open("https://www.netlify.com/");
	}




	else
		ResponseText_val.innerHTML = "Sorry, I can't understand you 😔";
}

