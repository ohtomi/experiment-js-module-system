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
  cp ./umd-consuming-amd/dist/*.js ./public/js/umd/consuming-amd/
}

umd-consuming-umd() {
  cd ./umd-consuming-umd
  npm install
  npm run compile
  cd ..
  cp ./umd-consuming-umd/dist/*.js ./public/js/umd/consuming-umd/
}

umd-providing-to-amd() {
  cd ./umd-providing-to-amd
  npm install
  npm run compile
  cd ..
  cp ./umd-providing-to-amd/dist/*.js ./public/js/umd/providing-to-amd/
}

umd-providing-to-umd() {
  cd ./umd-providing-to-umd
  npm install
  npm run compile
  cd ..
  cp ./umd-providing-to-umd/dist/*.js ./public/js/umd/providing-to-umd/
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

  "buuu" | "bundled-umd-umd-umd")
    # To install 'umd-providing-to-umd' to 'umd-umd-umd' project,
    # add the dependency to 'umd-consuming-umd' project's package.json.
    cd ./umd-consuming-umd
    npm install --save ../umd-providing-to-umd
    cd ..

    cd ./bootstrap-in-umd/bundled-umd-umd-umd
    npm install
    npm run compile
    cd ../..
    cp ./bootstrap-in-umd/bundled-umd-umd-umd/dist/*.js ./public/js/

    # Strip the dependency from 'umd-consuming-umd' project's package.json.
    cd ./umd-consuming-umd
    npm uninstall --save umd-providing-to-umd
    npm prune
    cd ..
    ;;

  "buua" | "bundled-umd-umd-amd")
    cd ./bootstrap-in-umd/bundled-umd-umd-amd
    npm install
    npm run compile
    cd ../..
    cp ./bootstrap-in-umd/bundled-umd-umd-amd/dist/*.js ./public/js/
    ;;

  "buaa" | "bundled-umd-amd-amd")
    cd ./bootstrap-in-umd/bundled-umd-amd-amd
    npm install
    npm run compile
    cd ../..
    cp ./bootstrap-in-umd/bundled-umd-amd-amd/dist/*.js ./public/js/
    ;;

  "buau" | "bundled-umd-amd-umd")
    cd ./bootstrap-in-umd/bundled-umd-amd-umd
    npm install
    npm run compile
    cd ../..
    cp ./bootstrap-in-umd/bundled-umd-amd-umd/dist/*.js ./public/js/
    ;;

  "uuuu" | "unbundled-umd-umd-umd")
    umd-providing-to-umd
    umd-consuming-umd
    cd ./bootstrap-in-umd/unbundled-umd-umd-umd
    npm install
    npm run compile
    cd ../..
    cp ./bootstrap-in-umd/unbundled-umd-umd-umd/dist/*.js ./public/js/
    ;;

  "uuua" | "unbundled-umd-umd-amd")
    amd-providing-to-umd
    umd-consuming-amd
    cd ./bootstrap-in-umd/unbundled-umd-umd-amd
    npm install
    npm run compile
    cd ../..
    cp ./bootstrap-in-umd/unbundled-umd-umd-amd/dist/*.js ./public/js/
    ;;

  "uuaa" | "unbundled-umd-amd-amd")
    amd-providing-to-amd
    amd-consuming-amd
    cd ./bootstrap-in-umd/unbundled-umd-amd-amd
    npm install
    npm run compile
    cd ../..
    cp ./bootstrap-in-umd/unbundled-umd-amd-amd/dist/*.js ./public/js/
    ;;

  "uuau" | "unbundled-umd-amd-umd")
    umd-providing-to-amd
    amd-consuming-umd
    cd ./bootstrap-in-umd/unbundled-umd-amd-umd
    npm install
    npm run compile
    cd ../..
    cp ./bootstrap-in-umd/unbundled-umd-amd-umd/dist/*.js ./public/js/
    ;;

  *)
    ;;
esac


_tasks_sh() {
  COMPREPLY=( $(compgen -W "start stop amd-amd-amd amd-amd-umd amd-umd-umd amd-umd-amd bundled-umd-umd-umd bundled-umd-umd-amd bundled-umd-amd-amd bundled-umd-amd-umd unbundled-umd-umd-umd unbundled-umd-umd-amd unbundled-umd-amd-amd unbundled-umd-amd-umd" ${COMP_WORDS[COMP_CWORD]} ) )
}
complete -F _tasks_sh ./tasks.sh
