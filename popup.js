document.getElementById("exportBtn").addEventListener("click", () => {
    // Query all tabs in the current window
    chrome.tabs.query({ currentWindow: true }, (tabs) => {
        let output = "";
        tabs.forEach(tab => {
            output += `${tab.title} => ${tab.url} \n\n`;
        });

        // Display in textarea
        document.getElementById("output").value = output;

        // Copy to clipboard (optional)
        navigator.clipboard.writeText(output).then(() => {
            console.log("Tabs copied to clipboard!");
        });
    });
});
