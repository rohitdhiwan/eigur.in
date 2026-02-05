# GitHub Repository Setup Instructions

## Step 1: GitHub Authentication
Before proceeding, you need to authenticate with GitHub:

Option A: Using GitHub CLI (recommended):
1. Get a GitHub Personal Access Token with repo permissions
   - Go to GitHub Settings > Developer settings > Personal Access Tokens
   - Create a new token with repo permissions
   - Copy the token
2. Run: `gh auth login` and follow the prompts
   - Choose "Paste an authentication token" when prompted
   - Paste the token you copied

Option B: Using Git credential helper:
1. Store your GitHub credentials securely:
   ```bash
   git config --global credential.helper store
   ```

## Step 2: Create the Repository on GitHub
1. Go to https://github.com/rohitdhiwan/eigur.in
2. Click the green "New" button to create a new repository
3. Enter repository name: "eigur.in"
4. Make sure it's public
5. DO NOT initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

## Step 3: Once Repository is Created
After the repository is created on GitHub, run these commands in sequence:

```bash
cd /home/rohit/.openclaw/workspace/projects/eigur.in
git remote set-url origin https://github.com/rohitdhiwan/eigur.in.git
git push -u origin main
```

## Step 4: Verify Successful Push
Check that all files appear in the GitHub repository:
- index.html
- README.md
- package.json
- .gitignore

## Step 5: Set up GitHub Pages
1. Go to the repository settings
2. Scroll down to "Pages" section
3. Under "Source", select "Deploy from a branch"
4. Select "main" branch and "/" folder
5. Click "Save"

## Step 6: Connect Domain
1. In your domain registrar, add a CNAME record:
   - Name/Host: www
   - Value/Points to: rohitdhiwan.github.io
2. Optionally, you can also add A records pointing to GitHub Pages IP addresses:
   - 185.199.108.153
   - 185.199.109.153
   - 185.199.110.153
   - 185.199.111.153

## Current Status
- Local repository created with all website files ✓
- GitHub CLI installed and ready ✓
- Files ready for push ✓
- Waiting for authentication and remote repository creation ✓