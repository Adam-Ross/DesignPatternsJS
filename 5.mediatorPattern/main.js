class User {
  constructor(name) {
    this.name = name;
    this.chatroom = null;
  }

  send(message, to) {
    this.chatroom.send(message, this, to);
  }

  recieve(message, from) {
    console.log(`To: ${this.name} From: ${from.name}: ${message}`);
  }
}

class Chatroom {
  constructor() {
    this.users = {};
  }

  register(user) {
    this.users[user.name] = user;
    user.chatroom = this;
  }

  send(message, from, to) {
    if (to) {
      to.recieve(message, from);
    } else {
      for (let key in this.users) {
        if (this.users[key] !== from) {
          this.users[key].recieve(message, from);
        }
      }
    }
  }
}

const chatroom = new Chatroom();
const adam = new User("Adam");
const jake = new User("Jake");
const john = new User("John");
chatroom.register(adam);
chatroom.register(jake);
chatroom.register(john);

chatroom.send("Hello", jake);

console.log(chatroom.users);
