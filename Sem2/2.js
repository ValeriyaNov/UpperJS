constructor(firstName, lastName) {

    this.firstName = firstName;

    this.lastName = lastName;

}

}

class PremiumUser extends User {

    constructor(firstName, lastName, premiumAccount) {

        super(firstName, lastName);

        this.premiumAccount = premiumAccount;

    }

}

class RegularUser extends User {

    constructor(firstName, lastName) {

        super(firstName, lastName);

    }

}

function getAccountInfo(user) {

    if (!(user instanceof User)) {

        return null;

    }

    if (user instanceof PremiumUser) {

        return user.premiumAccount;

    } else if (user instanceof RegularUser) {

        return "this user is Regular";

    }

    return "Unknown user";

}

const user1 = new User("ivan", "ivanov");

const user2 = new RegularUser("sergey", "sergeev");

const user3 = new PremiumUser("andrey", "andreev", "05.05.2024");

const user4 = 123;

console.log(getAccountInfo(user1));

console.log(getAccountInfo(user2));

console.log(getAccountInfo(user3));

console.log(getAccountInfo(user4));