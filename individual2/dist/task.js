var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = (function () {
    function Person(name) {
        this.firstName = name;
    }
    Person.prototype.print = function () {
        console.log(this.firstName + " " + this.lastName);
    };
    Person.prototype.show = function (numbs) {
        for (var _i = 0, numbs_1 = numbs; _i < numbs_1.length; _i++) {
            var numb = numbs_1[_i];
            console.log(numb);
        }
    };
    Person.method1 = function () {
        console.log("You call method1 by base class ");
    };
    return Person;
}());
var Gamer = (function (_super) {
    __extends(Gamer, _super);
    function Gamer(a, c) {
        var _this = _super.call(this, name) || this;
        _this.age = a;
        _this.city = c;
        return _this;
    }
    Gamer.prototype.preshow = function () {
        throw new Error("Method not implemented.");
    };
    Gamer.prototype.education = function (edu) {
        return "Person " + this.firstName + " have " + edu;
    };
    Gamer.prototype.showGamer = function () {
        console.log(_super.prototype.print.call(this) + " " + this.age + " " + this.city);
    };
    Gamer.prototype.show = function () {
        _super.prototype.print.call(this);
        console.log("Age user is: " + this.age);
    };
    return Gamer;
}(Person));
var User = (function (_super) {
    __extends(User, _super);
    function User(phone) {
        var _this = _super.call(this, 12, 'Nikolaev') || this;
        _this.phone = phone;
        return _this;
    }
    User.prototype.call = function () {
        console.log('User' + this.phone + "have this number");
    };
    User.prototype.show = function () {
        _super.prototype.print.call(this);
        console.log("Age user is: " + this.age);
        console.log('User' + this.phone + "have this number");
    };
    User.boo = function (bool) {
        if (bool == true) {
            console.log("Success!");
        }
        else {
            console.log("Wrong!");
        }
    };
    return User;
}(Gamer));
var gamer = new Gamer(16, "Rob");
var user = new User(380956485213);
var interf1 = [user, gamer, {
        preshow: function () {
            throw new Error("Method not implemented.");
        },
        education: function (string) {
            return 'sdfgasdf';
        }
    }
];
for (var _i = 0, interf1_1 = interf1; _i < interf1_1.length; _i++) {
    var Firstinterf = interf1_1[_i];
    console.log(Firstinterf.education("high"));
}
var someperson = new Gamer(23, "none");
someperson.print();
someperson.show([14, 15, 23, 18, 32]);
Person.method1();
someperson.firstName = "Alina";
console.log(someperson);
var gamer1 = new Gamer(50, "Middle");
console.log(gamer1);
gamer1.show();
gamer1.showGamer();
gamer1.education("High, middle,none");
console.log(gamer1);
var user1 = new User(380562145896);
user1.call();
user1.patronomic = "Ihorevich";
user1.day = 1;
user1.hour = 12;
User.boo(true);
user1.print();
user1.show();
Person.method1();
console.log(user1);
//# sourceMappingURL=task.js.map