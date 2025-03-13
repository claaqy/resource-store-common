export interface RSJobAction {
  action: 'reset-job-pages';
  jobName: string;
}

export type RSAction = RSJobAction;

export function isRSAction(arg: unknown): arg is RSAction {
  if (typeof arg !== 'object' || arg === null) return false;

  const obj = arg as Partial<RSAction>;

  if (obj.action === 'reset-job-pages' && typeof obj.jobName === 'string') {
    return true;
  }

  return false;
}
