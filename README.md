# engineering-test-include

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


//webpack打包部分，在postcss插件中 添加namespace的控制
config.postcss.push(postcss.plugin('namespace', () => css =>
  css.walkRules(rule => {
    if (rule.parent && rule.parent.type === 'atrule' && rule.parent.name !== 'media') return;
    rule.selectors = rule.selectors.map(s => `.namespace-kaoqin ${s === 'body' ? '' : s}`);
  })
));