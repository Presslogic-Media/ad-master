## 项目技术栈

vue2 + typescript

## 环境依赖

node >= v14.7.0

## 启动与构建
```sh
# 安装依赖
yarn install

# 本项目调试广告组件
yarn play

# 构建
yarn build

# 业务项目调试
yarn dev

# 发版
yarn release

```

## 广告的组件
1. `adSlot` 支持比较通用图片、视频的广告位 doing
2. `adSlotText` 支持文字广告 doing
3. `adSlotScript` 支持script类的广告 doing


## 使用方法

1. ad unit 映射表配置
```typescript

import { AdUnitConfig } from "ad-master/types"

const adUnitMap: AdUnitConfig = {
  'M1': {
    adUnit: 'gshk-blog-mobile-post-top-300x250',
    size: [[300, 250], [250, 250]],
    lazy: false,
  },
  'biu-test-adx': {
    adUnit: 'biu-test-ad-unit-1',
    size: [[300, 250], [250, 250]],
  }
}

module.exports = adUnitMap

```
   
2. 全局使用 配置全局的配置、注册hooks
```typescript

// plugins (client) 中使用
import { AdMasterGlobal } from "ad-master";
import { IConfig } from "ad-master/types";

/**
 * 初始化全局配置
 */
const globalConfig: IConfig = {
  networkCode: 123517519,
  pageUrl: 'https://pretty.presslogic.com',
  keyValue: {
    env: 'uat',
    subdomain: 'girls',
  },
}

/** 配置全局属性 */
const adMasterGlobal = AdMasterGlobal.getInstance(globalConfig)

/** 配置 ad unit 映射表 */
adMasterGlobal.setAdUnitMap({...})

AdMasterGlobal.loadGpt().then(() => {
  /** 开启全局的 hooks */
  AdMasterGlobal.enabledSlotRenderEnded()
  AdMasterGlobal.enabledImpressionViewable()
})

```
2. 组件使用
```javascript

import { AdSlot } from "ad-master";

export default {
  componnets: {
    AdSlot
  }
}

```
```html

<template>
  <AdSlot ad-unit-key='M1'>
</template>

```
