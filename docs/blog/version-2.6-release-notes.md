---
title: Version 2.6 release notes
author: Loïc Poullain
author_title: Fullstack developer and creator of FoalTS
author_url: https://github.com/LoicPoullain
author_image_url: https://avatars1.githubusercontent.com/u/13604533?v=4
image: blog/twitter-banners/version-2.6-release-notes.png
tags: [release]
---

![Banner](./assets/version-2.6-is-here/banner.png)

Version 2.6 of Foal has been released! Here are the improvements that it brings.

<!--truncate-->

# Support of the `array` value for AJV `coerceTypes` option

```json
{
  "settings": {
    "ajv": {
      "coerceTypes": "array"
    }
  }
}
```

Option documentation: [https://ajv.js.org/coercion.html#coercion-to-and-from-array](https://ajv.js.org/coercion.html#coercion-to-and-from-array).