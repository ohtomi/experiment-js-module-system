# experiment-js-module-system

These examples show JavaScript module system with RequireJS and webpack.

## Examples

Each example consists of three JavaScript modules.
A bootstrap module, an UI module and a business logic module.

- amd-amd-amd
- amd-amd-umd
- amd-umd-umd
- amd-umd-amd
- umd-umd-umd
- umd-umd-amd
- umd-amd-amd
- umd-amd-umd

## Usage

To run examples, you need to build JavaScript modules and to start a HTTP server.

```bash
$ # build amd-amd-amd pattern
$ ./tasks.sh amd-amd-amd
...
$ # build umd-umd-umd pattern
$ ./tasks.sh umd-umd-umd
...
$ # start the HTTP server
$ ./tasks.sh start
start test server [18865]
Serving HTTP on 0.0.0.0 port 8080 ...

$ # you can access examples
$ # open http://localhost:8080/

$ # stop the HTTP server
$ ./tasks.sh stop
stopping test server [18865]
```

## Contribution

1. Fork it!
1. Create your feature branch: git checkout -b my-new-feature
1. Commit your changes: git commit -am 'Add some feature'
1. Push to the branch: git push origin my-new-feature
1. Submit a pull request :D

## Author

[Kenichi Ohtomi](https://github.com/ohtomi)
