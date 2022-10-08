# noip-renew
Auto renew for noip domains<br>
It use puppeteer to autoclick the buttons in noip domains

installation:

git clone https://github.com/4cyber/noip-renew<br>
cd noip-renew<br>
npm i<br>

N.B. you MUST edit the index.js to change var user and var pass with your noip informations

usage:<br>
node index.js<br>

best usage is to crontab that with daily<br>
crontab -e<br>
@daily node PATHTOTHISFOLDER/index.js
