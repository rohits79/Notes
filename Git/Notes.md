1. Git has three stages - Modified -> Staged (ready to be checked in) and Committed (Checked In)

2. List current git config
   git config --list
   
3. Pull entire repository to your disk
   git clone https://URL/location
   git clone https://URL/location folder -> checkouts repository into new 'folder'
   
4. Check status of current git repository
   git status
   git status -A (less verbose output) 
   
5. Add new/untracked file
   git add fileName
   git add directoryName
   
6. To diff between staged and modified
   git diff

7. To diff between staged and last commit
   git diff --staged
   
8. To commit
   git commit -m "comment"
   
9. To commit without staging
   git commit -a -m "comment"