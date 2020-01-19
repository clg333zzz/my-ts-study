# flex内容中的省略号实现

在flex布局中常用的左右布局，如果左侧固定宽度，右侧我们一般是使用`flex: 1`。
但是我们经常会发现没有作用，后来发现在`flex: 1`的对象上随便加上一个`width`就可以，

个人猜测是容器在加了width后会有一个固定宽度，而flex:1会把这个容器撑开，
内部会实时计算实际的width值，只有要固定的width值，省略号就会出现。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
    .flex-wrap {
        display: flex;
        width: 300px;
        background: pink;
    }
    .flex-l {
        flex: 0 0 100px;
        border-right: 1px solid #333;
    }
    .content-l {
        width: 100%;
        height: 100px;
    }
    .flex-r {
        width: 1px; /*注意这行代码，如果不加，将不会出现省略号*/
        flex: 1;
    }
    .content-r {
        height: 18px;
        line-height: 18px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    </style>
</head>
<body>
    <div class="flex-wrap">
        <div class="flex-l">
            <div class="content-l"></div>
        </div>
        <div class="flex-r">
            <p class="content-r">这是一段文字，我们相要超过长度就展示省略号，要怎么办？</p>
        </div>
    </div>
</body>
</html>
```