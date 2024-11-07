# chrt

**Chrt** is a free, open source JavaScript library with the goal of creating a more spontaneous experience to make charts. Coding with chrt should be as simple as snapping together building blocks, where each block is an element of the chart.

### Observable Examples and Documentation:

- [Introducing Chrt - Observable](https://observablehq.com/@chrt/introducing-chrt?collection=@chrt/chrt)

### Resources

- [Modules](#modules)
- [How to install](#how-to-install)
- [Examples](#examples)
- [How to build](#how-to-build)
- [Testing](#testing)

### Modules

chrt is composed of several modules, each focusing on specific functionality:

#### Core and Base Functionality

- [chrt-core](https://github.com/chrt/chrt-core) - Core functionality and chart management
- [chrt-object](https://github.com/chrt/chrt-object) - Base object class for all components

#### Chart Components

- [chrt-line](https://github.com/chrt/chrt-line) - Line charts
- [chrt-bars](https://github.com/chrt/chrt-bars) - Bar and column charts
- [chrt-points](https://github.com/chrt/chrt-points) - Scatter plots and point-based visualizations
- [chrt-dotplot](https://github.com/chrt/chrt-dotplot) - Dot plot visualizations

#### Axes and Grid

- [chrt-axis](https://github.com/chrt/chrt-axis) - Axis components
- [chrt-grid](https://github.com/chrt/chrt-grid) - Grid lines

#### Enhancement Components

- [chrt-label](https://github.com/chrt/chrt-label) - Text labels and annotations
- [chrt-markers](https://github.com/chrt/chrt-markers) - Point markers and indicators
- [chrt-range](https://github.com/chrt/chrt-range) - Range and threshold indicators
- [chrt-annotation](https://github.com/chrt/chrt-annotation) - Chart annotations

#### Utilities

- [chrt-set](https://github.com/chrt/chrt-set) - Grouping and stacking functionality
- [chrt-interpolations](https://github.com/chrt/chrt-interpolations) - Line interpolation methods

Each module is independently maintained and documented. Visit the individual repositories for detailed documentation and examples.

## How to install

### Use in vanilla HTML

In vanilla HTML, you can load `chrt` from a CDN such as jsDelivr or you can download it locally. The following examples show how use `chrt` in your HTML page:

#### ESM+CDN

```html
<!doctype html>
<div id="container"></div>
<script type="module">
  import * as chrt from "https://cdn.jsdelivr.net/npm/chrt/+esm";

  chrt
    .Chrt()
    .add(chrt.line().data([3, 2, 5, 1, 2, 4, 5]))
    .node(document.getElementById("container"));
</script>
```

#### UMD+CDN

```html
<!doctype html>
<div id="container"></div>
<script src="https://cdn.jsdelivr.net/npm/chrt@latest"></script>
<script type="module">
  chrt
    .Chrt()
    .add(chrt.line().data([3, 2, 5, 1, 2, 4, 5]))
    .node(document.getElementById("container"));
</script>
```

#### UMD+Local

```html
<!doctype html>
<div id="container"></div>
<script src="chrt.js"></script>
<script type="module">
  chrt
    .Chrt()
    .add(chrt.line().data([3, 2, 5, 1, 2, 4, 5]))
    .node(document.getElementById("container"));
</script>
```

### Install from npm

If you’re developing a web application using Node, you can install `chrt` via yarn, npm, or your preferred package manager.

```bash
npm install chrt
```

After the installation, you can use it as:

```javascript
import * as chrt from "chrt";
```

## Examples

```js
import * as chrt from "chrt";

// Create a basic line chart
const chart = chrt
  .Chrt()
  .node(document.querySelector("#chart"))
  .size(600, 400)
  .data([1, 2, 3, 4, 5])
  .add(chrt.xAxis())
  .add(chrt.yAxis())
  .add(chrt.line());
```

For detailed documentation and examples, visit:

- [Introducing Chrt](https://observablehq.com/@chrt/introducing-chrt?collection=@chrt/chrt)
- [Chrt Examples Collection](https://observablehq.com/collection/@chrt/chrt)

## How to build

### Install the dependencies

```
npm install
```

### Build the package

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

#### Create a global node module

```
npm link
```

This creates `chrt` module inside your global `node_modules` so that you can import it with `import {chrtLine} from 'chrt';`

#### Use the module in a different app

```
npm link chrt
```

This will create a sym link to the module created in your global.

## Use it in your code

After having installed or sym-linked the node you can use it as usual

```
import * as chrt from 'chrt';
```
