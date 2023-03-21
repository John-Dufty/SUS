░██████╗██╗░░░██╗░██████╗
██╔════╝██║░░░██║██╔════╝
╚█████╗░██║░░░██║╚█████╗░
░╚═══██╗██║░░░██║░╚═══██╗
██████╔╝╚██████╔╝██████╔╝
╚═════╝░░╚═════╝░╚═════╝░
        
SUS is an extension that enables security professionals to gather vital information about IPs, Hashes, and URLs rapidly. By leveraging open-source intelligence tools, SUS performs API calls to gather community ratings, IOC's, and threat vectors, providing users with a comprehensive overview of potential security risks.

This is performed via the shortcut key while highlighting a string. The extension will automatically identify the string format and call the correlated API. File types are identified via MD5 hashes, with a future scope to include SHA-256 and SHA-1 hash types. URL identification is constrained by the domain and will not include specified pages. 

Upon searching, the extension automatically stores the API call response within the user's clipboard for easy and quick access, allowing security analysts to make informed decisions based on the most up-to-date information. With SUS, users can streamline their workflow and stay ahead of potential security threats.

Setup Guide:

1. Go to https://www.virustotal.com/gui/home/search and create an account.
2. Sign in to your account.
3. Click the link to your API key located in the top right corner of the page.
4. Copy your API key by clicking "Copy API key".
5. Locate the SUS extension logo under the extension menu and click on it.
6. Open the extension in a new tab.
7. Click "Options" in the extension.
8. Paste your API key in the form and click "Save".
9. Check out the User Guide for more information.

User Guide:

1. Begin by selecting the desired IP, hash, or URL ensuring that only the relevant text is highlighted. It's important to note that hashes must be in MD5 format and URLs should only contain the domain segment.
2. Once you've highlighted the text, initiate the search by using the shortcut key combination, ALT+C. Wait until the text is no longer highlighted, indicating that the search has been completed.
3. The API response will be stored within the clipboard, allowing for quick and easy access to the information in JSON format. This information can be quickly pasted into a given ticket form to increase analyst efficiency.
