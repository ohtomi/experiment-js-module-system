#!/bin/bash

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
  "amd-amd-amd")
    cp ./amd-providing-to-amd/src/main.js ./public/js/amd/providing-to-amd/
    cp ./amd-consuming-amd/src/main.js ./public/js/amd/consuming-amd/
    ;;
  "amd-amd-umd")
    cd ./umd-providing-to-amd
    npm run compile
    cd ..
    cp ./umd-providing-to-amd/dist/bundle.js ./public/js/umd/providing-to-amd/
    cp ./amd-consuming-umd/src/main.js ./public/js/amd/consuming-umd/
    ;;
  "amd-umd-umd")
    cd ./umd-providing-to-umd
    npm run compile
    cd ..
    cd ./umd-consuming-umd
    npm install
    npm run compile
    cd ..
    cp ./umd-providing-to-umd/dist/bundle.js ./public/js/umd/providing-to-umd/
    cp ./umd-consuming-umd/dist/bundle.js ./public/js/umd/consuming-umd/
    ;;
  "amd-umd-amd")
    cd ./umd-consuming-amd
    npm run compile
    cd ..
    cp ./amd-providing-to-umd/src/main.js ./public/js/amd/providing-to-umd/
    cp ./umd-consuming-amd/dist/bundle.js ./public/js/umd/consuming-amd/
    ;;
  *)
    ;;
esac


_tasks_sh() {
  COMPREPLY=( $(compgen -W "start stop amd-amd-amd amd-amd-umd amd-umd-umd amd-umd-amd" ${COMP_WORDS[COMP_CWORD]} ) )
}
complete -F _tasks_sh ./tasks.sh
