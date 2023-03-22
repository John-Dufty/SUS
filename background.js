// Listener for Chrome commands, like keyboard shortcuts
chrome.commands.onCommand.addListener(function (command) {
    // If the command is "Get selected text", send a message to the content script
    if (command == "Get selected text") {
        send_message_to_content("getSelectedText", "")
    }
});


// Listener for messages from the content script
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    // If the message subject is 'sendApiRequest', send an API request
    if (msg.subject === 'sendApiRequest') {
        sendResponse({});
        send_api_request(msg.targetType, msg.selected_text);
    }
});

// Function to send an API request to VirusTotal
function send_api_request(targetType, selected_text) {

    let api_url = "";
    if (targetType === 'ip') {
        api_url = "https://www.virustotal.com/api/v3/ip_addresses/" + selected_text;
    } else if (targetType === 'domain') {
        api_url = "https://www.virustotal.com/api/v3/domains/" + selected_text;
    } else if (targetType === 'hash') {
        api_url = "https://www.virustotal.com/api/v3/files/" + selected_text;
    }

    // Get the API key from local storage
    chrome.storage.local.get(['api_key'], function (data) {
        let api_key = "";
        if (data['api_key'] && (data['api_key'] != 'undefined'))
            api_key = data['api_key'];

        // Send the API request using the fetch function
        fetch(api_url, {
            headers: {
                'x-apikey': api_key
            },
            method: 'GET'
        }).then(response => response.json()).then(data => {
            console.log(data);

            // Format the response in the required format
let final_output = {};
if (targetType === 'ip') {
  final_output["id"] = data["data"]["id"];
  final_output["Country"] = data["data"]["attributes"]["country"];
  final_output["as_owner"] = data["data"]["attributes"]["as_owner"];
  final_output["reputation"] = data["data"]["attributes"]["reputation"];
  final_output["last_analysis_stats"] = data["data"]["attributes"]["last_analysis_stats"];
} else if (targetType === 'domain') {
  final_output["id"] = data["data"]["id"];		
  final_output["reputation"] = data["data"]["attributes"]["reputation"];  
  final_output["last_analysis_stats"] = data["data"]["attributes"]["last_analysis_stats"];
  final_output["total_votes"] = data["data"]["attributes"]["total_votes"];
} else if (targetType === 'hash') {
  final_output["id"] = data["data"]["id"];
  final_output["last_analysis_stats"] = data["data"]["attributes"]["last_analysis_stats"];
  final_output["reputation"] = data["data"]["attributes"]["reputation"];  
  final_output["meaningful_name"] = data["data"]["attributes"]["meaningful_name"];
} else {
  final_output["error"] = "Invalid targetType";
}

console.log(final_output);

            // Convert the final output to JSON
            let final_output_json = JSON.stringify(final_output);
            // Send the final output to the content script
            send_message_to_content("saveInClipboard", final_output_json)
        }).catch(error => {
            console.log(error);
        });
    });
}

// Function to send a message from the background script to the content script
function send_message_to_content(subject, response) {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        if (tabs[0].id) {
            chrome.tabs.sendMessage(tabs[0].id, {from: 'background', subject: subject, response: response});
        }
    });
}
