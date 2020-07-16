export interface IUserProps {
    id: number;
    thumbnail: string;
    name: string;
    memo: string;
    area?: string;
    clickUserHandler?: (user: object) => void;
}