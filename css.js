const string = `
/*我们先设置初始值*/
.color * { 
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  .color *::before,
  .color *::after {
    box-sizing: border-box;
  }
  /*在设置背景图*/
  .color {
    height: 65vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #93b8ca;
  }
  /*哆啦A梦的大概面部*/
  .skin {
    border: 2px solid #000;
    border-radius: 47% 47% 45% 45%;
    background-color: #1e90ff;
    height: 400px;
    width: 420px;
    position: relative;
    display: flex;
    justify-content: center;
  }
  /*哆啦A梦的脸*/
  .face {
    position: absolute;
    bottom: 0px;
    width: 360px;
    height: 300px;
    border: 2px solid#000;
    border-radius: 50% 50% 45% 45%;
    background-color: #fff;
    display: flex;
    justify-content: center;
  }
  /*哆啦A梦的眼睛*/
  .eye_box {
    position: absolute;
    top: 0px;
    display: flex;
    justify-content: center;
    transform: translateY(-40%);
  }
  /*哆啦A梦的左眼*/
  .eye_box div:nth-child(1) {
    width: 90px;
    height: 110px;
    border: 2px solid #000;
    background-color: #fff;
    border-radius: 46%;
    position: relative;
  }
  .eye_box div:nth-child(1)::after {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #000;
    border-radius: 50%;
    right: 10%;
    bottom: 28%;
  }
  /*哆啦A梦的右眼*/
  .eye_box div:nth-child(2) {
    width: 90px;
    height: 110px;
    border: 2px solid #000;
    background-color: #fff;
    border-radius: 46%;
    position: relative;
  }
  .eye_box div:nth-child(2)::after {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #000;
    border-radius: 50%;
    left: 10%;
    bottom: 28%;
  }
  /*哆啦A梦的鼻子*/
  .nose {
    position: absolute;
    top: 16%;
    width: 50px;
    height: 50px;
    background-color: #ff0000;
    border: 2px solid #000;
    border-radius: 50%;
    position: relative;
  }
  .nose::after {
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    background-color: #fff;
    border-radius: 50%;
    right: 11%;
    bottom: 45%;
  }
  /*哆啦A梦的嘴巴*/
  .mouth {
    position: absolute;
    bottom: 22%;
    width: 240px;
    height: 200px;
    border-bottom: 2px solid #000;
    border-radius: 0 0 45% 45%;
  }
  .mouth_2 {
    position: absolute;
    height: 134px;
    width: 2px;
    border-left: 2px solid #000;
    left: 50%;
    bottom: -1px;
  }
  /*哆啦A梦的左胡须*/
  .beard_left span:nth-child(1) {
    position: absolute;
    left: 8.5%;
    top: 32%;
    transform: rotate(20deg);
    height: 60px;
    width: 100px;
    border-top: 2px solid #000;
  }
  .beard_left span:nth-child(2) {
    position: absolute;
    left: 10%;
    top: 42%;
    height: 60px;
    width: 100px;
    border-top: 2px solid #000;
  }
  .beard_left span:nth-child(3) {
    position: absolute;
    transform: rotate(-20deg);
    left: 14%;
    top: 52%;
    height: 60px;
    width: 100px;
    border-top: 2px solid #000;
  }
  /*哆啦A梦的右胡须*/
  .beard_right span:nth-child(1) {
    position: absolute;
    right: 8.5%;
    top: 32%;
    transform: rotate(-20deg);
    height: 60px;
    width: 100px;
    border-top: 2px solid #000;
  }
  .beard_right span:nth-child(2) {
    position: absolute;
    right: 10%;
    top: 42%;
    height: 60px;
    width: 100px;
    border-top: 2px solid #000;
  }
  .beard_right span:nth-child(3) {
    position: absolute;
    transform: rotate(20deg);
    right: 14%;
    top: 52%;
    height: 60px;
    width: 100px;
    border-top: 2px solid #000;
  }
  /*哆啦A梦的项圈*/
  .rope {
    position: absolute;
    border-radius: 30px;
    border: 2px solid #000;
    background-color: #ff0000;
    height: 50px;
    width: 320px;
    bottom: 0px;
    /* left: 40px; */
    transform: translateY(20%);
    display: flex;
    justify-content: center;
  }
  /*会动的铃铛动画*/
  @keyframes swing {
    0% {
      transform: rotate(0deg);
      transform-origin: top;
    }
    33% {
      transform: rotate(25deg);
      transform-origin: top;
    }
    66% {
      transform: rotate(-25deg);
      transform-origin: top;
    }
    100% {
      transform: rotate(0deg);
      transform-origin: top;
    }
  }
  /*哆啦A梦的铃铛*/
  .collar {
    position: absolute;
    width: 60px;
    height: 60px;
    background-color: #ffff00;
    border-radius: 50%;
    border: 2px solid #000;
    bottom: -55%;
    display: flex;
    justify-content: center;
    animation: swing 1s infinite linear;
  }
  .collar span:nth-child(1) {
    position: absolute;
    width: 56px;
    height: 18px;
    border-top: 2px solid #000;
    top: 36%;
  }
  .collar span:nth-child(2) {
    position: absolute;
    width: 58px;
    height: 18px;
    border-top: 2px solid #000;
    top: 44%;
  }
  .collar span:nth-child(3) {
    position: absolute;
    width: 15px;
    height: 10px;
    background-color: #000;
    border-radius: 50%;
    top: 56%;
  }
  .collar span:nth-child(4) {
    position: absolute;
    width: 1px;
    height: 20px;
    border-left: 2px solid #000;
    top: 65%;
  }
  /*好啦，一个可爱的哆啦A梦送给你✧( ु•⌄• )◞*/
  `;
export default string;
