export interface RSJobAction {
  action: 'reset-job-pages';
  jobName: string;
}

export interface RSJobPageAction {
  action: 'reset-job-page';
  jobName: string;
  pageId: number;
}

export interface RSJobPageImageAction {
  action: 'map-image';
  pageId: number;
  groupIndex: number;
  imageIndex: number;
}

export type RSAction = RSJobAction | RSJobPageAction | RSJobPageImageAction;

export function isRSAction(arg: unknown): arg is RSAction {
  if (typeof arg !== 'object' || arg === null) return false;

  const obj = arg as Partial<RSAction>;

  if (obj.action === 'reset-job-pages' && typeof obj.jobName === 'string') {
    return true;
  }

  if (
    obj.action === 'reset-job-page' &&
    typeof obj.jobName === 'string' &&
    typeof obj.pageId === 'number'
  ) {
    return true;
  }

  if (
    obj.action === 'map-image' &&
    typeof obj.pageId === 'number' &&
    typeof obj.groupIndex === 'number' &&
    typeof obj.imageIndex === 'number'
  ) {
    return true;
  }

  return false;
}
