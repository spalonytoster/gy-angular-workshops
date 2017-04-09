export interface NotesFilterParams {
    title: string;
    priorities: number[];
    dueDateRange: {
      start: Date,
      end: Date
    };
}
