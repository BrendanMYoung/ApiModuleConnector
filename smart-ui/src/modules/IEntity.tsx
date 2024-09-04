

interface IEntity {
    publicId: string;
    id: number;
}

export interface IStateFields {

}

export class ShowFields {
    title: string;
    description: string;
    showNumber: number;
    playing: boolean;
    hosts: string[];

    constructor(obj?: IShowFields)  {
        this.title = obj?.title ?? "";
        this.description = obj?.description ?? "";
        this.showNumber = obj?.showNumber ?? 0;
        this.playing = obj?.playing ?? false;
        this.hosts = ["host1", "host2"]
    }
}


export interface IShowFields {
    title: string;
    description: string;
    showNumber: number;
    playing: boolean;
}
export class Show implements IShowFields, IEntity{
    title: string;
    description: string;
    showNumber: number;
    playing: boolean;
    publicId: string;
    id: number;
    constructor(obj?: IShowFields, et?: IEntity)  {
        this.title = obj?.title ?? "";
        this.description = obj?.description ?? "";
        this.showNumber = obj?.showNumber ?? 0;
        this.playing = obj?.playing ?? false;

        this.publicId = et?.publicId ?? "";
        this.id = et?.id ?? 0
    }


}

