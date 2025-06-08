// 🔹 Initial binding for top-level folders
document.querySelectorAll('.directory').forEach(dir => {
    dir.addEventListener('click', () => {
        const folder = dir.textContent.replace('/', '').toLowerCase();
        simulateNav(folder);
    });
});

function simulateNav(folder) {
    const output = document.getElementById('terminalOutput');

    // 🔁 Clear the terminal like a fresh directory change
    output.innerHTML = `
    <p>jac@techhost:~$ cd ${folder}</p>
    <p>jac@techhost:/${folder}$ ls</p>
  `;

    let result = '';

    // 🔹 Folder contents simulation
    if (folder === "content") {
        result = `
      <ul>
        <li><span class="directory">resources/</span></li>
        <li><span class="directory">repairs/</span></li>
        <li><span class="directory">techprojects/</span></li>
        <li><span class="directory">webprojects/</span></li>
      </ul>
    `;
    } else if (folder === "resources") {
        result = `
      <p><span class="file" data-file="linux_tips.txt">linux_tips.txt</span></p>
      <p><span class="file" data-file="command_cheats.txt">command_cheats.txt</span></p>
    `;
    } else if (folder === "repairs") {
        result = `
    <p><span class="file" data-file="keyboard_300w.mp4">keyboard_300w.mp4</span></p>
    <p><span class="file" data-file="display_300w.mp4">display_300w.mp4</span></p>
  `;
    } else if (folder === "about") {
        result = `<p><span class="file" data-file="bio.txt">bio.txt</span></p>`;
    } else if (folder === "skills") {
        result = `<p><span class="file" data-file="certs.txt">certs.txt</span></p>`;
    } else {
        result = `<p>&nbsp;&nbsp;&nbsp;&nbsp;[Empty folder]</p>`;
    }

    // 🔹 Append folder contents
    output.innerHTML += result;

    // 🔹 Add final prompt with cursor
    output.innerHTML += `<p>jac@techhost:/${folder}$ <span class="cursor">_</span></p>`;

    // 🔁 Rebind directory clicks
    document.querySelectorAll('.directory').forEach(dir => {
        dir.onclick = () => {
            const newFolder = dir.textContent.replace('/', '').toLowerCase();
            simulateNav(newFolder);
        };
    });

    // 🔁 Rebind file clicks
    document.querySelectorAll('.file').forEach(file => {
        file.onclick = () => {
            const fileName = file.dataset.file;

            if (fileName === "bio.txt") {
                openPopup("bio.txt — read-only", "Hey, I’m Justin. I'm a tech support pro who builds, fixes, and explores everything from OS installs to terminal scripting. Welcome to my digital lab.");
            } else if (fileName === "certs.txt") {
                openPopup("certs.txt — read-only", "• CompTIA ITF+ (in progress)\n• CompTIA A+ (in progress)\n• Microsoft 365 & Power Platform\n• Ongoing: Linux, Web Dev, Hardware Repair");
            } else if (fileName === "linux_tips.txt") {
                openPopup("linux_tips.txt — read-only", "• sudo apt update && sudo apt upgrade\n• chmod +x script.sh\n• nano ~/.bashrc\n• Creating launchers with .desktop");
            } else if (fileName === "command_cheats.txt") {
                openPopup("command_cheats.txt — read-only", "• ls -al\n• cd ~\n• mkdir project\n• cp file1.txt file2.txt\n• mv old new");
            } else if (fileName === "keyboard_300w.mp4") {
                openPopup("keyboard_300w.mp4 — streaming", `
        <iframe width="100%" height="250" src="https://www.youtube.com/embed/CgvA1GTDXnE"
        title="Keyboard Repair 300w" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
      `);
            } else if (fileName === "display_300w.mp4") {
                openPopup("display_300w.mp4 — streaming", `
        <iframe width="100%" height="250" src="https://www.youtube.com/embed/upfxUydNXMQ"
        title="Display Repair 300w" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
      `);
            }
        };
    });
}

// 🔹 Clear Terminal Button
document.addEventListener('DOMContentLoaded', () => {
    const clearButton = document.getElementById('clearTerminal');
    if (clearButton) {
        clearButton.addEventListener('click', () => {
            location.reload();
        });
    }
});

// 🔹 Open popup
function openPopup(title, content) {
    const popup = document.getElementById('popup');
    const popupTitle = document.querySelector('.popup-title');
    const popupContent = document.getElementById('popupContent');

    popupTitle.textContent = title;

    // Detect if it's an iframe (for YouTube or media)
    if (content.includes("<iframe")) {
        popupContent.innerHTML = content;
    } else {
        popupContent.textContent = content;
    }

    popup.classList.remove('hidden');
}

// 🔹 Close popup
document.getElementById('closePopup').addEventListener('click', () => {
    document.getElementById('popup').classList.add('hidden');
});