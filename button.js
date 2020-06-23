Vue.component('vue-button', {
    props: {       
    btnText:{},          
    status:{
        type:Number,
        default:1
        },
    isDisabled:{
        type:Boolean,
        default: false
        }
    },

    template: `<button type="button" class="btn"
                @click = "handleThing()" :disabled = "isDisabled">{{ btnText }}</button>`,    

    data: function(){
        return{
            counter:this.status,
        }
    },

    watch:{
        counter:function(val){
            this.$emit('input',val);
        },
        status:function(val){
            this.updateValue(val);
        },  
    },

    methods:{
        updateValue:function(val){
            this.counter = val;
        },
        handleThing: function(){
            if(this.btnText === "下一步"){
                this.counter += 1;
            }
            if(this.btnText === "上一步"){
                this.counter-= 1;
            }
            if(this.btnText === "重置"){
                this.$parent.handleReset0(this.status);
            }
        },
        
    },
    
    mounted:function(){
        this.updateValue(this.status);
    }
})
