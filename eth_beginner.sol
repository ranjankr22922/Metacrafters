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


// // Structs
// contract Structs{
//     struct Car{
//         string model;
//         uint year;
//         address owner;
//     }

//     Car public car;
//     Car[] public cars;
//     mapping (address => Car[]) public carsByOwner;

//     function examples() external {
//         Car memory toyota = Car("Toyota", 1990, msg.sender);
//         Car memory lambo = Car({model: "Lamborghini", year: 1980, owner: msg.sender});
//         Car memory tesla;
//         tesla.model = "Tesla";
//         tesla.year = 2010;
//         tesla.owner = msg.sender;

//         cars.push(toyota);
//         cars.push(lambo);
//         cars.push(tesla);

//         cars.push(Car("Ferrari", 2020, msg.sender));

//         Car memory _car = cars[0];
//         _car.model;
//         _car.year;
//         _car.owner;

//         Car storage car = cars[0];
//         _car.year = 1999;

//         delete _car.owner;
//         delete cars[1];
//     }
// }


// Mapping
// contract Mapping{
//     mapping(address => uint) public balances;
//     mapping(address => mapping (address => bool)) public isFriend;

//     function examples() external {
//         balances[msg.sender]=123;
//         uint bal = balances[msg.sender];
//         uint bal2 = balances[address(1)];   // 0
//         balances[msg.sender] += 456;    // 123+456 = 579
//         delete balances[msg.sender];    // 0

//         isFriend[msg.sender][address(this)] = true;
//     }
// }


// Gas
// contract Gas{
//     function testGasRefund() public returns (uint){
//         return tx.gasprice;
//     }

//     uint public i=0;

//     function forever() public {
//         while (true){
//             i+=1;
//         }
//     }
// }


//If-else
// contract IfElse{
//     function example (uint _x) external pure returns (uint){
//         if(_x < 10){
//             return 1;
//         } else if (_x < 20){
//             return 2;
//         }
//         return 3;
//     }

//     // Ternary operator
//     function ternary (uint _x) external pure returns (uint){
//         return _x < 10 ? 1 : 2;
//     }
// }


// Loops
// contract ForAndWhileLoops{
//     function loops() external pure {
//         //For Loop
//         for(uint i=0; i<10; i++){
//             //code
//             if (i==3){
//             continue;
//             }
//             //more code
//             if(i==5){
//             break;
//             }
//         }

//         //While Loop
//         uint j =0;
//         while(j<10){
//             //code
//             j++;
//         }
//     }

//     //function to sum all the numbers from 1 to n.
//     function sum(uint _n) external pure returns(uint){
//         uint s;
//         for(uint i=1;i<=_n;i++){
//             s += i;
//         }
//         return s;
//     }
// }


// // Function
// contract FunctionIntro{
//     function add(uint x, uint y) external pure returns (uint){
//         return x+y;   
//     }

//     function sub(uint x, uint y) external pure returns (uint){
//         return x-y;   
//     }
// }
