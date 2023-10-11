#!/bin/bash

git add .
git stash save "[yarn release] `date +'%Y-%m-%d %H:%M:%S'`"
git checkout master
git pull origin master
yarn 
sh ./scripts/autoBuild.sh
git add .
yarn standard-version -a
git push origin master --tags
