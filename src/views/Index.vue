<template>
    <div class="shell">
        <div>
        </div>
        <div class="image img1" style="margin-bottom: 32rem;">
            <div style="transform: translateY(-10vh)" class="BCLogo">
                <img style="width: 250px;" src="../assets/index/BClogo.png">
                <div style="font-size: 60px;      
                color: #fefefe;
                text-shadow: 0 0 0.5em #00ffff, 0 0 0.2em #5c5c5c;
                " class="BCName">BlockChain Studio 208</div>
            </div>
            <div class="content">
                <p>协会简介</p>
                <hr>
                西安电子科技大学区块链协会社团是在学校党委领导，团委指导下，由网络与信息安全学院具体指导，西安电子科技大学区块链技术应用与评测研究中心提供专业指导，教育部区块链技术应用与评测工程研究中心、陕西省区块链与安全计算实验室、微众银行、蚂蚁链等单位提供合作支持的学术科技类社团。
                <hr>
                社团期望建立一个西电开源社区，主要的活动方向为区块链、科技金融等领域，聚焦涉及金融、计算机、密码学与信息安全等各个方面。
                <hr>
                希望协会的区块链爱好者们，共同研发创新创业项目，在人才培养、平台测试、应用研发和底层技术研究等方面进行深入探索，争取在视野、思维、技术上将区块链及其应用达到行业前沿水准。
            </div>
        </div>
        <div style="transform: translateY(-65vh);" class="someButton">
            <el-button type="primary" size="large" style="position: absolute;
                    width: 300px;
                    height: 47px;
                    margin-right: 400px;
                    " round @click="Application" class="btn">
                加入我们吧
            </el-button>
            <el-dropdown>
                <el-button type="primary" size="large" style="position: absolute;
                        width: 300px;
                        height: 47px;
                        margin-left: 300px;" class="btn
                    ">
                    探索新世界<el-icon></el-icon>
                </el-button>
                <template #dropdown >
                    <el-dropdown-menu>
                        <el-dropdown-item style="
                        background-color:#3498db;
                        color:white;
                        width: 250px;
                        font-size: medium;
                        " round @click="Home">进入主页</el-dropdown-item>
                        <el-dropdown-item style="
                        background-color:#3498db;
                        color:white;
                        width: 250px;
                        font-size: medium;
                        " round @click="Login">管理员登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>


        <div class="image img2"></div>
        <div class="heading">
            <h1>When you're down</h1>
        </div>
        <div class="text">
            <h1>Try to wake up the beast in your heart</h1>
        </div>

        <div class="image img3"></div>
        <div class="heading">
            <h1>When people leave you</h1>
        </div>
        <div class="text">
            <h1>It's time to start your season</h1>
        </div>

        <div class="image img4"></div>
        <div class="heading">
            <h1>Come on, stranger</h1>
        </div>
    </div>

    <div style="position:fixed; left:0px;bottom:0px; font-size: 14px">
        互联网ICP备案：<el-link href="https://beian.miit.gov.cn" target="_blank">陕ICP备2021013237号</el-link>
    </div>
</template>

<script>
// var button = document.getElementById('btn');
// button.addEventListener('click', function () {
//     var duration = 0.3,
//         delay = 0.08;
//     TweenMax.to($button, duration, { scaleY: 1.6, ease: Expo.easeOut });
//     TweenMax.to($button, duration, { scaleX: 1.2, scaleY: 1, ease: Back.easeOut, easeParams: [3], delay: delay });
//     TweenMax.to($button, duration * 1.25, { scaleX: 1, scaleY: 1, ease: Back.easeOut, easeParams: [6], delay: delay * 3 });
// });
export default {
    name: 'index',
    methods: {
        Application() {
            this.$router.push('/application')
        },
        Login() {
            this.$router.push('/adminlogin')
        },
        Home() {
            alert("功能正在开发")
        }
    }

}
</script>


<style scoped>
.shell {
    height: 100vh;
    overflow-x: hidden;
    /* 设置当内容溢出块级元素的左右两侧时显示的内容, 或不显示, hidden为不显示溢出的*/
    perspective: 3px;
    /* 观察者与z=0屏幕的距离, 具有三维位置变换的元素产生透视效果 */
    overflow: auto;
    overflow-x: hidden;
}

.shell::-webkit-scrollbar {
    width: 0 !important;
}

.shell div {
    position: relative;
    /* 元素在文档中的定位方式, relative元素定位, 不改变页面布局下调整位置*/
    display: flex;
    /* 元素是否被视为块或内联元素, 用于布局, flex弹性盒模型 */
    justify-content: center;
    /* 浏览器如何沿着弹性容器的株洲分配元素之间和周围的空间 */
    align-items: center;
    /* 当页居中? */
    font-style: 30px;
    font-family: 'Times New Roman', Times, serif;
    letter-spacing: 2px;
}


.image {
    transform: translateZ(-1px) scale(1.6);
    /* 视觉效果, 沿着z轴重定位元素, 观察者视角拉近或拉远图片*/
    /* scale放缩图片 */
    background-size: cover;
    /* 背景图片尺寸大小 */
    height: 100vh;
    z-index: -1;
}

.image.img1 {
    background-image: url('../assets/index/apple.png');
    height: 100%;
    width: 100%;
}

.image.img2 {
    background-image: url('../assets/index/stat.jpg');
    height: 100%;
    width: 100%;
}

.image.img3 {
    background-image: url('../assets/index/street.jpg');
    height: 100%;
    width: 100%;
}

.image.img4 {
    background-image: url('../assets/index/fire2.jpg');
    height: 100%;
    width: 100%;
}



.text {
    height: 50vh;
    background-color: white;
}

.heading {
    z-index: -1;
    transform: translateY(-50vh) translateZ(1px);
    color: white;
    font-size: 30px;
}

.content {
    font-weight: 800;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    left: 8rem;
    top: -6rem;
    width: 300px;
}

.btn {
    margin: -4rem;
    position: absolute;
    border-radius: 16px;
    background: #3498db;
    border: 1px solid #d0d7de;
    color: #FFF;
    font-family: Helvetica, sans-serif;
    font-size: 19px;
    font-weight: 400;
}

</style>