import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {actionCreators} from "./state/index"
import { bindActionCreators } from 'redux'

const Shop = () => {
  const dispatch = useDispatch();
  const {withdrawMoney,depositMoney} = bindActionCreators(actionCreators,dispatch);
  const balance = useSelector(state => state.amount);

  return (
    <div> 
        <div>Deposit/Withdraw Money</div>
        {/* <button onClick={() => {dispatch(actionCreators.withdrawMoney(100))} }>-</button>
         Update Balance
        <button onClick={() => {dispatch(actionCreators.depositMoney(100))} }>+</button> */}
        <button onClick={() => {withdrawMoney(100)} }>-</button>
         Update Balance ({balance})
        <button onClick={() => {depositMoney(100)} }>+</button>
    </div>
  )
}

export default Shop