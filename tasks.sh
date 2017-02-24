#!/bin/bash

amd-consuming-amd() {
  cp ./amd-consuming-amd/src/*.js ./public/js/amd/consuming-amd/
}

amd-consuming-umd() {
  cp ./amd-consuming-umd/src/*.js ./public/js/amd/consuming-umd/
}

amd-providing-to-amd() {
  cp ./amd-providing-to-amd/src/*.js ./public/js/amd/providing-to-amd/
}

amd-providing-to-umd() {
  cp ./amd-providing-to-umd/src/*.js ./public/js/amd/providing-to-umd/
}

umd-consuming-amd() {
  cd ./umd-consuming-amd
  npm install
  npm run compile
  cd ..
  cp ./umd-consuming-amd/dist/bundle.js ./public/js/umd/consuming-amd/
}

umd-consuming-umd() {
  cd ./umd-consuming-umd
  npm install
  npm run compile
  cd ..
  cp ./umd-consuming-umd/dist/bundle.js ./public/js/umd/consuming-umd/
}

umd-providing-to-amd() {
  cd ./umd-providing-to-amd
  npm install
  npm run compile
  cd ..
  cp ./umd-providing-to-amd/dist/bundle.js ./public/js/umd/providing-to-amd/
}

umd-providing-to-umd() {
  cd ./umd-providing-to-umd
  npm install
  npm run compile
  cd ..
  cp ./umd-providing-to-umd/dist/bundle.js ./public/js/umd/providing-to-umd/
}


case "$1" in
  "start")
    cd ./public
    python -m SimpleHTTPServer 8080 &
    echo "$!" >./test-server.pid
    echo "start test server [$!]"
    ;;

  "stop")
    cd ./public
    if [ -f ./test-server.pid ]; then
      pid=$(cat ./test-server.pid)
      if [ "$pid" != "" ]; then
        echo "stopping test server [$pid]"
        kill -9 $pid
      fi
      rm ./test-server.pid
    fi
    ;;

  "aaa" | "amd-amd-amd")
    amd-providing-to-amd
    amd-consuming-amd
    ;;

  "aau" | "amd-amd-umd")
    umd-providing-to-amd
    amd-consuming-umd
    ;;

  "auu" | "amd-umd-umd")
    umd-providing-to-umd
    umd-consuming-umd
    ;;

  "aua" | "amd-umd-amd")
    amd-providing-to-umd
    umd-consuming-amd
    ;;

  "buuu" | "umd-umd-umd")
    # To install 'umd-providing-to-umd' to 'umd-umd-umd' project,
    # add the dependency to 'umd-consuming-umd' project's package.json.
    cd ./umd-consuming-umd
    npm install --save ../umd-providing-to-umd
    cd ..

    cd ./umd-umd-umd
    npm install
    npm run compile
    cd ..
    cp ./umd-umd-umd/dist/bundle.js ./public/js/umd-umd-umd.js

    # Strip the dependency from 'umd-consuming-umd' project's package.json.
    cd ./umd-consuming-umd
    npm uninstall --save umd-providing-to-umd
    npm prune
    cd ..
    ;;

  "buua" | "umd-umd-amd")
    cd ./umd-umd-amd
    npm install
    npm run compile
    cd ..
    cp ./umd-umd-amd/dist/bundle.js ./public/js/umd-umd-amd.js
    ;;

  "buaa" | "umd-amd-amd")
    cd ./umd-amd-amd
    npm install
    npm run compile
    cd ..
    cp ./umd-amd-amd/dist/bundle.js ./public/js/umd-amd-amd.js
    ;;

  "buau" | "umd-amd-umd")
    cd ./umd-amd-umd
    npm install
    npm run compile
    cd ..
    cp ./umd-amd-umd/dist/bundle.js ./public/js/umd-amd-umd.js
    ;;
  *)
    ;;
esac


_tasks_sh() {
  COMPREPLY=( $(compgen -W "start stop amd-amd-amd amd-amd-umd amd-umd-umd amd-umd-amd umd-umd-umd umd-umd-amd umd-amd-amd umd-amd-umd" ${COMP_WORDS[COMP_CWORD]} ) )
}
complete -F _tasks_sh ./tasks.sh
