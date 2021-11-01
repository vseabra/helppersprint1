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
  inputs: Input[];
}

export interface Input {
  name: string;
  placeholder: string;
}

// não consegui pensar em um nome melhor para  tableData
export interface TableRow {
  tableData: {[property: string]: string | number}
  Buttons?: Button[];
}
