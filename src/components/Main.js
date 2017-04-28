require('normalize.css/normalize.css');
require('styles/main.css');

import React from 'react';

//改行不用
//let yeomanImage = require('../images/img15.png');
//获取图片数据
let imageDatas = require('../data/imageDatas.json');

// function genImageUrl(img) {
//     for (var i = 0, j = img.length; i < j; i++) {
//         var singleImg = img[i];
//         singleImg.imageUrl = require('../images/' + singleImg.filename);
//         img[i] = singleImg;
//     }
//     return img;
// }
// imageDatas = genImageUrl(imageDatas);

//将图片名信息转成url路径信息
imageDatas = (function genImageUrl(img) {
    for (var i = 0, j = img.length; i < j; i++) {
        var singleImg = img[i];
        singleImg.imageUrl = require('../images/' + singleImg.filename);
        img[i] = singleImg;
    }
    return img;
})(imageDatas);
class AppComponent extends React.Component {
    render() {
        // return ( < div className = "index" >
        //     < img src = { yeomanImage }
        //     alt = "Yeoman Generator" / >
        //     < span > hello < /span> < div className = "notice" > Please edit < code > src /
        //     components / Main.js < /code> to get started!</div >
        //     < /div>
        // );
        return ( < section className = "stage" >
            < section className = "img-sec" >
            < /section> < nav className = "controller-nav" >
            < /nav> < /section>
        );
    }
}

AppComponent.defaultProps = {};

export default AppComponent;
