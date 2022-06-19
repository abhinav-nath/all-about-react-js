interface RepositoriesState {
  data: string[];
  loading: boolean;
  error: string | null;
}

const reducer = (state: RepositoriesState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
