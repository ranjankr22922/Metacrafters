// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;


// contract HelloWorld{
//     string public myString = "hello world";
// }


// contract Storage{

//     uint number;

//     // takes a value _number and assigns it to the state variable number
//     function setNumber(uint _number) public {
//         number = _number;
//     }

//     // returns the value of the state variable number
//     function getNumber() public view returns (uint) {
//         return number;
//     }
// }


// Data types - values and references

// contract ValueTypes{

//     bool public b = true;

//     uint public u = 123;    //  uint = uint256, range = 0 to 2**256 - 1
//                             //          uint8, range = 0 to 2**8 - 1
//                             //          uint16, range = 0 to 2**16 - 1

//     int public i = -123;    //  int = int256, range = -2**255 to 2**255 - 1
//                             //          int128, range = -2**127 to 2**127 - 1
//     int public minInt = type(int).min;
//     int public maxInt = type(int).max;

//     address public addr = 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4;

//     bytes32 public b32 = 0x89c58ced8a9078bdef2bb60f22e58eeff7dbfed6c2dff3e7c508b629295926fa;
// }

// contract Constants{     //constants will always be on uppercase letters
//     address public constant MY_ADDRESS = 0x777788889999AaAAbBbbCcccddDdeeeEfFFfCcCc; //373 gas
//     uint public constant MY_UINT = 123;
// }

// contract Var{
//     address public MY_ADDRESS = 0x777788889999AaAAbBbbCcccddDdeeeEfFFfCcCc;  //2483 gas
// }

// Arrays
// contract Array{
//     uint[] public nums = [1,2,3];                 //dynamic
//     uint[3] public numsFixed = [4,5,6];           //static

//     function examples() external {
//         nums.push(4);       //  [1,2,3,4]
//         uint x = nums[1];   //  2
//         nums[2] = 777;      //  [1,2,777,4]
//         delete nums[1];     //  [1,0,777,4]
//         nums.pop();         //  [1,0,777]
//         uint len = nums.length;

//         // Create array in memory
//         uint[] memory a = new uint[](5);   // updation is possible but not push and pop as array size is fixed.
//         a[1] = 123;
//         //  a.push();      
//         //  a.pop();
//     }

//     // can use a function which return an array but it is not recommended as it uses infinite gas. 
//     function returnArray() external view returns (uint[] memory){
//         return nums;
//     } 
// }


