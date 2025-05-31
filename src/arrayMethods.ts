class Memberz {
  constructor(public name: string, public id: number, public status: string, public role: string, public isPremium: boolean) { }
}

class Community {
  private members: Memberz[] = []

  pushMembers(members: Memberz[]) {
    this.members.push(...members)
  }

  popLastMember() {
    this.members.pop()
  }

  getPremiumMembers(): Memberz[] {
    return this.members.filter(member => member.isPremium)
  }

  findMember(id: number): Memberz | undefined {
    return this.members.find(member => member.id === id)
  }

  getMemberDescription(id: number) {
    this.members.forEach((member, index) => {
      if (id === index) {
        console.log(`${member.name} is an ${member.status} and ${member.isPremium} member in the community`)
      }
    })
  }

  getMemberNames(): string[] {
    return this.members.map(member => member.name);
  }

  removeMemberAt(index: number): void {
    this.members.splice(index, 1);
  }

  includesMember(member: Memberz): boolean {
    return this.members.includes(member);
  }

  getMemberLocationIndex(id: number): number {
    return this.members.findIndex(member => member.id === id);
  }

}