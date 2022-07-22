const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const animation = $('.container')
const addBtn = $('.add')
const minus =  $('.minus')
const multip =  $('.multip')
const division =  $('.division')
const firstValue = $('#aElement')
const secondValue = $('#bElement')
const sum = $('#summary')

const app = {

    handleEvent: function(){
        addBtn.onclick = function(){
            animation.classList.add('active')

            setTimeout(() => {
                animation.classList.remove('active')
                if(firstValue.value && secondValue.value){
                    sum.value =  Number(firstValue.value) + Number(secondValue.value)
                }
            }, 500);
        }
        minus.onclick = function(){
            animation.classList.add('active')

            setTimeout(() => {
                animation.classList.remove('active')
                if(firstValue.value && secondValue.value){
                    sum.value =  Number(firstValue.value) - Number(secondValue.value)
                }
            }, 500);
        }
        multip.onclick = function(){
            animation.classList.add('active')

            setTimeout(() => {
                animation.classList.remove('active')
                if(firstValue.value && secondValue.value){
                    sum.value =  Number(firstValue.value) * Number(secondValue.value)
                }
            }, 500);
        }
        division.onclick = function(){
            animation.classList.add('active')
            setTimeout(() => {
                animation.classList.remove('active')
                if(firstValue.value && secondValue.value){
                    sum.value =  Number(firstValue.value) / Number(secondValue.value)
                }
            }, 500);
        }
        
    },

    start: function(){
        this.handleEvent();
    }
}

app.start()