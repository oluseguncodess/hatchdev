"use strict";
class Memberz {
    constructor(name, id, status, role, isPremium) {
        this.name = name;
        this.id = id;
        this.status = status;
        this.role = role;
        this.isPremium = isPremium;
    }
}
class Community {
    constructor() {
        this.members = [];
    }
    pushMembers(members) {
        this.members.push(...members);
    }
    popLastMember() {
        this.members.pop();
    }
    getPremiumMembers() {
        return this.members.filter(member => member.isPremium);
    }
    findMember(id) {
        return this.members.find(member => member.id === id);
    }
    getMemberDescription(id) {
        this.members.forEach((member, index) => {
            if (id === index) {
                console.log(`${member.name} is an ${member.status} and ${member.isPremium} member in the community`);
            }
        });
    }
    getMemberNames() {
        return this.members.map(member => member.name);
    }
    removeMemberAt(index) {
        this.members.splice(index, 1);
    }
    includesMember(member) {
        return this.members.includes(member);
    }
    getMemberLocationIndex(id) {
        return this.members.findIndex(member => member.id === id);
    }
}
