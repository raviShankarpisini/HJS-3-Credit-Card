// Write your code here
import {useState} from 'react'
import {BackGroundContainer} from './styledComponents'

const CreditCard = () => {
  const [number, UseNumber] = useState('')
  const [name, UseName] = useState('')

  const onChangeNumber = event => UseNumber(event.target.value)

  const onChangeName = event => UseName(event.target.value)

  return (
    <div>
      <div>
        <h1>CREDIT CARD</h1>
        <BackGroundContainer data-testid="creditCard">
          <h1>{number}</h1>
          <p>CARDHOLDER NAME</p>
          <h1>{name.toUpperCase()}</h1>
        </BackGroundContainer>
      </div>
      <div>
        <div>
          <h1>Payment Method</h1>
          <input
            placeholder="Card Number"
            type="text"
            onChange={onChangeNumber}
            value={number}
          />
          <input
            placeholder=" Cardholder Name"
            type="text"
            onChange={onChangeName}
            value={name}
          />
        </div>
      </div>
    </div>
  )
}

export default CreditCard
