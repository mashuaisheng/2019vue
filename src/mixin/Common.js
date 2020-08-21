export default {
    methods:{
        alert:function (msg) {
            layui.layer.alert(msg);
            return false;
        },
        msg:function (msg) {
            layui.layer.msg(msg);
            return false;
        }
    }
}
