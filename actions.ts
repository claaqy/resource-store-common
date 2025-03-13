export interface RSJobAction {
  action: 'reset-job-pages';
  jobName: string;
}

export interface RSJobPageAction {
  action: 'reset-job-page';
  jobName: string;
  pageId: number;
}

export type RSAction = RSJobAction | RSJobPageAction;

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

  return false;
}
