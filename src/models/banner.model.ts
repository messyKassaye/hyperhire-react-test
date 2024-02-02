export interface IBanner{
    mainBannerId: number;
    title: string;
    sort: number;
    pcImageUrl: string;
    mobileImageUrl: string;
    linkUrl: string;
    startDate: Date;
    endDate: Date;
    creator: string;
    updater: string
    deleter: string;
    updatedAt: Date;
    deletedAt: Date
}