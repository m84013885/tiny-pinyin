### 完全基于 https://github.com/creeperyang/pinyin 来进行修改
我是reactNative的项目，打算找一个很小的pinyin库，但是不知道为什么这个用不了，打开项目发现代码量很小，就直接截取了核心代码，发现直接使用没有问题，就拿来用了。

```
npm install tiny-pinyin-mw

import { getPinyin, getPinyinForString } from 'tiny-pinyin-mw'

getPinyin('单')
getPinyinForString('这个是多字')

```

注意 ：值得一说的是这个库是基于 **new Intl.Collator** 所以第二个参数可以传入 **new Intl.Collator('zh-CN')** ，不过默认就是自动传入这个。如果你的环境不支持这个，那就用不了。
