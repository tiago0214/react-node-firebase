import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from '@phosphor-icons/react'

export function NewTransactionModal(){
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>

        <CloseButton>
          <X size={20}/>
        </CloseButton>

        <form>
          <input type="text" placeholder='Descrição' required />
          <input type="number" placeholder='Preço'required />
          <input type="text" placeholder='Categoria'required />

          <TransactionType>
            <TransactionTypeButton value='income' variant='income'>
              <ArrowCircleUp size={24}/>
              Entrada
            </TransactionTypeButton>

            <TransactionTypeButton value='outcome' variant='outcome'>
              <ArrowCircleDown size={24}/>
              Saida
            </TransactionTypeButton>

          </TransactionType>

          <button type='submit'>Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}