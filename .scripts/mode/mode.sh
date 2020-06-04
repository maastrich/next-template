cp .conf/next-config/$1.js ./next.config.js
cp .conf/docker/file/$1 ./Dockerfile

echo -e "\n\nYour are now using \e[32m" $1 "\e[39m mode"
echo -e "Please do not forget to reinstall modules using the \e[32m$2 install\e[39m and \e[32m$2 run docker:build\e[39m commands"
echo -e "You can now run \e[32m$2 run docker:run:$1 \e[39m command\n\n"
