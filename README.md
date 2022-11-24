## Build widgets
Install rollup
```shell
npm i --global rollup
```
Then build the widgets
```shell
rollup -c && mv bundle.js "main.$(md5sum bundle.js | awk '{print $1}' FS="  "| cut -c-16).js"
```