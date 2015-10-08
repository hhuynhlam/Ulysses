# check for params
if [ -z "$HOST" ];
then
    echo "error: HOST not defined"
    exit 1
fi
if [ -z "$USER" ];
then
    echo "error: USER not defined"
    exit 1
fi

# clean and build local_dist
pushd ../..
gulp build

# create package
mkdir _dist
cp -a ./src ./_dist/src
cp package.json _dist/package.json

tar -zcf package.tar ./_dist 
gzip package.tar 

# copy to host
scp -C package.tar.gz $USER@$HOST:~/

# host commands
ssh -t -t $USER@$HOST << 'EOF'
    
    sudo rm -rf haihuynhlam.com.bak
    sudo mv haihuynhlam.com haihuynhlam.com.bak

    sudo mkdir haihuynhlam.com
    sudo mv package.tar.gz ./haihuynhlam.com
    cd haihuynhlam.com
    
    sudo gunzip package.tar.gz
    sudo tar -xvf package.tar
    sudo rm package.tar

    sudo mv ./_dist/* ./
    sudo rm -rf ./_dist

    sudo npm install --production

    sudo svc -d /service/haihuynhlam.com
    sudo svc -u /service/haihuynhlam.com

    exit 0

EOF

# # cleanup
rm -rf _dist
rm package.tar.gz
