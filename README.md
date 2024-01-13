# chrt
**Chrt** is a free, open source JavaScript library with the goal of creating a more spontaneous experience to make charts. Coding with chrt should be as simple as snapping together building blocks, where each block is an element of the chart.

`chrt` is still a **WORK IN PROGRESS**. For better support and documentation, please come back in few months after we will announce the first beta version. For more info mail to sayhi@chrt.io

## How to install

### Use in vanilla HTML
In vanilla HTML, you can load `chrt` from a CDN such as jsDelivr or you can download it locally. The following examples show how use `chrt` in your HTML page:

#### ESM+CDN
```html
<!DOCTYPE html>
<div id="container"></div>
<script type="module">
    import * as chrt from 'https://cdn.jsdelivr.net/npm/chrt/+esm';

    chrt.Chrt()
        .add(chrt.line().data([3, 2, 5, 1, 2, 4, 5]))
        .node(document.getElementById('container'));
</script>
```

#### UMD+CDN
```html
<!DOCTYPE html>
<div id="container"></div>
<script src="https://cdn.jsdelivr.net/npm/chrt@latest"></script>
<script type="module">

chrt.Chrt()
  .add(chrt.line().data([3,2,5,1,2,4,5]))
  .node(document.getElementById("container"))

</script>
```

#### UMD+Local
```html
<!DOCTYPE html>
<div id="container"></div>
<script src="chrt.js"></script>
<script type="module">

chrt.Chrt()
  .add(chrt.line().data([3,2,5,1,2,4,5]))
  .node(document.getElementById("container"))

</script>
```

### Install from npm
If you’re developing a web application using Node, you can install `chrt` via yarn, npm, or your preferred package manager.
```bash
npm install chrt
```

After the installation, you can use it as:
```javascript
import * as chrt from 'chrt';
```

## How to build

###  Install the dependencies
```
npm install
```

###  Build the package
```
npm build
```
### Developing
If you want to develop and see the changes reloaded live into another app you can use the watch script
```
npm run watch
```

## Use it as a module

### Method 1 - tgz package

#### Use the tgz provided in the repository
You can use the `chrt-VERSION.tgz` package. The following commands will expand the chrt module in the `node_modules` folder of your project. Ready to be used with the usual `import` command:
```
cp chrt-VERSION.tgz SOMEWHERE
cd myproject
npm install SOMEWHERE/chrt-VERSION.tgz
```

#### Create a tgz npm package
You can create a package for testing with
```
npm pack
```
This command will create a file called `chrt-VERSION.tgz` in the root folder of chrt.

### Method 2 - symlinked package

####  Create a global node module
```
npm link
```
This creates `chrt` module inside your global `node_modules` so that you can import it with `import {chrtLine} from 'chrt';`

####  Use the module in a different app
```
npm link chrt
```
This will create a sym link to the module created in your global.

## Use it in your code
After having installed or sym-linked the node you can use it as usual
```
import * as chrt from 'chrt';
```


## Testing

### Unit test with Jest
Each submodule of `chrt` can be tested via Jest:
```
npm run test
```
