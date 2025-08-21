#!/bin/bash

set -e # abort on errors


branchName="gh-pages"
repoName="$(basename -s .git "$(git config --get remote.origin.url)")"
directoryPath="../${PWD##*/}_gh-pages"

if [ ! -d "${directoryPath}" ]; then
  echo "GitHub Pages directory not found. Check how to setup in the README."
  exit 1
fi

VITE_BASE_URL="/${repoName}/" npm run build-only
rsync -av dist/ "${directoryPath}"/
cd "${directoryPath}"
cp index.html 404.html
git add -A
git commit -m "deploy: $(date -Ins)"
git push origin "${branchName}"
cd -
