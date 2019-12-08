class User {
  constructor(name) {
    this.name = name;
    this.chatRoom = null;
  }

  send(message, to) {
    this.chatRoom.send(message, this, to);
  }

  recieve(message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  }
}

class ChatRoom {
  constructor() {
    this.users = {};
  }

  register(user) {
    this.users[user.name] = user;
    user.chatRoom = this;
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

const adam = new User("Adam");
const jake = new User("Jake");
const john = new User("John");

const chatRoom = new ChatRoom();
chatRoom.register(adam);
chatRoom.register(jake);
chatRoom.register(john);
console.log(chatRoom.users);
adam.send("hey, whats up?", jake);
adam.send("hello eveyone!");
