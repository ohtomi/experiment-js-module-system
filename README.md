# experiment-js-module-system

These examples show JavaScript module system with RequireJS and webpack.

## Examples

### Loading by RequireJS

- amd-amd-amd

  Browser runs `amd` module, which calls `amd` module consuming `amd` module.

- amd-amd-umd

  Browser runs `amd` module, which calls `amd` module consuming `umd` module.

- amd-umd-umd

  Browser runs `amd` module, which calls `umd` module consuming `umd` module.

- amd-umd-amd

  Browser runs `amd` module, which calls `umd` module consuming `amd` module.

- unbundled-umd-umd-umd

  Browser runs `umd` module, which calls `umd` module consuming `umd` module.

- unbundled-umd-umd-amd

  Browser runs `umd` module, which calls `umd` module consuming `amd` module.

- unbundled-umd-amd-amd

  Browser runs `umd` module, which calls `amd` module consuming `amd` module.

- unbundled-umd-amd-umd

  Browser runs `umd` module, which calls `amd` module consuming `umd` module.

### Bundled by webpack

- bundled-umd-umd-umd

  Browser runs `umd` module, which was bundled with `umd` module consuming `umd` module.

- bundled-umd-umd-amd

  Browser runs `umd` module, which was bundled with `umd` module consuming `amd` module.

- bundled-umd-amd-amd

  Browser runs `umd` module, which was bundled with `amd` module consuming `amd` module.

- bundled-umd-amd-umd

  Browser runs `umd` module, which was bundled with `amd` module consuming `umd` module.

## Usage

```bash
$ ./tasks.sh start
start test server [18865]
Serving HTTP on 0.0.0.0 port 8080 ...
$ ./tasks.sh stop
stopping test server [18865]

$ ./tasks.sh amd-amd-amd
$ ./tasks.sh unbundled-umd-umd-umd
$ ./tasks.sh bundled-umd-umd-umd
```

## Contribution

1. Fork it!
1. Create your feature branch: git checkout -b my-new-feature
1. Commit your changes: git commit -am 'Add some feature'
1. Push to the branch: git push origin my-new-feature
1. Submit a pull request :D

## Author

[Kenichi Ohtomi](https://github.com/ohtomi)
