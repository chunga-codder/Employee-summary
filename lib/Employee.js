class Employee {
    constructor (name, id, email, github,rule) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
        this.rule = rule;
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
    getrul() {
        return this.rule;
    }
}

module.exports = Employee
