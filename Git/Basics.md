1. Git has three stages - *Modified*  -> *Staged* (ready to be checked in) -> *Committed* (Checked In)

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
   
6. Diff between staged and modified
   git diff

7. D1iff between staged and last commit
   git diff --staged
   
8. Commit
   git commit -m "comment"
   
9. Commit without staging
   git commit -a -m "comment"
   
10. Remove file from git repository
    git rm "filename", then followed by usual commit
	
11. Rename/Move file
    git mv FileName NewFileName
	
12. Git History or Log
    git log
	git log -p -2 -> Shows the difference of the last two checkins
	git log --since=2.weeks -> shows logs from last 2 weeks
	git log --since="2 years" -> shows log since last 2 years

13. Unstage
    git reset HEAD - unstaged everything staged
	git reset <fileName> - unstages only the file
	
14. Discard local chanes and revert back
    git checkout -- fileName
	
15. Add remote repository
    git remote add shortName https://URL/location
	
16. Use "git remote -v" to list remote repository

17. Push changes to server
    git push origin master
	
18. Tag
    git tag //lists tags
	git tag -a v1.2 -m "comment"
	
	Tag with hash
	git log --pretty=oneline //lists all version and their hashes
	git tag -a v1.2 9fceb02 
	
	Push tag to server
	git push origin <TagName>