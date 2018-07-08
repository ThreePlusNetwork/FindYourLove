pragma solidity ^0.4.22;

contract Account {

  mapping(address => string) nameMap;
  mapping(address => uint256) ageMap;
  mapping(address => string) hobbiesMap;
  mapping(address => bool) sexMap;
  

  event NewAccount(address _sender,string _name,uint256 _age,string _hobby,bool _sex);

  function createAccount(string _name,uint256 _age,string _hobby,bool _sex) public {
      nameMap[msg.sender] = _name;
      ageMap[msg.sender] = _age;
      hobbiesMap[msg.sender] = _hobby;
      sexMap[msg.sender] = _sex;
      emit NewAccount(msg.sender,_name,_age,_hobby,_sex);
  }

  function get() public view returns (address,string,uint,string,bool) {
    return (msg.sender,nameMap[msg.sender], ageMap[msg.sender],hobbiesMap[msg.sender],sexMap[msg.sender]);
  }

}
