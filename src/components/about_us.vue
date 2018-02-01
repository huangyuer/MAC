<template>
    <div class="">
        <div class="about-us-container">
            <el-row>
                <el-col :span="8">&nbsp;</el-col>
                <el-col :span="8" class="title">我们是谁</el-col>
                <el-col :span="8">&nbsp;</el-col>
            </el-row>
            <el-row>
                <el-col :span="8" :offset="8">
                    <div class="underline"></div>
                </el-col>
            </el-row>
            <div class="about-us-content-container">
                <div class="about-us-content-left-pane"></div>
                <div class="about-us-content-right-pane">
                    <div class="about-us-content-subtitle"><span>源自同济，更懂工程技术!</span></div>
                    <div class="about-us-content-words"><span>
                    Who are we?<br>
我们来自同济大学出版社，在依托同济大学资源的基础上，成为工程技术领域专业出版机构。
 <br>
What are we doing？<br>
 我们力争打造具有同济特色，覆盖工程学科领域比较齐全的专业数据库。
                </span></div>
                </div>
            </div>
            <el-row style="margin-top: 100px;">
                <el-col :span="8">&nbsp;</el-col>
                <el-col :span="8" class="title">联系我们</el-col>
                <el-col :span="8">&nbsp;</el-col>
            </el-row>
            <el-row>
                <el-col :span="8" :offset="8">
                    <div class="underline"></div>
                </el-col>
            </el-row>
            <div class="about-us-contact-info-container">
                <div class="about-us-contact-info-item-container">
                    <div class="about-us-contact-info-item">
                        <div class="about-us-contact-info-item-left aboutus-telephone"></div>
                        <div class="about-us-contact-info-item-right">
                            <span>021-65982478</span>
                        </div>
                    </div>
                </div>
                <div class="about-us-contact-info-item-container">
                    <div class="about-us-contact-info-item">
                        <div class="about-us-contact-info-item-left aboutus-location"></div>
                        <div class="about-us-contact-info-item-right">
                            <span>上海市杨浦区赤峰路2号</span>
                        </div>
                    </div>
                </div>
                <div class="about-us-contact-info-item-container">
                    <div class="about-us-contact-info-item">
                        <div class="about-us-contact-info-item-left aboutus-emaill"></div>
                        <div class="about-us-contact-info-item-right">
                            <span>info@tjdesignx.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="about-us-map-container" id="about-us-map-container">
            <img style="width:100%;" src="../assets/images/aboutusmap.png" />
        </div>
    </div>

</template>
<style scoped>
    .about-us-container {
        width: 1200px;
        margin: 86px auto auto auto;
    }

    .title {
        font-size: 1.66666666666rem;
        text-align: center;
    }

    .underline {
        border: solid 2px #F04D4E;
        width: 100px;
        margin: 0 auto;
    }

    .about-us-content-container {
        width: 100%;
        overflow: hidden;
        margin-top: 50px;
    }

    .about-us-content-left-pane {
        float: left;
        height: 260px;
        width: 560px;
        background-image: url("http://tjdesigner.oss-cn-shanghai.aliyuncs.com/upload/aboutus.jpg?x-oss-process=image/resize,w_560");
        background-size: 100% 100%;
    }

    .about-us-content-right-pane {
        margin-left: 639px;
        height: 260px;
    }

    .about-us-content-title {
        margin-top: -5px;
    }

    .about-us-content-title > span {
        font-size: 18px;
        margin: 0;
        padding: 0;
    }

    .about-us-content-subtitle {
        font-size: 18px;
        color: #6F6F6F;
        line-height: 18px;
        height: 18px;
    }

    .about-us-content-words {
        font-size: 14px;
        margin-top: 36px;
    }

    .about-us-contact-info-container {
        width: 100%;
        display: flex;
        display: -webkit-flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-around;
    }

    .about-us-contact-info-item-container {
        width: 400px;
        height: 200px;
        position: relative;
    }

    .about-us-contact-info-item {
        height: 60px;
        width: 250px;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        overflow: hidden;
    }

    .about-us-contact-info-item-left {
        float: left;
        height: 60px;
        width: 60px;
        background-size: 100% 100%;
    }

    .aboutus-telephone {
        background-image: url("../assets/images/telephone.png");
    }

    .aboutus-location {
        background-image: url("../assets/images/location.png");
    }

    .aboutus-emaill {
        background-image: url("../assets/images/email.png");
    }

    .about-us-contact-info-item-right {
        margin-left: 90px;
        display: flex;
        display: -webkit-flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: space-around;
        height: 100%;
        vertical-align: middle;
    }

    .about-us-map-container {
        margin-top: 20px;
        width: 100%;
        height: 570px;
        background-color: grey;
    }
</style>
<script>
  export default{
    mounted: function () {
//       var map = new AMap.Map('about-us-map-container', {
//         zoom: 100,
//         center: [121.5069200000, 31.2824690000]
//       });
//       var marker = new AMap.Marker({
//         position: [121.5069400000, 31.2825990000],
//         map: map
//       });
//       marker.setMap(map);
//       AMap.plugin(['AMap.ToolBar', 'AMap.Scale', 'AMap.Geolocation', 'AMap.Transfer'], function () {
//         var toolbar = new AMap.ToolBar();
//         var scale = new AMap.Scale();
//         var geolocation = new AMap.Geolocation();
//         var transfer = new AMap.Transfer();
//         map.addControl(toolbar);
// //        map.addControl(scale);
//         map.addControl(geolocation);
//         map.addControl(transfer);
//       })
    },
    data(){
      return {}
    },
    components: {}
  }
</script>
