interface RepositoriesState {
  data: string[];
  loading: boolean;
  error: string | null;
}

const reducer = (state: RepositoriesState, action: any) => {
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
