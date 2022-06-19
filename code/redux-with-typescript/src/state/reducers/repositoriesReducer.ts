interface RepositoriesState {
  data: string[];
  loading: boolean;
  error: string | null;
}

interface SearchRepositoriesAction {
  type: "search_repositories";
}

interface SearchRepositoriesSuccessAction {
  type: "search_repositories_success";
  payload: string[];
}

interface SearchRepositoriesErrorAction {
  type: "search_repositories_error";
  payload: string;
}

const reducer = (
  state: RepositoriesState,
  action:
    | SearchRepositoriesAction
    | SearchRepositoriesSuccessAction
    | SearchRepositoriesErrorAction
): RepositoriesState => {
  switch (action.type) {
    case "search_repositories":
      return { data: [], loading: true, error: null };

    case "search_repositories_success":
      return { data: action.payload, loading: false, error: null };

    case "search_repositories_error":
      return { data: [], loading: false, error: action.payload };

    default:
      return state;
  }
};

export default reducer;
