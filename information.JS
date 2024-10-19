        // Function to validate user inputs
        function validateInputs() {
            // Get values from input fields
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const zipCode = document.getElementById('zipCode').value;

            //  creating full name
            const fullName = firstName + ' ' + lastName;

            // Check if full name exceeds 20 characters
            if (fullName.length > 20) {
                document.getElementById('message').innerText = "Sorry but your name exceeds 20 characters!";
                return; // Stop if invalid
            }

            // Check if zip code is valid (5 digits)
            if (!/^\d{5}$/.test(zipCode)) {
                document.getElementById('message').innerText = "Zip code must be 5 digits!";
                return; // Stop if invalid
            }

            // If all inputs are valid, display the secret message
            document.getElementById('message').innerText = "Welcome, Thank you for your information!";
        }
