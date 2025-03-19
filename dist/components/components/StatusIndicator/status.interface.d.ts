export declare enum GridStatusEnums {
    ACTIVE = "ACTIVE",
    SUSPENDED = "SUSPENDED",
    PENDING = "PENDING",
    DRAFT = "DRAFT",
    UNPUBLISHED = "UNPUBLISHED",
    PUBLISHED = "PUBLISHED",
    APPROVED = "APPROVED",
    DECLINED = "DECLINED"
}
export interface IStatusWrapperProps {
    status?: GridStatusEnums;
}
