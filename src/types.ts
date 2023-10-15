interface ICard {
    name: string;
    image: string;
    id: number;
}

interface IProps {
    card: ICard;
    key: string;
} 

export interface AreaProps {
    card: Area;
    key: string;
} 

export interface Area {
    id: number;
    name: string;
    level: string;
    parent: number;
    children: any;
}
