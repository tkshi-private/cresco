import {observable,action,state} from "mobx";


class User{
  @observable email = ''
  @observable phoneNumber = ''
  @observable photoURL = ''
  @observable displayName = ''
  @observable uid = ''
}

class Users{
  @observable users = []
  @action getMyUser = ()=>{
    return this.users[0];
  }
  @action setViwerUser = (user)=>{
    console.log('setViwerUser',user)
    this.users[1] = user
  }
  @action getViwerUser = ()=>{
    if(this.users[1]){
      return this.users[1]
    }else{
      return {
        email:'',
        phoneNumber:'',
        photoURL:'',
        displayName:'',
        uid:'',
      }
    }
  }
  @action setCurrentUser = (user)=>{
    console.log('setCurrentUser',user.email)
    this.users[0].email = user.email
  }
  @action setPhoneNumber = (number)=>{
    this.users[0].phoneNumber = number
  }
}

let users = new Users()
users.users.push(new User())

setInterval(()=>{
  // console.log(users.getViwerUser())
},1000)

export default users;
