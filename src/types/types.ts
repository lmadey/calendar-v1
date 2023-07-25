export type FetchDataStatus<T> =
  | { type: "REST" }
  | { type: "LOADING" }
  | { type: "SUCCESS"; data: T }
  | { type: "ERROR"; error: string };

export type PostDataStatus<T> =
  | { type: "REST" }
  | { type: "LOADING"; payload: T }
  | { type: "SUCCESS"; data: T }
  | { type: "ERROR"; error: string };
