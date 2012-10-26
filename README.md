formatjson
==========

format json to display in cli or html pre tag

###install

npm install formatjson

web version: ./lib/formatjson_web.js

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