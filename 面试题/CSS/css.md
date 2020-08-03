<!--
 * @Date: 2020-08-03 22:26:04
 * @Autor: 肖月萍
 * @Description: CSS经典面试题
 * @LastEditors: 肖月萍
 * @LastEditTime: 2020-08-03 22:46:57
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
  其实我们经常用的就是标准盒模型，也就是box-sizing重的content-box，它指的是我们写的width盒height的内容的宽度，并不是盒子的最终宽高,盒子宽高最终是content的width + padding + border，像我们项目当中可能就会遇到一个问题，假设我想弄一个100*100的大小盒子
  标准盒模型 box-sizing：content-box   width就只是content的宽 


