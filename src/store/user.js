import {observable,action} from "mobx";


class User{
  @observable email = ''
  @observable phoneNumber = ''
}

class Users{
  @observable users = []
  @action getMyUser = ()=>{
    return this.users[0];
  }
  @action setCurrentUser = (user)=>{
    console.log('setCurrentUser',user.email)
    this.users[0].email = user.email
  }
}

let users = new Users()
users.users.push(new User())

setInterval(()=>{
  console.log(users.users[0])
},1000)

export default users;
