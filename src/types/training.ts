export interface Exercise {
  name: string;
  sets: string;
  reps: string;
  rest?: string;
}

export interface ExerciseSection {
  name: string;
  duration: string;
  exercises: (string | Exercise)[];
}

export interface Day {
  day: string;
  activity: string;
  duration?: string;
  intensity?: string;
  type?: string;
  link: string;
  description?: string;
  rest?: string;
}

export interface Week {
  week: number;
  days: Day[];
}

export interface Phase {
  title: string;
  subtitle: string;
  description: string;
  progress: number;
  path: string;
  weekNumber: number;
  days: Day[];
}

export interface TrainingProgram {
  phases: Phase[];
  weeks: Week[];
} 