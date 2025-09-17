export enum Priority {
  Low ,
  Medium ,
  High 
}

export enum Status {
  New ,
  InProgress ,
  Completed ,
  Archived 
}

export interface TaskModule {
  id: number;
  title: string;
  description: string;
  dueDate: Date;
  priority: Priority;
  status: Status;
}