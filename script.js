//start of file -- js -- 
document.addEventListener('DOMContentLoaded', () => {
  const terminal = document.getElementById('terminalOutput');
  const clearButton = document.getElementById('clearTerminal');
  const popup = document.getElementById('popup');
  const popupTitle = document.querySelector('.popup-title');
  const popupContent = document.getElementById('popupContent');
  const closePopupBtn = document.getElementById('closePopup');
  const asciiBox = document.getElementById('asciiBox');
// easter egg added for fun- make me a sandwich
  asciiBox.addEventListener('click', () => {
    terminal.innerHTML += `
      <di>jac@techhost:~$ sudo rick_rolled</div>
      <div>[ OK ] Never gonna give you up...
    `;
    terminal.scrollTop = terminal.scrollHeight;

    const audio = document.getElementById('rickAudio');
    if(audio) {
      audio.currentTime = 0; // Restart if clicked again
      audio.play();
    }
  });

// this is for the file contents -- resources content
  const directoryStructure = {
    resources: [
      {
        name: 'comparing_OS.txt', content: `
--------------------------------------------
::Resource: OS Comparison – Win, macOS, Linux::
--------------------------------------------
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
------------------------------------------
::Resource: Win 10 vs Win 11 – Top 5 Tasks::
------------------------------------------
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
-----------------------------------------------
::Resource: Win11 Tips & Tricks – Top 5 Features::
-----------------------------------------------
*1. Move Start Button*
- How: Right-click Taskbar ➜ Taskbar settings ➜ Taskbar behaviors ➜ Align Left or Center.  
- Why: Restores classic Start menu position for familiarity.  

~~~~~~~~~~~~~~~~~
*2. Enable Dark Mode*
- How: Win+I ➜ Personalization ➜ Colors ➜ Choose “Dark.”  
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
------------------------------------------
::Resource: Common CMD File/Folder Commands::
------------------------------------------
*Navigation*
cd foldername    – Change directory  
cd .. / cd ../.. – Move up 1 or 2 levels  
dir              – List files & folders  
tree /f          – Show directory tree w/files  

~~~~~~~~~~~~~~~~~
*File & Folder Management*
mkdir name       – Create folder  
echo text > file – Create file w/content  
copy file dest   – Copy file to new location  
move file dest   – Move file to new location  
ren old new      – Rename a file  
del file         – Delete a file  
rmdir folder /S/Q– Delete folder & contents  
cls              – Clear terminal screen  

-----------------
** End Of File **
-----------------
` },
      {
        name: 'command_propmt_2.txt', content: `
-----------------------------------------------
::Resource: System & Network CMD Essentials::
-----------------------------------------------
*System Commands*
systeminfo        – View system details (OS, hardware, updates).  
tasklist          – List running processes + PIDs.  
taskkill /F /IM app.exe – Force close app (e.g., notepad.exe).  
sfc /scannow      – Scan & repair system files.  
shutdown /r /t 0  – Restart computer immediately.  

~~~~~~~~~~~~~~~~~
*Network Commands*
ping google.com   – Test network connectivity.  
ipconfig /all     – View full network configuration.  
ipconfig /flushdns– Clear DNS cache.  
netstat -an       – Show active connections & listening ports.  
tracert google.com– Trace network route to destination.  

-----------------
** End Of File **
-----------------
` },
      {
        name: 'windows_ps_1.txt', content: `
-----------------------------------------------
::Resource: File & Directory Management (CMD vs PS)::
-----------------------------------------------
*Show Current Directory*
- CMD: cd  
- PS:  Get-Location  

*List Files & Folders*
- CMD: dir  
- PS:  Get-ChildItem  

*Change Directory*
- CMD: cd foldername  
- PS:  Set-Location foldername  

*Create Folder/File*
- CMD: mkdir name | echo. > file.txt  
- PS:  New-Item -ItemType Directory|File -Path name  

*Rename/Move/Delete*
- CMD: ren old new | move file dest | del file  
- PS:  Rename-Item old -NewName new | Move-Item | Remove-Item  

*View File Contents*
- CMD: type file.txt  
- PS:  Get-Content file.txt  

*Clear Screen*
- CMD: cls  
- PS:  Clear-Host  

-----------------
** End Of File **
-----------------
` },
      {
        name: 'windows_ps_2.txt', content: `
-----------------------------------------------
::Resource: Network Commands (CMD vs PS)::
-----------------------------------------------
*View Wireless Adapter Info*
- CMD: netsh wlan show interfaces  
- PS:  Get-NetAdapter -Name 'Wi-Fi'  

*Check Network Config*
- CMD: ipconfig /all  
- PS:  Get-NetIPConfiguration  

*Flush DNS Cache*
- CMD: ipconfig /flushdns  
- PS:  Clear-DnsClientCache  

*Ping a Website*
- CMD: ping google.com  
- PS:  Test-Connection google.com  

*Trace Network Route*
- CMD: tracert google.com  
- PS:  Test-NetConnection google.com -TraceRoute  

-----------------
** End Of File **
-----------------
` },
    ],
    projects: [
      {
        name: 'macos_install.txt', content: `
--------------------------------
::Project: macOS Clean Install::
--------------------------------
*Overview*
Performed a clean installation of macOS on a 2020 MacBook Pro to eliminate legacy data, restore performance, and create a fresh, up-to-date environment. 
Reconnected the device to the Apple ecosystem for seamless sync across all personal Apple hardware.
~~~~~~~~~~~~~~~~~
*System Specs*
- Device: 2020 MacBook Pro (Intel Core i7, 32GB RAM, 1TB SSD)
- macOS Version: Sequoia 15.4
~~~~~~~~~~~~~~~~~
*Key Steps*
- Prepped for Install: Signed out of Apple ID, disabled Find My Mac, and backed up essentials.
- Wiped Drive: Booted into Recovery Mode, formatted SSD (APFS, GUID).
- Reinstalled macOS: Used Internet Recovery to download and install the latest version.
- Set Up System: Created user account, configured trackpad and preferences, updated to Sequoia 15.4.
- Reconnected Apple Ecosystem: Signed into Apple ID, verified iCloud sync, and tested Continuity features (Handoff, AirDrop, Universal Clipboard).
----------------- 
** End Of File ** 
-----------------
` },
      {
        name: 'vm_config.txt', content: `
--------------------------------
::Project: VM Configuration::
--------------------------------
*Overview*
Set up a virtualized Ubuntu 24.04 LTS environment on Windows 11 using Oracle VM VirtualBox for Linux practice and secure testing—without impacting the host system.
~~~~~~~~~~~~~~~~~
*Host Specs*
- Device: Acer Nitro 5 (i5 9th Gen, 16GB RAM, 256GB SSD)
- OS: Windows 11 Home
- Virtualization: VT-x enabled
~~~~~~~~~~~~~~~~~
*Key Steps*
- Installed VirtualBox + Extension Pack (USB, clipboard support).  
- Verified BIOS virtualization settings.  
- Created VM: 4GB RAM, 2 cores, 35GB dynamic disk.  
- Installed Ubuntu (Minimal Install).  
- Ran updates:  
  sudo apt update && sudo apt upgrade -y  
- Enabled Shared Clipboard (Bidirectional).  
- Disabled desktop animations to boost VM performance.  
- Verified network, terminal, and basic responsiveness.  
-----------------
** End Of File **
-----------------
` },
      {
        name: 'windows_repair.txt', content: `
---------------------------------------
::Project: Windows Repair & Upgrades::
---------------------------------------
*Overview*
Repaired an Acer Nitro 5 AN515-54-54W2 with structural damage and upgraded hardware to improve performance and storage. Tasks included fixing the display assembly, upgrading RAM, and cloning Windows to dual NVMe SSDs using Acronis True Image.
~~~~~~~~~~~~~~~~~
*Device Specs (Before)*
- Model: Acer Nitro 5 AN515-54-54W2
- CPU: Intel Core i5 (9th Gen)
- Memory: 16GB DDR4 RAM
- Storage: 256GB SK Hynix PCIe NVMe SSD
- Issues: Cracked lid, loose hinges, separating bezel
~~~~~~~~~~~~~~~~~
*Key Steps*
- Disassembled laptop: removed lid, bezel, and hinge mounts.  
- Replaced lid/bezel and reapplied adhesive to secure hinges.  
- Reassembled components and verified display + peripherals.  
- Upgraded RAM: 2x8GB → 2x16GB (32GB total).  
- Installed 500GB Crucial SSD in secondary M.2 slot for cloning.  
- Cloned OS from 256GB SK Hynix → 500GB Crucial using Acronis True Image.  
- Swapped SSDs: moved cloned drive to primary slot, installed second 500GB SSD for storage.  
- Initialized and formatted new SSDs for a total of 1TB NVMe storage.  
-----------------
** End Of File **
-----------------
` },
      {
        name: 'vm_optimize.txt', content: `
--------------------------------------
::Project: VM Optimization & Hardening::
--------------------------------------
*Overview*
Boosted Ubuntu 24.04 LTS VM performance in VirtualBox and applied basic security hardening to the VM and Windows 11 host.
~~~~~~~~~~~~~~~~~
*Host Specs*
- Acer Nitro 5 (i5 9th Gen, 32GB RAM, Dual 500GB SSDs)
- Windows 11 Home, VT-x enabled
~~~~~~~~~~~~~~~~~
*Key Steps*
- Increased VM resources:  
  • RAM: 6GB  
  • Disk: 60GB (resized .vdi)  
  • Video Memory: 128MB  
- Resized root partition with growpart + resize2fs.  
- Disabled unused Linux services (e.g., CUPS).  
- Applied updates and cleaned system:  
  sudo apt update && sudo apt upgrade -y  
- Hardened Windows host:  
  • Updated patches & enabled firewall.  
  • Removed startup bloat & cleared temp files.  
-----------------
** End Of File **
-----------------
` },
      {
        name: 'backup_recovery.txt', content: `
-------------------------------------
::Project: Backup & Recovery Setup::
-------------------------------------
*Overview*
Created a bootable recovery USB and system image backup for Windows 11 using Macrium Reflect Free.
~~~~~~~~~~~~~~~~~
*Tools & Hardware*
- Macrium Reflect Free
- 16GB USB Flash Drive
- Secondary 500GB NVMe SSD
~~~~~~~~~~~~~~~~~
*Key Steps*
- Created rescue USB with UEFI support + drivers.  
- Tested recovery boot (BIOS F12).  
- Backed up primary SSD to secondary SSD:  
  • Compression + verification enabled  
  • Backup saved to D:\System_Backups  
- Verified backup integrity and documented process.  
-----------------
** End Of File **
-----------------
` },
    ]
  };

  if (!sessionStorage.getItem('booted')) {
    sessionStorage.setItem('booted', 'true');
    playBootSequence();
  } else {
    renderMainTerminal();
  }
// nano function to mock opening the txt file(s) p1
  clearButton.addEventListener('click', () => {
    sessionStorage.clear();
    location.reload();
  });

// nano function to mock opening the txt file(s) p2
  closePopupBtn.addEventListener('click', () => {
    popup.classList.add('hidden');
    popup.classList.remove('nano-mode');
  });

// boot-up sequence
  function playBootSequence() {
    const bootMessages = [
      "[ OK ] Initializing system services...",
      "[ OK ] Loading JAC Terminal Portfolio...",
      "[ OK ] Boot sequence complete.",
      ""
    ];
    typeLines(bootMessages, renderMainTerminal);
  }
// arrinving to the site notation -- navigation output -- 
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
    // terminal output -- folders (dir) -- 
    terminal.innerHTML = "";
    typeLines(mainTerminalContent, () => {
      const ul = document.createElement('ul');
      ul.innerHTML = `
        <li><span class="directory">about_me/</span></li>
        <li><span class="directory">cv_skills/</span></li>
        <li><span class="directory">projects/</span></li>
        <li><span class="directory">resources/</span></li>
        <li><span class="directory">web_portfolio/</span></li>
        <li><span>site_nav.txt</span></li>
      `;
      terminal.appendChild(ul);
// cursor blinking animation
      const prompt = document.createElement('p');
      prompt.innerHTML = `jac@techhost:/home$ <span class="cursor">_</span>`;
      terminal.appendChild(prompt);

      bindDirectoryClicks();
    });
  }

  function bindDirectoryClicks() {
    terminal.addEventListener('click', (e) => {
      if (e.target.classList.contains('directory')) {
        const folder = e.target.textContent.replace('/', '').toLowerCase();
        if (directoryStructure[folder]) {
          openMultiFileDirectory(folder);
        } else {
          openSingleFileDirectory(folder);
        }
      }
    });
  }
// opening folders (dir) -- single + multi files -- 
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
        li.innerHTML = `<span class="file">${file.name}</span>`;
        ul.appendChild(li);
      });
      terminal.appendChild(ul);

      const prompt = document.createElement('p');
      prompt.innerHTML = `jac@techhost:/${folder}$ <span class="cursor">_</span>`;
      terminal.appendChild(prompt);

      bindFileClicks(folder);
    });
  }
// pop-up window in termina 
  function bindFileClicks(folder) {
    terminal.querySelectorAll('.file').forEach(fileEl => {
      fileEl.addEventListener('click', () => {
        const fileName = fileEl.textContent;
        const file = directoryStructure[folder].find(f => f.name === fileName);
        if (file) openFilePopup(fileName, file.content);
      });
    });
  }
// about-me, tech skills, and web portfolio
  function openPopup(folder, fileName) {
    if (folder === 'about_me') {
      popup.classList.add('nano-mode');
      popupTitle.textContent = `${fileName} — nano`;
      popupContent.textContent = `
-------------- 
:: About Me :: 
-------------- 
about_me > 
Tech is my passion—whether I’m building hardware, exploring software, or crafting my own tools and workflows. I daily drive Windows, macOS, and Linux, and I thrive working across platforms, from open-source to proprietary systems. Home labbing and building from scratch aren’t just hobbies—they’re my way of life.  
----------------- 
** End Of File ** 
-----------------
`;
    } else if (folder === 'cv_skills') {
      popup.classList.add('nano-mode');
      popupTitle.textContent = `${fileName} — nano`;
      popupContent.textContent = `
---------------------- 
:: TECHNICAL SKILLS :: 
---------------------- 
tech_skills>
- Hardware: PC/Laptop repairs, upgrades (RAM, SSD, displays), system builds, troubleshooting
- Software & OS: Windows 10/11, Linux, macOS, Syncthing, pCloud, Nextcloud, Microsoft 365
- Web & Automation Tools: SharePoint site design, Power Automate workflows, basic HTML/CSS/JS
- Networking & Security: Basic network diagnostics, system hardening, firewall configuration
-----------------------------
:: PROFESSIONAL EXPERIENCE ::
-----------------------------
prof_exp>
- 3+ years supporting end users onsite and remotely
- Skilled at diagnosing and resolving hardware/software issues
- Streamlining workflows to improve efficiency and user experience
----------------------------------------
:: COMPLETED COURSES & CERTIFICATIONS ::
----------------------------------------
course_certs>
- CompTIA ITF+
- CompTIA A+
- CompTIA Tech+
- Network Fundamentals
- Cybersecurity Fundamentals
----------------- 
** END OF FILE ** 
-----------------
`;
    } else if (folder === 'web_portfolio') {
      popup.classList.remove('nano-mode');
      popupTitle.textContent = `${fileName} — browser`;
      popupContent.innerHTML = `
<p style="text-align:center;"><strong>Web Portfolio Preview</strong></p>
<img src="Assets/web_portfolio.png" alt="Web Portfolio Preview" />
<p style="text-align:center;">
  <a href="https://www.jactechknowledge-y.com/" target="_blank" style="color:#00ff90; text-decoration:none;">
    🖥️ Open Full Website in New Tab
  </a>
</p>`;
    }
    popup.classList.remove('hidden');
  }

  function openFilePopup(fileName, content) {
    popup.classList.add('nano-mode');
    popupTitle.textContent = `${fileName} — nano`;
    popupContent.textContent = content;
    popup.classList.remove('hidden');
  }

  function typeLines(lines, callback, lineDelay = 400, charDelay = 20) {
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
