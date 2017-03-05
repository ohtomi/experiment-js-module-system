#!/bin/bash

amd-bootstrapping-amd-amd() {
  cp ./amd-bootstrapping-amd-amd/src/*.js ./public/js/amd/bootstrapping-amd-amd/
}

amd-bootstrapping-amd-umd() {
  cp ./amd-bootstrapping-amd-umd/src/*.js ./public/js/amd/bootstrapping-amd-umd/
}

amd-bootstrapping-umd-amd() {
  cp ./amd-bootstrapping-umd-amd/src/*.js ./public/js/amd/bootstrapping-umd-amd/
}

amd-bootstrapping-umd-umd() {
  cp ./amd-bootstrapping-umd-umd/src/*.js ./public/js/amd/bootstrapping-umd-umd/
}

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


umd-bootstrapping-amd-amd() {
  cd ./umd-bootstrapping-amd-amd
  npm run compile
  cd ..
  cp ./umd-bootstrapping-amd-amd/dist/*.js ./public/js/umd/bootstrapping-amd-amd/
}

umd-bootstrapping-amd-umd() {
  cd ./umd-bootstrapping-amd-umd
  npm run compile
  cd ..
  cp ./umd-bootstrapping-amd-umd/dist/*.js ./public/js/umd/bootstrapping-amd-umd/
}

umd-bootstrapping-umd-amd() {
  cd ./umd-bootstrapping-umd-amd
  npm run compile
  cd ..
  cp ./umd-bootstrapping-umd-amd/dist/*.js ./public/js/umd/bootstrapping-umd-amd/
}

umd-bootstrapping-umd-umd() {
  cd ./umd-bootstrapping-umd-umd
  npm run compile
  cd ..
  cp ./umd-bootstrapping-umd-umd/dist/*.js ./public/js/umd/bootstrapping-umd-umd/
}

umd-consuming-amd() {
  cd ./umd-consuming-amd
  npm run compile
  cd ..
  cp ./umd-consuming-amd/dist/*.js ./public/js/umd/consuming-amd/
}

umd-consuming-umd() {
  cd ./umd-consuming-umd
  npm run compile
  cd ..
  cp ./umd-consuming-umd/dist/*.js ./public/js/umd/consuming-umd/
}

umd-providing-to-amd() {
  cd ./umd-providing-to-amd
  npm run compile
  cd ..
  cp ./umd-providing-to-amd/dist/*.js ./public/js/umd/providing-to-amd/
}

umd-providing-to-umd() {
  cd ./umd-providing-to-umd
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
    amd-bootstrapping-amd-amd
    ;;

  "aau" | "amd-amd-umd")
    umd-providing-to-amd
    amd-consuming-umd
    amd-bootstrapping-amd-umd
    ;;

  "auu" | "amd-umd-umd")
    umd-providing-to-umd
    umd-consuming-umd
    amd-bootstrapping-umd-umd
    ;;

  "aua" | "amd-umd-amd")
    amd-providing-to-umd
    umd-consuming-amd
    amd-bootstrapping-umd-amd
    ;;

  "uuu" | "umd-umd-umd")
    umd-providing-to-umd
    umd-consuming-umd
    umd-bootstrapping-umd-umd
    ;;

  "uua" | "umd-umd-amd")
    amd-providing-to-umd
    umd-consuming-amd
    umd-bootstrapping-umd-amd
    ;;

  "uaa" | "umd-amd-amd")
    amd-providing-to-amd
    amd-consuming-amd
    umd-bootstrapping-amd-amd
    ;;

  "uau" | "umd-amd-umd")
    umd-providing-to-amd
    amd-consuming-umd
    umd-bootstrapping-amd-umd
    ;;

  *)
    ;;
esac


_tasks_sh() {
  COMPREPLY=( $(compgen -W "start stop amd-amd-amd amd-amd-umd amd-umd-umd amd-umd-amd umd-umd-umd umd-umd-amd umd-amd-amd umd-amd-umd" ${COMP_WORDS[COMP_CWORD]} ) )
}
complete -F _tasks_sh ./tasks.sh
