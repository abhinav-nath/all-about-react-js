interface RepositoriesState {
  data: string[];
  loading: boolean;
  error: string | null;
}

interface Action {
  type: string;
  payload?: any; // may or may not have a payload
}

const reducer = (
  state: RepositoriesState,
  action: Action
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
