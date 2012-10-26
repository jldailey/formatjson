formatjson
==========

format json to display in cli or html pre tag

###install

npm install formatjson

web version: ./lib/formatjson_web.js


#donate（捐助）

因作者是自由工作者，如果觉得有用，请捐几块钱支持下作者，点这里捐助：https://me.alipay.com/mier

如果有问题，请提交issues，或者联系我：676588498。偶会尽量快速解决，谢啦。

###example

```
var formatjson=require("formatjson")
var jj={
    "aa":{
        "bb":"cc",
        "dd":['1','2','3'],
        "ee":true,
        "kk":[
        {
            aaa:"aaa",
            bbbb:"bbbb"
        }
        ]
    },
    "aa2":"bb2",
    "null":null,
    "number":13123
}
console.log(formatjson(jj));

```

will display like this:

```
{
  aa:{
    bb:"cc",
    dd:[
      "1",
      "2",
      "3"
    ],
    ee:true,
    kk:[
      {
        aaa:"aaa",
        bbbb:"bbbb"
      }
    ]
  },
  aa2:"bb2",
  null:null,
  number:13123
}
```