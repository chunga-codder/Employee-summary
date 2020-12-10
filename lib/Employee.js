class Employee {
    constructor (name, id, email, github,role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
        this.rule = role;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole() {
        return 'Employee';
    }
    getgithub() {
        return this.github
    }
    getrole() {
        return this.rule;
    }
}

module.exports = Employee
