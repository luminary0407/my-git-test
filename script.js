document.addEventListener('DOMContentLoaded', () => {
  console.log('页面已加载');
});

// 获取按钮元素
const btn = document.getElementById('clickMe');

// 添加点击事件
btn.addEventListener('click', function() {
    alert('恭喜你！你已经成功运行了 JavaScript 代码！');
    // 改变背景颜色
    document.body.style.backgroundColor = '#f0f8ff';
});
