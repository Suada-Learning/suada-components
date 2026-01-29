export enum GridStatusEnums {
  ACTIVE = 'ACTIVE',
  SUSPENDED = 'SUSPENDED',
  PENDING = 'PENDING',
  DRAFT = 'DRAFT',
  UNPUBLISHED = 'UNPUBLISHED',
  PUBLISHED = 'PUBLISHED',
  APPROVED = 'APPROVED',
  TRY_AGAIN = 'TRY AGAIN',
  DECLINED = 'DECLINED',
}

export interface IStatusWrapperProps {
  status?: GridStatusEnums
}
