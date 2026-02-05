# GitHub Connection Tasks for eigur.in

## Prerequisites Required
- [ ] GitHub Personal Access Token with repo permissions
- [ ] Confirmation of GitHub username/organization for the repository
- [ ] Confirmation of repository name (should be eigur.in)
- [ ] Domain DNS management access for www.eigur.in

## Task 1: Repository Setup
- [ ] Install GitHub CLI if not available: `curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo gpg --dearmor -o /usr/share/keyrings/githubcli-archive-keyring.gpg`
- [ ] Authenticate with GitHub: `gh auth login` (using the personal access token)
- [ ] Create repository: `gh repo create eigur.in --public --clone`
- [ ] OR add remote to existing local repo: `git remote add origin https://github.com/[username]/eigur.in.git`

## Task 2: Push Initial Code
- [ ] Navigate to projects/eigur.in directory
- [ ] Add all files: `git add .`
- [ ] Commit changes: `git commit -m "Initial commit: Website foundation"`
- [ ] Push to GitHub: `git push -u origin main`

## Task 3: Deployment Setup
- [ ] Option A: GitHub Pages
  - [ ] Go to repository Settings > Pages
  - [ ] Select source as main branch, root folder
  - [ ] Enable GitHub Pages
- [ ] Option B: Vercel/Netlify Integration
  - [ ] Connect GitHub repository to Vercel or Netlify
  - [ ] Configure deployment settings
  - [ ] Enable automatic deployments

## Task 4: Domain Configuration
- [ ] In domain registrar (where you purchased www.eigur.in):
  - [ ] Set A records to point to deployment service
  - [ ] For GitHub Pages: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
  - [ ] Or CNAME record to point to deployment service
- [ ] In deployment service, add custom domain www.eigur.in

## Task 5: Verification
- [ ] Verify website loads at www.eigur.in
- [ ] Test all functionality
- [ ] Confirm SSL certificate is active

## Current Website Features
- Fully responsive design
- Modern UI with gradient backgrounds
- Three featured sections (AI Orchestration, Smart Automation, Data Intelligence)
- Call-to-action section
- Professional footer