# menjalankan perintah sebagai admin(sementara) untuk mengelola directory
sudo chmod -R 777 /home/ubuntu/be-cloud

# pindah ke directory
cd /home/ubuntu/be-cloud

# add npm and node to path
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

# install node modul
npm install

# start node app ind the background
node index.js > app.out.log 2> app.err.log < /dev/null &