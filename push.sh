comment=${1-update}
git add .
git commit -m "$comment"
git push
