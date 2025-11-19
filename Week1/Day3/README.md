DAY 3 — GIT MASTERY: RESET, REVERT, CHERRY-PICK, BISECT, STASH

#Overview-This project focuses on mastering **advanced Git commands** such as  
`reset`, `revert`, `bisect` and `stash`.  

#Folder Structure
Day3_
│
├── file1.txt
├── file2.txt
├── file3.txt
├── bisect-session.txt
├── stash-session.txt
│
├── repoA/
│ ├── file1.txt
│ └── MERGE-POSTMORTEM.md
│
└── repoB/
└── file1.txt

🧩 Step-by-Step Process
🔹 Step 1: Repository Creation
Created a repository containing **three files** — `file1.txt`, `file2.txt`, and `file3.txt`.  
Made **8 commits**, introducing an intentional **bug in commit 4** for debugging practice.
<img width="1920" height="1080" alt="Day3_1" src="https://github.com/user-attachments/assets/58907a4c-8b6c-4358-aac4-9523bcf8118d" />


🔹 Step 2: Detecting Faulty Commit using `git bisect`
Used `git bisect` to identify the commit that introduced the bug.
Commands:
git bisect start
git bisect bad 
git bisect good <commit-id-of-commit3>
//The bisect process pinpointed commit 4 as the faulty commit.
//Logs of the session are saved in bisect-session.txt.
<img width="1920" height="1080" alt="Day3_2" src="https://github.com/user-attachments/assets/e72ec8bf-cfd3-4eda-8665-7aaa6ac00d57" />


🔹 Step 3: Fixing and Reverting the Bug
After identifying the buggy commit, fixed the issue and reverted it safely.
Command:
git revert <bad-commit-id>
//This created a new commit that undid the buggy changes without altering commit history.

🔹 Step 4: Using Stash Workflow
Made temporary edits, then saved them using git stash before pulling latest changes.
Commands:
git stash
git pull
git stash apply
//This ensured that local uncommitted work was not lost during updates.
//Workflow details are documented in stash-session.txt.
<img width="1920" height="1080" alt="Day3_3" src="https://github.com/user-attachments/assets/c23a2ac4-ccb0-4a0a-b1cd-6d56d8e5420f" />


🔹 Step 5: Merge Conflict Resolution
Created two clones of the same repository: repoA and repoB.
In both, edited the same line in file1.txt to simulate a merge conflict.
During merge, Git detected a content conflict, which was resolved manually by
keeping both changes.
<img width="1920" height="1080" alt="Day3_4" src="https://github.com/user-attachments/assets/4d6070e4-9b17-4a09-aa13-9c973c56e92f" />
<img width="1920" height="1080" alt="Day3_5" src="https://github.com/user-attachments/assets/a0b4088b-d397-4bd0-adab-3e542e4ffeea" />

Details saved in:
repoA/MERGE-POSTMORTEM.md
repoA/file1.txt (shows final merged content)
<img width="1920" height="1080" alt="Day3_6" src="https://github.com/user-attachments/assets/e0286630-0d77-474d-a4ae-e17bf586f188" />

🙌 Author Manya Sharma B.Tech CSE | DAY 2 — NODE CLI APP + CONCURRENCY + LARGE DATA PROCESSING (HestaBit Internship Program)
