old=web-app-template
new=my-app

for file in $(git grep $old | cut -d':'  -f 1 | uniq)
do
  echo "replacing '$old' with '$new' in '$file'"
  sed -i "" "s/$old/$new/g" $file
done

bun install
husky install

rm -rf ./setup.sh
