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
  "to-amd")
    cp ./amd-provider/src/main.js ./public/js/amd-provider.js
    ;;
  "amd-to-amd")
    cp ./amd-provider/src/main.js ./public/js/amd-provider.js
    cp ./amd-consumer/src/main.js ./public/js/amd-consumer.js
    ;;
  "to-umd")
    cd ./umd-provider
    npm run compile
    cd ..
    cp ./umd-provider/dist/bundle.js ./public/js/umd-provider.js
    ;;
  *)
    ;;
esac


_tasks_sh() {
  COMPREPLY=( $(compgen -W "start stop to-amd amd-to-amd to-umd" ${COMP_WORDS[COMP_CWORD]} ) )
}
complete -F _tasks_sh ./tasks.sh
