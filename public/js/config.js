/**
 * Created by Administrator on 2017/9/20.
 */
require.config({
    baseUrl: '/public/assets',
    paths: {
        jquery: 'jquery/jquery.min',
        cookie: 'jquery-cookie/jquery.cookie',
        template: 'artTemplate/template-web',
        bootstrap: 'bootstrap/js/bootstrap',
        datepicker: 'bootstrap-datepicker/js/bootstrap-datepicker',
        //language: 'bootstap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
        language: 'bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
        validate: 'validate/jquery-validate.min',
        form: 'jquery-form/jquery.form',
        uploadify:'uploadify/jquery.uploadify.min',// 使用uploadify flash 插件上传头像图片
        region: 'jquery-region/jquery.region',
        ckeditor:'ckeditor/ckeditor',
        jcrop:'jcrop/js/Jcrop',
        echarts: 'echarts/echarts.min',

        util: '../js/util',
        common: '../js/common',
        login: '../js/login',
        teacherlist: '../js/teacher-list',
        teacheradd: '../js/teacher-add',
        settings: '../js/settings',
        index: '../js/index',
        courselist: '../js/course-list',
        courseadd: '../js/course-add',
        coursebasic: '../js/course-basic',
        coursepicture: '../js/course-picture',
        curselesson: '../js/course-lesson',
        state: '../js/state'
    },
    shim: {
        //  bootstrap 依赖 jQuery
        bootstrap: {
            // deps: require.js 方法ԣ可以添加依赖׼
            deps: ['jquery']
        },
        language: {
            deps: ['jquery','datepicker']
        },
        validate: {
            deps: ['jquery']
        },
        uploadify:{
            deps: ['jquery']
        },
        ckeditor:{
            exports: 'CKEDITOR'
        },
        jcrop: {
            deps: ['jquery']
        }
    }
});