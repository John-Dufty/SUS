// Wait for the DOM content to load before executing the script
document.addEventListener('DOMContentLoaded', function() {
    // Get references to HTML elements
    var wrapper = document.getElementById('wrapper');
    var apiKeyInput = document.getElementById('api_key');
    var optionsButton = document.getElementById('options');
    var toggleVisibilityButton = document.getElementById('toggle_visibility');
    var setupGuideButton = document.getElementById('setup_guide');
    var userGuideButton = document.getElementById('user_guide');
    var donateButton = document.getElementById('donate');
    var sampleText = document.getElementById('sampleText');
    // Retrieve the API key from local storage and set the value of the input field if it exists
    chrome.storage.local.get('api_key', function(data) {
        if (data.api_key) {
            apiKeyInput.value = data.api_key;
        }
    });
    // Toggle the display of the wrapper element and the "active" class of the options button on click
	optionsButton.addEventListener('click', function() {
        wrapper.style.display = wrapper.style.display === 'block' ? 'none' : 'block';
        optionsButton.classList.toggle('active');
        setupGuideButton.classList.remove('active');
        userGuideButton.classList.remove('active');
        donateButton.classList.remove('active');
        sampleText.style.display = 'none';
    });
    // Toggle the display of the sample text element and the "active" class of the setup guide button on click
    setupGuideButton.addEventListener('click', function() {
		sampleText.innerHTML = sampleText.innerHTML = '1. Go to https://www.virustotal.com/gui/home/search and create an account.<br><br>2. Sign in to your account.<br><br>3. Click the link to your API key located in the top right corner of the page.<br><br>4. Copy your API key by clicking "Copy API key".<br><br>5. Locate the SUS extension logo under the extension menu and click on it.<br><br>6. Open the extension in a new tab.<br><br>7. Click "Options" in the extension.<br><br>8. Paste your API key in the form and click "Save".<br><br>9. Check out the User Guide for more information.';
        sampleText.style.display = sampleText.style.display === 'block' ? 'none' : 'block';
        setupGuideButton.classList.toggle('active');
        userGuideButton.classList.remove('active');
        donateButton.classList.remove('active');
        optionsButton.classList.remove('active');
        wrapper.style.display = 'none';
    });
    // Toggle the display of the sample text element and the "active" class of the user guide button on click
    userGuideButton.addEventListener('click', function() {
        sampleText.innerHTML = '1. Begin by selecting the desired IP, hash, or URL ensuring that only the relevant text is highlighted. It\'s important to note that hashes must be in MD5 format and URLs should only contain the domain segment.<br><br>2. Once you\'ve highlighted the text, initiate the search by using the shortcut key combination, ALT+C. Wait until the text is no longer highlighted, indicating that the search has been completed.<br><br>3. The API response will be stored within the clipboard, allowing for quick and easy access to the information in JSON format. This information can be quickly pasted into a given ticket form to increase analyst efficiency.';
        sampleText.style.display = sampleText.style.display === 'block' ? 'none' : 'block';
        userGuideButton.classList.toggle('active');
        setupGuideButton.classList.remove('active');
        donateButton.classList.remove('active');
        optionsButton.classList.remove('active');
        wrapper.style.display = 'none';
    });
    // Toggle the display of the sample text element and the "active" class of the donate button on click
    donateButton.addEventListener('click', function() {
        sampleText.innerHTML = 'Donation Links: <a href="https://www.buymeacoffee.com/johndufty1997" target="_blank" style="color: black;">Buy me a coffee</a> <br><br>Bitcoin: 12cQfKXZr3SWFbR1PeAqBH682EpHUMR7ft<br><br>This extension was made for free and open source to help Security Professionals expediently triage with OSINT tools. Any donations are appreciated but not essential.';
        sampleText.style.display = sampleText.style.display === 'block' ? 'none' : 'block';
        donateButton.classList.toggle('active');
        setupGuideButton.classList.remove('active');
        userGuideButton.classList.remove('active');
        optionsButton.classList.remove('active');
        wrapper.style.display = 'none';
    });
    // Save the API key to local storage and hide the wrapper element and options button on click
    document.getElementById('save').addEventListener('click', function(event) {
        event.preventDefault();
    chrome.storage.local.set({ 'api_key': apiKeyInput.value }, function() {
        wrapper.style.display = 'none';
        optionsButton.classList.remove('active');
    });
});
    // Toggle the visibility of the API key input field and the "active" class of the toggle visibility button on click
toggleVisibilityButton.addEventListener('click', function() {
    apiKeyInput.type = apiKeyInput.type === 'password' ? 'text' : 'password';
    toggleVisibilityButton.classList.toggle('active');
});
});


