DAY 2 — NODE CLI APP + CONCURRENCY + LARGE DATA PROCESSING

#Overview
This task focused on identifying system configurations, installing and managing Node.js versions via NVM, and benchmarking Buffer vs Stream performance using Node.js — all executed through the terminal.


#Folder Structure
Day1/
│
├── introspect.js              # Node script for system introspection
├── system-report.md           # System details with command outputs & screenshots
│
├── logs/
│   └── day1-perf.json         # Performance benchmark results
│
└── screenshot/
    ├── pic1.png
    ├── pic2.png
    ├── pic3.png
    └── pic4_1.png


🧩 Step-by-Step Process

🔹 1. Identify and Document System Details

OS Version
command used: lsb_release -a
Output:
Distributor ID: Ubuntu
Description:    Ubuntu 24.04.3 LTS
Release:        24.04
Codename:       noble

Current Shell
command used: echo $SHELL
Output:
/bin/bash

Node Binary Path
command used: which node
output: /usr/bin/node
command used: which npm
output: /usr/bin/npm
command used: whereis node
output: node: /usr/bin/node /usr/include/node /usr/share/man/man1/node.1.gz

NPM Global Installation
command used: npm root -g
output: /usr/local/lib/node_modules
command used: npm prefix
output: usr/local

All PATH Entries Including “node” or “npm”
command used: echo $PATH | tr ':' '\n' | grep -E 'node|npm'
Output:
Nothing appears — this means no explicit "node" or "npm" folders are found, but Node.js can still work if installed in default system directories.


🔹 2. Install & Use NVM (Node Version Manager)
Install NVM
command used: curl -o- https://raw.githubusercontent.com/nvm/master/install.sh | bash

Switch Node from LTS → Latest and Back
commands used:
nvm install --lts
nvm install node
nvm use --lts
nvm use node


🔹 3. Create introspect.js Script
A Node.js script that prints system and user details.
Output:
<img width="1920" height="1080" alt="pic4_1" src="https://github.com/user-attachments/assets/d9d0bc07-8e91-4845-98f6-44e9e8ef4e90" />



🔹 4. STREAM vs BUFFER Performance Benchmark
Steps Performed:
Implemented two versions:
Buffer: using fs.readFileSync()
Stream: using fs.createReadStream()
Measured:
Execution time → performance.now()
Memory usage → process.memoryUsage().rss
Stored results in → logs/day1-perf.json
Output:
<img width="1920" height="1080" alt="pic5_2" src="https://github.com/user-attachments/assets/4e0946a9-2f4d-4f1d-aadb-f6d40a0abcb8" />
<img width="1920" height="1080" alt="pic5_1" src="https://github.com/user-attachments/assets/d86ba9a3-7b45-44e0-a0fc-fea7714a2a0f" />


🙌 Author Manya Sharma B.Tech CSE | DAY 2 — NODE CLI APP + CONCURRENCY + LARGE DATA PROCESSING (HestaBit Internship Program)


