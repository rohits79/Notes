Branching

- Master is the default branch created when we run git init

- HEAD is the pointer that points to the current branch

- To create new branch
  git branch branchName
  
- See which branch you are on
  git branch
  
- Switch Branch
  git checkout BranchName 
  
- Merge
  git checkout master (the branch you want to merge to)
  git merge branchName (the branch you want to merge from)
  
- Delete a branch
  git branch -d branchName
  
- remote/origin - is the branch for example on the server

- difference between git pull and git fetch is
  git pull == git fetch + git merge
  
- create remote tracking branches 
  git checkout --track origin/branch
  Or
  git checkout -b sf origin/serverfix -> create tracking branch sf
  
- deleting remote branches
  git push origin --delete branchName
 
