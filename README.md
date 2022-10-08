# noip-renew
Auto renew for noip domains
It use puppeteer to autoclick the buttons in noip domains

installation:

git clone https://github.com/4cyber/noip-renew
cd noip-renew
npm i

N.B. you MUST edit the index.js to change var user and var pass with your noip informations

usage:
node index.js

best usage is to crontab that with daily
crontab -e
@daily node PATHTOTHISFOLDER/index.js
