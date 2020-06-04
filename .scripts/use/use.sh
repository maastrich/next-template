cp .conf/package-manager/$1.json ./package.json
echo -e "Now using \e[32m" $1 "\e[39m"
echo -e "Please do not forget to reinstall modules using the \e[32m" $1 " install\e[39m command"
