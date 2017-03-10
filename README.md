Site for Office Park City

### deploy
`rsync -av officeparkcity.com/ gavin@104.236.84.210:/var/www/officeparkcity.com/public_html`

### git push to deploy

add remote repository
`git remote add production ssh://USER@104.236.84.210:/var/repo/officeparkcity.git`

push to master for deploy
`git push production master`