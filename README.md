SUS is an extension that enables security professionals to gather vital information about IPs, Hashes, and URLs rapidly. By leveraging open-source intelligence tools, SUS performs API calls to gather community ratings, IOC's, and threat vectors, providing users with a comprehensive overview of potential security risks.

This is performed via the shortcut key while highlighting a string. The extension will automatically identify the string format and call the correlated API. File types are identified via MD5 hashes, with a future scope to include SHA-256 and SHA-1 hash types. URL identification is constrained by the domain and will not include specified pages. 

Upon searching, the extension automatically stores the API call response within the user's clipboard for easy and quick access, allowing security analysts to make informed decisions based on the most up-to-date information. With SUS, users can streamline their workflow and stay ahead of potential security threats.

Install Guide:

1. To download the extension, go to the project repository on Github and locate the "Code" button in the top right-hand corner. Click on it to access the dropdown menu and select "Download ZIP" to obtain the compressed file containing the extension.
2. After the ZIP file is downloaded, extract the files to a convenient location on your device, such as your desktop or downloads folder, noting that for the extension to work this file cannot be deleted.
3. Open Google Chrome and navigate to the extensions page by entering "chrome://extensions/" in the address bar and pressing enter. Then, toggle the switch in the top right-hand corner to turn on Developer Mode, allowing you to manually load extensions.
4. Click the "Load unpacked" button located in the top left-hand corner of the page. This will display a file explorer window.
5. Navigate to the directory where the extension files are located, select the folder containing the extension files, and click the "Select Folder" button to load the extension into Google Chrome. The extension should now be visible in your browser and ready to use.

Setup Guide:

1. Go to https://www.virustotal.com/gui/home/search and create an account if you don't already have one.
2. Once you've signed in, click the link to your API key located in the top right corner of the page.
3. Copy your API key by clicking "Copy API key".
4. Locate the SUS extension button under the extension menu (the puzzle piece icon) and click on it.
5. Click "Options" in the extension menu to open the settings page.
6. Paste your API key in the designated form and click "Save" to apply your changes.

User Guide:

1. Begin by selecting the desired IP, hash, or domain ensuring that only the relevant text is highlighted. It's important to note that hashes must be in MD5, SHA-1 or SHA-256 formats and URLs must only contain the domain segment.
2. Once you've highlighted the text, initiate the search by using the shortcut key combination, ALT+C. Wait until the text is no longer highlighted, indicating that the search has been completed. Note also that the shortcut key can be modified manually by accessing chrome://extensions/shortcuts.
3. The API response will be stored within the clipboard, allowing for quick and easy access to the information in JSON format. This information can be quickly pasted into a given form for expedient ticket closure.
