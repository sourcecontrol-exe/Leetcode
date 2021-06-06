all: 
	git add .
	v=$(git status --porcelain | grep "^A" | cut -c 4- )
	echo $v
	git commit -m {$v}
	git push -u origin master