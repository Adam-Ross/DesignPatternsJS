function MembershipFactory() {
  this.createMember = function(name, type) {
    let member;

    if (type === "super") {
      member = new Super(name);
    } else if (type === "basic") {
      member = new Basic(name);
    }

    member.type = type;

    member.define = function() {
      console.log(`${this.name}, ${this.type}, ${this.cost}`);
    };
    return member;
  };
}

const Super = function(name) {
  this.name = name;
  this.cost = "$25";
};

const Basic = function(name) {
  this.name = name;
  this.cost = "$15";
};

const members = [];
const factory = new MembershipFactory();
members.push(factory.createMember("Mike Jones", "super"));
members.push(factory.createMember("Neal Range", "basic"));
members.push(factory.createMember("Mary Ann", "super"));
members.push(factory.createMember("Gilliagan Smith", "basic"));

members.forEach(member => {
  member.define();
});

const basicMembers = members.filter(member => {
  return member.type === "basic";
});

console.log(basicMembers.length);

// Bonus question, how do you find out how many standard subscriptions you have??
