// Listener for messages from the background script
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    // If the message subject is 'getSelectedText', get the selected text
    if (msg.subject === 'getSelectedText') {
        sendResponse({});
        // Get the selected text and trim it
        let selected_text = document.getSelection().toString().trim();
        // Check if the selected text contains an IP address, URL, or hash using regular expressions
if (selected_text.length > 0) {
    let ipRegex = /\b(?:[0-9]{1,3}\.){3}[0-9]{1,3}\b/;
    let domainRegex = /([a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+)/i;
    let hashRegex = /\b(?:[a-fA-F0-9]{32}|[a-fA-F0-9]{40}|[a-fA-F0-9]{64})\b/;
    if (ipRegex.test(selected_text)) {
        targetType = 'ip';
    } else if (domainRegex.test(selected_text)) {
        targetType = 'domain';
    } else if (hashRegex.test(selected_text)) {
        targetType = 'hash';
    }
}

        if (targetType) {
            // Send a message to the background script with the selected text and targetType
            chrome.runtime.sendMessage({
                from: 'content',
                subject: 'sendApiRequest',
                targetType: targetType,
                selected_text: selected_text
            });
        }
    }

    // If the message subject is 'saveInClipboard', save the response in the clipboard
    if (msg.subject === 'saveInClipboard') {
        sendResponse({});
        // Put the final output in the clipboard
        copy_content_to_clipboard(msg.response);
    }
});

// Function to copy text to the clipboard
function copy_content_to_clipboard(text) {
    // Create a temporary textarea element
    let tmp_elem = document.createElement('textarea');
    // Set the position of the textarea to be off-screen
    tmp_elem.style.position = "absolute";
    tmp_elem.style.left = "-1000px";
    tmp_elem.style.top = "-1000px";
    // Set the textarea text to the text to be copied
    tmp_elem.textContent = text;
    // Add the textarea to the body
    document.body.appendChild(tmp_elem);
    // Focus on the textarea and select its content
    tmp_elem.focus();
    tmp_elem.select();
    // Execute the copy command
    document.execCommand("copy");
    // Remove the temporary textarea element
    document.body.removeChild(tmp_elem);
}
