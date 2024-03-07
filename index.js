// 创建一个包含木块的div元素
const block = document.createElement('div');
block.style.width = '100px';
block.style.height = '100px';
block.style.backgroundColor = 'blue';
block.style.position = 'absolute';
block.style.top = '50%';
block.style.left = '50%';
block.style.transformOrigin = 'center';
document.body.appendChild(block);

// 定义动画函数
function animateBlock() {
  // 每次调用时旋转木块
  block.style.transform = `rotate(${angle}deg)`;

  // 增加旋转角度
  angle += 1;

  // 限制角度在0到360度之间
  if (angle >= 360) {
    angle -= 360;
  }

  // 使用 requestAnimationFrame() 来进行动画循环
  requestAnimationFrame(animateBlock);
}

// 初始角度
let angle = 0;

// 开始动画
animateBlock();
