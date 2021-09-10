// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract EventTest {

  event resultNum(uint firstNum, uint secondNum, uint resultNum);
  mapping(uint256 => address) public ownersOfNum; 

  function addNumbers(uint num1, uint num2) public returns(uint){
    uint result = num1 + num2;
    emit resultNum(num1, num2, result);
    
    return result;
  }
}
