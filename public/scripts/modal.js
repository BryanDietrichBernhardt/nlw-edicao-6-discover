export default function Modal() {

  const modalWrapper = document.querySelector('.modal-wrapper')
  const cancelButton = document.querySelector('.button.cancel')

  cancelButton.addEventListener("click", close) //quando acontecer o evento de click, inicia a função close

  function open() {
    // funcionalidade de atribuir a classe active para a modal
    modalWrapper.classList.add('active') //pega a classe .modal-wraper e adiciona a classe .active
  }
  function close() {
    // funcionalidade de remover a classe active da modal
    modalWrapper.classList.remove('active') //pega a classe .modal-wraper e remove a classe .active
  }

  return {
    open,
    close
  }
}