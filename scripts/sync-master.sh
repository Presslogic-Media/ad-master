#!/bin/bash

git add .
git stash save "[yarn sync] `date +'%Y-%m-%d %H:%M:%S'`"
git checkout master
git pull origin master