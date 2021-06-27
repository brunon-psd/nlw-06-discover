export default function Modal(){

    const ModalWrapper =  document.querySelector('.modal-wrapper')
    const cancelButton = document.querySelector('.button.cancel')

    cancelButton.addEventListener("click", close)

    function open(){
        //função: ativar a classe active da modal
        ModalWrapper.classList.add("active")
    }
    function close(){
        //função: remover a classe active da modal
       ModalWrapper.classList.remove("active")
    }

    return{
        open,
        close
    }
}