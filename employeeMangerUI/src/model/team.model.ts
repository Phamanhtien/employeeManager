export class Team {
    id: number = 0;
    name: string = "";
    managerId: number = 0;

    public constructor(id: number, name: string, managerId: number) {
        this.id =  id;
        this.name = name;
        this.managerId = managerId;
    }

    public setId(id: number) {
        this.id = id;
    }

    public getId(): number {
        return this.id
    }

    public setName(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public setManagerId(managerId: number) {
        this.managerId = managerId;
    }

    public getManagerId(): number {
        return this.managerId;
    }
}