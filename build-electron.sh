#!/bin/sh

CLONETARGET="build-electron"
REPOGIT=git@github.com:mandolyte/rrouter.git

if [ "$1x" != "x" ] 
then
	CLONETARGET=$1
else 
	echo Usage: sh ${CLONETARGET}.sh targetdir
	echo where targetdir is git clone folder to create
	echo For example, sh ${CLONETARGET}.sh myapp
	exit
fi

if [ -d "$CLONETARGET" ]; then
	echo +-------------------------------------------------------------+
	echo The clone target  $CLONETARGET already exits 
	echo Fatal Error!                                 
	echo +-------------------------------------------------------------+
	exit
fi

echo +-------------------------------------------------------------+
echo The clone target is $CLONETARGET 
echo Clone the repo
echo Start at `date`
echo +-------------------------------------------------------------+

git clone $REPOGIT $CLONETARGET

echo +-------------------------------------------------------------+
echo Switch to cloned folder

cd $CLONETARGET 

ROOT=`pwd`
echo Root folder of project is $ROOT
echo Get dependencies with yarn
echo +-------------------------------------------------------------+

yarn install

echo +-------------------------------------------------------------+
echo Build the react web app with yarn build
echo +-------------------------------------------------------------+

yarn electron:build

echo +-------------------------------------------------------------+
echo Add capacitor
echo +-------------------------------------------------------------+

yarn add --dev @capacitor/core @capacitor/cli

echo +-------------------------------------------------------------+
echo Initialize capacitor
echo +-------------------------------------------------------------+
APPNAME="rrouter"
APPID="org.unfoldingword.rrouter"
npx cap init --web-dir "build" $APPNAME $APPID

echo +-------------------------------------------------------------+
echo Define target platform with capacitor
echo +-------------------------------------------------------------+

npx cap add electron
exit
echo +-------------------------------------------------------------+
echo Fix electron package.json, from public/electron-package.json
echo a. change name
echo b. change description
echo c. supply author
echo d. replace capacitor splash png with ours

cd $ROOT
cp ./public/electron-package.json ./electron/package.json
cp ./public/glts_logo_white.png ./electron/splash_assets/splash.png

echo +-------------------------------------------------------------+
echo Fix electron index.html
echo +-------------------------------------------------------------+

cd $ROOT/electron/app 
sed \
	-e "s#/favicon#./favicon#g" \
	-e "s#/manifest#./manifest#g" \
	-e "s#/static#./static#g" \
	< index.html > x && mv x index.html
cd $ROOT 

echo +-------------------------------------------------------------+
echo Copy index.js to app folder
echo +-------------------------------------------------------------+

cd $ROOT/electron/
cp index.js app
cd $ROOT 



echo +-------------------------------------------------------------+
echo Key Concepts
echo 1. At this point, the electron app is in the electron folder.
echo 2. It is completely separated from the React web app.
echo 3. It has its own package.json file
echo 4. You can start it: yarn electron:start
echo 5. All packaging work needs to be done inside this folder!
echo +-------------------------------------------------------------+


echo +-------------------------------------------------------------+
echo Install electron and electron-builder
echo +-------------------------------------------------------------+

cd $ROOT/electron
yarn add --dev electron
yarn add --dev electron-builder 

echo +-------------------------------------------------------------+
echo Run packager 
echo +-------------------------------------------------------------+

$ROOT/electron/node_modules/.bin/electron-builder

echo +-------------------------------------------------------------+
echo Done at `date`
echo +-------------------------------------------------------------+
