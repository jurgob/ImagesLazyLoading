#!/bin/bash


mkdir ../ImagesLazyLoadingGhPages
cd ../ImagesLazyLoadingGhPages
git clone https://github.com/jurgob/ImagesLazyLoading.git .
git checkout --orphan gh-pages
git rm -rf .
rm '.gitignore'
cp -R ../ImagesLazyLoading/examples/* .
git add *
git commit -a -m "Update gh-pages"
git push origin gh-pages -f

cd ../ImagesLazyLoading/
rm -Rf ../ImagesLazyLoadingGhPages