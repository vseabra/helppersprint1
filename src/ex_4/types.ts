export interface Person {
  id: number;
  name: string;
  bio: string;
}

export interface Update {
  name?: string;
  bio?: string;
}

export interface Button {
  label: string;
  className?: string;
  onClick?: () => void;
  type?: string
}

export interface Form {
  id: number;
  onSubmit: (event: Event) => void;
}

export interface Input {
  name: string;
  placeholder: string;
}
