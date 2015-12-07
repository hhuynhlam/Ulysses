
# host commands
ssh -t -t hhuynhlam@173.230.154.82 << 'EOF'
    
    pushd haihuynhlam
    
    nvm use v4.2.2
    git add --all
    git reset --hard origin/portfolio
    git pull
    node node_modules/gulp/bin/gulp.js jade
    node node_modules/gulp/bin/gulp.js less
    exit 0
EOF
