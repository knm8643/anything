# anything

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### 오래간만에 다시 들어와도 까먹지말것

```
npm install gh-pages --save-dev
package.json 설정
"homepage": "깃io주소",
"predeploy": "npm run build",
"deploy": "gh-pages -d build",
npm run deploy,
npm run build,
gh-pages -d build,
Published
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
