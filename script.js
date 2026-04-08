// Configuration Constants
const CONFIG = {
  TYPING_DELAYS: {
    LINE: 400,
    CHAR: 20
  },
  MAX_TERMINAL_LINES: 100 // Prevent memory issues
};

document.addEventListener('DOMContentLoaded', () => {
  const terminal = document.getElementById('terminalOutput');
  const clearButton = document.getElementById('clearTerminal');
  const popup = document.getElementById('popup');
  const popupTitle = document.querySelector('.popup-title');
  const popupContent = document.getElementById('popupContent');
  const closePopupBtn = document.getElementById('closePopup');
  const asciiBox = document.getElementById('asciiBox');

  // Easter egg - Rick Roll
  asciiBox.addEventListener('click', () => {
    terminal.innerHTML += `
      <div>jac@techhost:~$ sudo rick_rolled</div>
      <div>[ OK ] Never gonna give you up...</div>
    `;
    terminal.scrollTop = terminal.scrollHeight;

    const audio = document.getElementById('rickAudio');
    if (audio) {
      audio.currentTime = 0;
      audio.play().catch(err => {
        console.warn('Audio playback failed:', err);
        terminal.innerHTML += `<div style="color:#ff5f56;">[ERROR] Audio playback blocked by browser</div>`;
      });
    }
  });

  // Directory structure with file contents
  const directoryStructure = {
    resources: [
      {
        name: 'comparing_OS.txt', content: `
-------------------------------------
::OS Comparison – Win, macOS, Linux::
-------------------------------------
*Kernel Type*
- Win: Hybrid  
- macOS: XNU (Hybrid)  
- Linux: Monolithic

~~~~~~~~~~~~~~~~~
*File Systems*
- Win: NTFS, FAT32  
- macOS: HFS+, APFS  
- Linux: ext3, ext4

~~~~~~~~~~~~~~~~~
*User Interface*
- Win: Explorer  
- macOS: Aqua  
- Linux: GNOME, KDE, XFCE

~~~~~~~~~~~~~~~~~
*Customization*
- Win: Limited  
- macOS: Minimal  
- Linux: Highly customizable

~~~~~~~~~~~~~~~~~
*Gaming*
- Win: Best (DirectX)  
- macOS: Limited library  
- Linux: Steam Play, Proton improving

-----------------
** End Of File **
-----------------
` },
      {
        name: 'windows_10_11.txt', content: `
--------------------------------
::Win10 vs Win11 – Top 5 Tasks::
--------------------------------
*Task 1: Settings App*
- Win10: Win+I ➜ System, Devices, Network, Update & Security.  
- Win11: Win+I ➜ Redesigned layout (Bluetooth & Devices, Network, Windows Update).  

~~~~~~~~~~~~~~~~~
*Task 2: Control Panel*
- Win10: Search "Control Panel" ➜ System & Security, Programs, Devices.  
- Win11: Still accessible, but redirects to Settings for some tools.  

~~~~~~~~~~~~~~~~~
*Task 3: File Explorer*
- Win10: Win+E ➜ This PC, Quick Access, drives & folders.  
- Win11: Win+E ➜ Streamlined layout with modern icons & Quick Access.  

~~~~~~~~~~~~~~~~~
*Task 4: Task Manager*
- Win10: Ctrl+Shift+Esc ➜ Processes, Performance, Startup.  
- Win11: Same shortcut ➜ Updated interface with color-coded metrics.  

~~~~~~~~~~~~~~~~~
*Task 5: Device Manager*
- Win10: Right-click Start ➜ Device Manager for hardware troubleshooting.  
- Win11: Win+X ➜ Similar layout, minor visual updates.  
-----------------
** End Of File **
-----------------
` },
      {
        name: 'windows_11_end_users.txt', content: `
----------------------------------------
::Win11 Tips & Tricks – Top 5 Features::
----------------------------------------
*1. Move Start Button*
- How: Right-click Taskbar ➜ Taskbar settings ➜ Taskbar behaviors ➜ Align Left or Center.  
- Why: Restores classic Start menu position for familiarity.  

~~~~~~~~~~~~~~~~~
*2. Enable Dark Mode*
- How: Win+I ➜ Personalization ➜ Colors ➜ Choose "Dark."  
- Why: Reduces eye strain and saves battery on laptops.  

~~~~~~~~~~~~~~~~~
*3. Snap Layouts*
- How: Hover over maximize button or press Win+Z ➜ Select layout.  
- Why: Quickly organize windows for efficient multitasking.  

~~~~~~~~~~~~~~~~~
*4. Focus Assist*
- How: Win+I ➜ System ➜ Focus assist ➜ Choose mode (Priority/Alarms only).  
- Why: Minimize distractions by filtering notifications.  

~~~~~~~~~~~~~~~~~
*5. Virtual Desktops*
- How: Win+Tab ➜ New desktop ➜ Switch with Win+Ctrl+Left/Right Arrow.  
- Why: Create separate workspaces for better organization.  
-----------------
** End Of File **
-----------------
` },
      {
        name: 'command_prompt_1.txt', content: `
--------------------------------------
::Windows CMD File / Folder Commands::
--------------------------------------
*Navigation*
cd foldername     → change directory
cd ..             → go up one level
cd ../..          → go up two levels

dir               → list files/folders
tree /f           → show directory structure

~~~~~~~~~~~~~~~~~
*File & Directory*
mkdir name        → create folder
echo text > file  → create file with content

copy file dest    → copy file
move file dest    → move file
ren old new       → rename file

del file          → delete file
rmdir /S /Q name  → delete folder + contents

~~~~~~~~~~~~~~~~~
*System:
cls               → clear terminal

-----------------
** End Of File **
-----------------
` },
      {
        name: 'command_prompt_2.txt', content: `
-----------------------------------
::System & Network CMD Essentials::
-----------------------------------
*System*
systeminfo            → view system details
tasklist              → list running processes + PIDs
taskkill /F /IM app   → force close application

sfc /scannow          → scan + repair system files
shutdown /r /t 0      → restart system immediately

~~~~~~~~~~~~~~~~~
*Network*
ping google.com       → test connectivity

ipconfig /all         → view network configuration
ipconfig /flushdns    → clear DNS cache

netstat -an           → show active connections + ports
tracert google.com    → trace route to destination

-----------------
** End Of File **
-----------------
` },
      {
        name: 'windows_powershell_1.txt', content: `
-------------------------------------------
::File & Directory Management (CMD vs PS)::
-------------------------------------------
*Show Current Directory*
- CMD: cd  
- PS:  Get-Location  

~~~~~~~~~~~~~~~~~
*List Files & Folders*
- CMD: dir  
- PS:  Get-ChildItem  

~~~~~~~~~~~~~~~~~
*Change Directory*
- CMD: cd foldername  
- PS:  Set-Location foldername  

~~~~~~~~~~~~~~~~~
*Create Folder/File*
- CMD: mkdir name | echo. > file.txt  
- PS:  New-Item -ItemType Directory|File -Path name  

~~~~~~~~~~~~~~~~~
*Rename/Move/Delete*
- CMD: ren old new | move file dest | del file  
- PS:  Rename-Item old -NewName new | Move-Item | Remove-Item  

~~~~~~~~~~~~~~~~~
*View File Contents*
- CMD: type file.txt  
- PS:  Get-Content file.txt  

~~~~~~~~~~~~~~~~~
*Clear Screen*
- CMD: cls  
- PS:  Clear-Host  

-----------------
** End Of File **
-----------------
` },
      {
        name: 'windows_powershell_2.txt', content: `
--------------------------------
::Network Commands (CMD vs PS)::
--------------------------------
*View Wireless Adapter Info*
- CMD: netsh wlan show interfaces  
- PS:  Get-NetAdapter -Name 'Wi-Fi'  

~~~~~~~~~~~~~~~~~
*Check Network Config*
- CMD: ipconfig /all  
- PS:  Get-NetIPConfiguration  

~~~~~~~~~~~~~~~~~
*Flush DNS Cache*
- CMD: ipconfig /flushdns  
- PS:  Clear-DnsClientCache  

~~~~~~~~~~~~~~~~~
*Ping a Website*
- CMD: ping google.com  
- PS:  Test-Connection google.com  

~~~~~~~~~~~~~~~~~
*Trace Network Route*
- CMD: tracert google.com  
- PS:  Test-NetConnection google.com -TraceRoute  

-----------------
** End Of File **
-----------------
` },
      {
        name: 'linux_dd_setup.txt', content: `
----------------------------
::Linux Daily Driver Setup::
----------------------------
*OS*
Windows 11 → Zorin OS Lite (XFCE)
- Lightweight, low resource usage
- Ideal for budget hardware

~~~~~~~~~~~~~~~~~
*Productivity*
MS 365 → LibreOffice
- Writer / Calc / Impress
- Free + multi-format support

PDF:
Adobe → Okular + Libre Draw + PDF Arranger

~~~~~~~~~~~~~~~~~
*Communication*
Outlook → Mailfence  
Gmail → Proton Mail  

Teams → Jitsi + Element  
SMS → Signal  

~~~~~~~~~~~~~~~~~
*Storage*
OneDrive → pCloud  

File Server:
- python3 http.server + Syncthing
- Local-first, full control

~~~~~~~~~~~~~~~~~
*Editing*
VS Code → Geany  
Clipchamp → OpenShot  
WavePad → Audacity  

~~~~~~~~~~~~~~~~~
*Media*
WMP → VLC  
YouTube → FreeTube  
Spotify → gPodder  

~~~~~~~~~~~~~~~~~
*Remote Desk*
AnyDesk → RustDesk  

-----------------
** End Of File **
-----------------
` },
      {
        name: 'linux_terminal_commands.txt', content: `
---------------------------
::Linux Terminal Commands::
---------------------------
*Navigation*
cd folder_name      → change directory
cd ..               → go up one level
cd ../..            → go up two levels

ls                  → list files/folders
ls -l               → detailed view
ls -a               → show hidden files

pwd                 → show current location

tree                → view folder structure
tree -f             → show full paths

~~~~~~~~~~~~~~~~~
*File & Directory*
mkdir folder_name   → create folder
touch file.txt      → create empty file

cp file dest/       → copy file
mv file dest/       → move file
mv old new          → rename file

rm file.txt         → delete file ⚠️
rmdir folder_name   → delete empty folder

~~~~~~~~~~~~~~~~~
*File View & Edit*
cat file.txt        → display file contents

nano file.txt       → edit in terminal
gedit file.txt      → open GUI editor

~~~~~~~~~~~~~~~~~
*System*
clear               → clear terminal
exit                → close terminal

-----------------
** End Of File **
-----------------
` },
    ],
    projects: [
      {
        name: 'macOS_install.txt', content: `
---------------------------------------
:: macOS Clean Install & Device Sync ::
---------------------------------------
*Goal*
Reset MacBook Pro to a clean, optimized state and restore full Apple ecosystem sync.

*Key Actions*
- Signed out of Apple ID + disabled Find My Mac
- Booted into Recovery (Cmd + R) and wiped SSD (APFS/GUID)
- Reinstalled latest macOS via Internet Recovery
- Completed initial setup with local account
- Updated system to macOS Sequoia 15.4
- Reconnected Apple ID + re-enabled ecosystem services

*Result*
[ OK ] Clean macOS install (Sequoia 15.4)
[ OK ] System performance restored
[ OK ] Full sync across iPhone, iPad, and Apple Watch
[ OK ] Continuity features verified (Handoff, AirDrop, iCloud)

-----------------
** End Of File **
-----------------
` },
      {
        name: 'linux_vm_setup.txt', content: `
-------------------------------------
:: Virtualization & Linux VM Setup ::
-------------------------------------
*Goal*
Create an isolated Linux environment for learning, testing, and development without impacting the host system.

*System*
Host: Windows 11 | i5 (9th Gen) | 16GB RAM | 256GB NVMe
VM: Ubuntu 24.04 LTS (VirtualBox)

*Key Actions*
- Installed Oracle VM VirtualBox + Extension Pack
- Verified VT-x virtualization support in BIOS
- Created VM (4GB RAM, 2 CPU, 35GB dynamic disk)
- Installed Ubuntu 24.04 LTS (minimal install)
- Configured user, hostname, and system settings
- Ran system updates via terminal (apt update/upgrade)

*Result*
[ OK ] Functional Ubuntu VM environment
[ OK ] Isolated from host system
[ OK ] Ready for CLI practice, dev work, and testing
[ OK ] Lightweight + optimized resource usage

-----------------
** End Of File **
-----------------
` },
      {
        name: 'windows_pc_upgrade.txt', content: `
--------------------------------------------
:: Laptop Repair, Upgrade, & OS Migration ::
--------------------------------------------
*Goal*
Restore structural integrity, improve performance, and migrate OS to faster storage without reinstalling Windows.

*System*
Acer Nitro 5 | i5 (9th Gen)
Upgraded: 32GB RAM | 1TB NVMe (2x500GB)

*Key Actions*
- Repaired chassis (lid, bezel, hinges, internal mounts)
- Reassembled display components + verified functionality
- Upgraded RAM (16GB → 32GB dual-channel)
- Installed secondary NVMe SSD for OS cloning
- Cloned Windows using Acronis True Image (manual resize)
- Reconfigured storage (primary + secondary NVMe setup)
- Initialized and formatted additional storage drive

*Result*
[ OK ] Structural damage fully repaired
[ OK ] System stability restored
[ OK ] RAM upgraded to 32GB (multitasking + VM ready)
[ OK ] OS migrated successfully (no reinstall)
[ OK ] Dual NVMe setup (1TB total storage)

-----------------
** End Of File **
-----------------
` },
      {
        name: 'optimize_linux_vm.txt', content: `
----------------------------------------------
:: Linux VM Optimization & System Hardening ::
----------------------------------------------
*Goal*
Improve VM performance and apply baseline security hardening across both Linux VM and Windows host.

*System*
Host: Windows 11 | 32GB RAM | Dual NVMe
VM: Ubuntu 24.04 LTS (VirtualBox)

*Key Actions*
- Increased VM resources (RAM 4GB → 6GB, VRAM 128MB, disk 35GB → 60GB)
- Resized VDI using VBoxManage + expanded Linux partitions (growpart, resize2fs)
- Verified system resources (RAM, CPU, disk allocation)
- Scanned open ports and disabled unnecessary services (cups)
- Applied updates and cleaned system packages (apt update/upgrade/autoremove)
- Hardened Windows host (updates, Defender scan, firewall, startup cleanup)

*Result*
[ OK ] VM performance improved (RAM + storage optimized)
[ OK ] Full disk expansion configured and verified
[ OK ] Unnecessary services disabled (reduced attack surface)
[ OK ] Host system updated and secured
[ OK ] Environment ready for dev + security labs

-----------------
** End Of File **
-----------------
` },
      {
        name: 'backup_and_recovery.txt', content: `
--------------------------------------------
:: System Backup & Recovery Configuration ::
--------------------------------------------
*Goal*
Implement a reliable backup and recovery solution to protect system against failure or data loss.

*System*
Windows 11 | Dual NVMe SSD (500GB + 500GB)
Tools: Macrium Reflect | USB Recovery Media

*Key Actions*
- Installed Macrium Reflect and created bootable rescue USB (Windows RE)
- Configured UEFI-compatible recovery environment with required drivers
- Tested recovery media via BIOS boot menu (F12)
- Verified SSD detection and recovery tools functionality
- Created full system image (primary → secondary SSD)
- Enabled compression + backup verification
- Documented backup location and recovery process

*Result*
[ OK ] Bootable recovery media created + tested
[ OK ] Full system image successfully captured
[ OK ] Backup integrity verified
[ OK ] Rapid recovery path established
[ OK ] System protected against failure or corruption

-----------------
** End Of File **
-----------------
` },
       {
        name: 'zorin_os_setup.txt', content: `
--------------------------------
:: Zorin OS Core – Linux (#1) ::
--------------------------------
*Goal*
Build a lightweight Linux system focused on entertainment, productivity, and a clean daily driver experience.

*System*
Zorin OS Core | Minimal Install | Older/Mid-range Hardware

*Key Actions*
- Installed Zorin OS (USB + balenaEtcher, Secure Boot disabled)
- Performed full system updates (apt + flatpak)
- Customized desktop (dark mode, panel layout, icons, fonts)
- Installed apps (SuperTux, SuperTuxKart, Kapman, RustDesk, FreeTube, Firefox)
- Built custom launchers using YAD (GameHub + OfficeHub scripts)
- Created .desktop entries for apps and custom scripts
- Configured clean panel layout + system monitoring tools

*Result*
[ OK ] Lightweight Linux system deployed
[ OK ] Retro gaming + media environment configured
[ OK ] Custom app launchers (GameHub + OfficeHub)
[ OK ] Clean, responsive desktop experience
[ OK ] Fully functional daily driver setup

-----------------
** End Of File **
-----------------
` },
    ]
  };

  // Initialize terminal
  if (!sessionStorage.getItem('booted')) {
    sessionStorage.setItem('booted', 'true');
    playBootSequence();
  } else {
    renderMainTerminal();
  }

  // Clear terminal button
  clearButton.addEventListener('click', () => {
    sessionStorage.clear();
    location.reload();
  });

  // Close popup button
  closePopupBtn.addEventListener('click', () => {
    popup.classList.add('hidden');
    popup.classList.remove('nano-mode');
  });

  // Close popup on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !popup.classList.contains('hidden')) {
      popup.classList.add('hidden');
      popup.classList.remove('nano-mode');
    }
  });

  // Boot-up sequence
  function playBootSequence() {
    const bootMessages = [
      "[ OK ] Initializing system services...",
      "[ OK ] Loading JAC Terminal Portfolio...",
      "[ OK ] Boot sequence complete.",
      ""
    ];
    typeLines(bootMessages, renderMainTerminal);
  }

  // Main terminal screen
  function renderMainTerminal() {
    const mainTerminalContent = [
      "jac@techhost:~$ cd home",
      ">>>",
      "jac@techhost:/home$ cat site_nav.txt",
      "",
      "To navigate this site, select a directory (folder name) to open and view contents.",
      "Click the \"Clear Terminal\" button to return to this home screen.",
      "",
      "Thanks for stopping by!",
      ">>>",
      "",
      "jac@techhost:/home$ ls",
    ];

    terminal.innerHTML = "";
    typeLines(mainTerminalContent, () => {
      const ul = document.createElement('ul');
      ul.innerHTML = `
        <li><span class="directory" role="button" tabindex="0">about_me/</span></li>
        <li><span class="directory" role="button" tabindex="0">cv_skills/</span></li>
        <li><span class="directory" role="button" tabindex="0">projects/</span></li>
        <li><span class="directory" role="button" tabindex="0">resources/</span></li>
        <li><span class="directory" role="button" tabindex="0">web_portfolio/</span></li>
        <li><span>site_nav.txt</span></li>
      `;
      terminal.appendChild(ul);

      const prompt = document.createElement('p');
      prompt.innerHTML = `jac@techhost:/home$ <span class="cursor">_</span>`;
      terminal.appendChild(prompt);

      bindDirectoryClicks();
    });
  }

  // Event delegation for directory clicks
  function bindDirectoryClicks() {
    terminal.addEventListener('click', handleDirectoryClick);
    terminal.addEventListener('keydown', handleDirectoryKeyboard);
  }

  function handleDirectoryClick(e) {
    if (e.target.classList.contains('directory')) {
      navigateToDirectory(e.target);
    } else if (e.target.classList.contains('file')) {
      const fileName = e.target.textContent;
      const folder = e.target.closest('ul').previousElementSibling?.textContent.match(/\/(\w+)\$/)?.[1];
      if (folder) {
        const file = directoryStructure[folder].find(f => f.name === fileName);
        if (file) openFilePopup(fileName, file.content);
      }
    }
  }

  function handleDirectoryKeyboard(e) {
    if ((e.key === 'Enter' || e.key === ' ') && 
        (e.target.classList.contains('directory') || e.target.classList.contains('file'))) {
      e.preventDefault();
      e.target.click();
    }
  }

  function navigateToDirectory(element) {
    const folder = element.textContent.replace('/', '').toLowerCase();
    if (directoryStructure[folder]) {
      openMultiFileDirectory(folder);
    } else {
      openSingleFileDirectory(folder);
    }
  }

  // Single file directories (about_me, cv_skills, web_portfolio)
  function openSingleFileDirectory(folder) {
    const commands = [
      `jac@techhost:/home$ cd ${folder}`,
      `jac@techhost:/${folder}$ ls`
    ];
    let fileName = '';
    if (folder === 'about_me') fileName = 'about_me.txt';
    if (folder === 'cv_skills') fileName = 'cv.txt';
    if (folder === 'web_portfolio') fileName = 'web_portfolio.html';

    commands.push(fileName);
    commands.push(`jac@techhost:/${folder}$ nano ${fileName}`);

    terminal.innerHTML = "";
    typeLines(commands, () => openPopup(folder, fileName));
  }

  // Multi-file directories (resources, projects)
  function openMultiFileDirectory(folder) {
    const commands = [
      `jac@techhost:/home$ cd ${folder}`,
      `jac@techhost:/${folder}$ ls`
    ];
    const files = directoryStructure[folder];
    terminal.innerHTML = "";
    typeLines(commands, () => {
      const ul = document.createElement('ul');
      files.forEach(file => {
        const li = document.createElement('li');
        li.innerHTML = `<span class="file" role="button" tabindex="0">${file.name}</span>`;
        ul.appendChild(li);
      });
      terminal.appendChild(ul);

      const prompt = document.createElement('p');
      prompt.innerHTML = `jac@techhost:/${folder}$ <span class="cursor">_</span>`;
      terminal.appendChild(prompt);
    });
  }

  // Open popup for single-file directories
  function openPopup(folder, fileName) {
    if (folder === 'about_me') {
      popup.classList.add('nano-mode');
      popupTitle.textContent = `${fileName} - nano`;
      popupContent.textContent = `
--------------
:: About Me :: 
--------------
about_me > 
Hey, I’m Justin, and I’m passionate about all things tech. I enjoy tinkering with hardware and creating with software. 
Lately, I’ve been diving into Linux distros on older hardware and exploring open-source and big tech alternative software. 
I love building custom setups, tools, and websites.
----------------- 
** End Of File ** 
-----------------
`;
    } else if (folder === 'cv_skills') {
      popup.classList.add('nano-mode');
      popupTitle.textContent = `${fileName} - nano`;
      popupContent.textContent = `
----------------------
:: Technical Skills :: 
----------------------
tech_skills>
- Hardware: PC/Laptop repairs, upgrades (RAM, SSD, displays), system builds, troubleshooting
- Software & OS: Windows 10/11, Linux, macOS, Syncthing, pCloud, Nextcloud, Microsoft 365
- Web & Automation Tools: SharePoint site design, Power Automate workflows, basic HTML/CSS/JS
- Networking & Security: Basic network diagnostics, system hardening, firewall configuration
-----------------------------
:: Professional Experience ::
-----------------------------
prof_exp>
- 6+ years supporting end users onsite and remotely
- Skilled at diagnosing and resolving hardware/software issues
- Streamlining workflows to improve efficiency and user experience
- Experienced in developing and designing websites and content-managed platforms
----------------------------------------
:: Completed Courses & Certificates ::
----------------------------------------
course_certs>
- CompTIA ITF+
- CompTIA Tech+
- CompTIA A+
- Network Fundamentals
- Cybersecurity Fundamentals
----------------- 
** End Of File ** 
-----------------
`;
    } else if (folder === 'web_portfolio') {
      popup.classList.remove('nano-mode');
      popupTitle.textContent = `${fileName} - browser`;
      popupContent.innerHTML = `
<p style="text-align:center;"><strong>Web Portfolio Preview</strong></p>
<img src="Assets/web_portfolio.png" alt="Web Portfolio Preview" />
<p style="text-align:center;">
  <a href="https://www.jactechknowledge-y.com/" target="_blank" rel="noopener noreferrer" style="color:#00ff90; text-decoration:none;">
    Open Website in New Tab
  </a>
</p>`;
    }
    popup.classList.remove('hidden');
  }

  // Open popup for files in multi-file directories
  function openFilePopup(fileName, content) {
    popup.classList.add('nano-mode');
    popupTitle.textContent = `${fileName} - nano`;
    popupContent.textContent = content;
    popup.classList.remove('hidden');
  }

  // Typing animation functions
  function typeLines(lines, callback, lineDelay = CONFIG.TYPING_DELAYS.LINE, charDelay = CONFIG.TYPING_DELAYS.CHAR) {
    let lineIndex = 0;
    function typeNextLine() {
      if (lineIndex < lines.length) {
        const line = document.createElement('p');
        terminal.appendChild(line);
        terminal.scrollTop = terminal.scrollHeight;
        typeCharacters(line, lines[lineIndex], () => {
          lineIndex++;
          setTimeout(typeNextLine, lineDelay);
        }, charDelay);
      } else if (callback) {
        callback();
      }
    }
    typeNextLine();
  }

  function typeCharacters(element, text, done, charDelay) {
    let i = 0;
    function typeChar() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        terminal.scrollTop = terminal.scrollHeight;
        i++;
        setTimeout(typeChar, charDelay);
      } else {
        done();
      }
    }
    typeChar();
  }
});