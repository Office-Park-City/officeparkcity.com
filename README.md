Site for Office Park City

### [DEPRECATED] deploy with rsync
`rsync -av officeparkcity.com/ USER@104.236.84.210:/var/www/officeparkcity.com/public_html`

### deployment

git push to deploy has been setup on a remote server

add remote repository
`git remote add production ssh://USER@104.236.84.210:/var/repo/officeparkcity.git`

push to master for deploy
`git push production master`