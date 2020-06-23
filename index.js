var app = new Vue({
    el: '#app',
    data:{
        status:1,
        picked:'',
        checked:[],
        content:'', 
        isp1Disabled:true,
        isp2Disabled:true,
        isp3Disabled:true,
    },
    methods:{
    handleReset0:function(val){
        switch(val){
            case 1:
                this.picked = false;
                this.isp1Disabled = true;
                break
            case 2:
                this.checked =[];
                this.isp2Disabled = true;
                break
            case 3:
                this.content = false;
                this.isp3Disabled = true;
                break
            }
        },
    },
    watch:{
        picked(){
            if(this.picked){
                this.isp1Disabled = false;
            }else{
                this.isp1Disabled=true;
            }
        },
        checked(){
            if(this.checked.length>=2 && this.checked.length<=3){
                this.isp2Disabled=false;
            }else{
                this.isp2Disabled=true;
            }
        },
        message(){
            var len=0;
            for(var i=0;i<this.message.length;i++) len += /[^\x00-\xff]/g.test(this.message.charAt(i)) ? 1 : 0.5;
            if(len >= 100){
                this.isp3Disabled=false;
            }else{
                this.isp3Disabled=true;
            }
        }
    }
    
})