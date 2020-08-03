<!--
 * @Date: 2020-08-03 22:26:04
 * @Autor: 肖月萍
 * @Description: CSS经典面试题
 * @LastEditors: 肖月萍
 * @LastEditTime: 2020-08-03 23:07:02
 -->
 这种需求在我之前的项目是非常常见的，刚开始我一直都是用定位去解决的。随着css3的兴起，flex布局非常强大。尤其是在移动端开发的时候，用它布局特别方便。有段时间我去看博客看掘金的时候发现display：table-cell虽然不常用，但是也能实现。我感觉挺好玩的。所以就记下来了。

 1.掌握盒子水平垂直居中的五大方案 transform  margin：auto
  a.定位：三种  一：left：50%；top：50% 
  b.display:flex
  c.display:table-cell =>{
      .father{
          display:table-cell;
          vertical-align:middle;
          text-align:center;
      }
  }
  2.关于CSS3中和模型的几道盒模型。
  问：说一说CSS的盒模型吧？
  标准盒模型、ie（怪异）盒模型、flex弹性盒模型
  答：有标准盒模型盒ie盒模型也称怪异盒模型,包括我们的flex弹性盒模型。
  其实我们经常用的就是标准盒模型，也就是box-sizing重的content-box，它指的是我们写的width盒height的内容的宽度，并不是盒子的最终宽高,盒子宽高最终是content的width + padding + border，像我们项目当中可能就会遇到一个问题，假设我想弄一个100*100的大小盒子，后来我发现我要加一个border，我不改外层的width盒height，它一定会变大了，它就是折下来了，这样的话不好。这样的话我每改一下border都要手动去改一下width盒height，我这种方式比较麻烦。后来CSS3给我们提供了一种方式是box-sizing：border-box；这也是我们所谓的ie盒模型。让我们来控制使用怪异盒模型了。这种怪异盒模型有个好处。它里面的width盒height是盒子的大小。并不是内容的大小。也就是我写100*100他就最终是100*100，不管我怎么改border或者padding，它会自己通过缩放内容来实现这个盒子还是100*100，这样我写样式的时候不用来回改。所以我现在项目中大多数都用我们的box-sizing：border-box怪异盒模型；包括我看了个大ui组件element、bootrasp源码里面公共样式里面，大部分盒子默认采用的box-sizing：border-box；所以我认为这是我们开发的一种规范盒一种方式。
  标准盒模型 box-sizing：content-box   width就只是content的宽 


