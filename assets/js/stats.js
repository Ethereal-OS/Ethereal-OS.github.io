async function fetchStats() {
    try {
        console.log("Fetching stats...");

        // 1. Fetch supported devices count
        const devicesResponse = await fetch("https://raw.githubusercontent.com/Ethereal-OS/Ethereal-Devices/A14/devices.json?raw=true");

        if (!devicesResponse.ok) throw new Error(`HTTP Error: ${devicesResponse.status}`);

        const devicesText = await devicesResponse.text();
        
        let devicesData;
        try {
            devicesData = JSON.parse(devicesText);
        } catch (jsonError) {
            console.error("Error parsing JSON:", jsonError, "Response text:", devicesText);
            return;
        }

        if (!Array.isArray(devicesData)) {
            console.error("devices.json is not an array!", devicesData);
            return;
        }

        document.getElementById("device-supported").textContent = devicesData.length;

        // 2. Fetch GitHub organization members count
        const orgMembersResponse = await fetch("https://api.github.com/orgs/Ethereal-OS/members");
        if (!orgMembersResponse.ok) throw new Error(`GitHub API Error: ${orgMembersResponse.status}`);
        
        const orgMembers = await orgMembersResponse.json();
        document.getElementById("team-members").textContent = orgMembers.length;

        // 3. Fetch GitHub followers count
        const orgDataResponse = await fetch("https://api.github.com/orgs/Ethereal-OS");
        if (!orgDataResponse.ok) throw new Error(`GitHub API Error: ${orgDataResponse.status}`);

        const orgData = await orgDataResponse.json();
        document.getElementById("github-followers").textContent = orgData.followers;

        // 4. Fetch SourceForge Downloads Count
        const response = await fetch("https://ethereal-os.github.io/assets/data/total_downloads.txt");
        const totalDownloads = await response.text();
        document.getElementById("total-downloads").textContent = totalDownloads.trim();

        console.log("Stats updated successfully.");
    } catch (error) {
        console.error("Error fetching stats:", error);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(fetchStats, 500); // Delay to ensure elements exist
});