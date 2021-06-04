all: 
	git add .
	var=$(git status --porcelain | grep "^A" | cut -c 4- )
	echo $var
	git commit -m $var
	git push -u origin master