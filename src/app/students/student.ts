export type Student = {
    _id: string;
    name: string;
    address: string;
    phones: Array<string>;
    studies: Array<string>;
};
export type Phone = {
    home?: string;
    work?: string;
};
