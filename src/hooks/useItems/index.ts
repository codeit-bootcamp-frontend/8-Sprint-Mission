import { getItemList } from "#apis";
import { useEffect, useReducer } from "react";

interface List {
  id: number;
  name: string;
  images: string[];
  description: string;
  price: number;
  tags: string[];
  ownerId: number;
  updateAt: string;
}

interface Data {
  itemList: any[] | List[];
  totalCount: number;
}

interface Query {
  page: number;
  pageSize: number;
  orderBy: string;
  keyword: string | null;
}

interface State {
  data: Data;
  query: Query;
  loading: boolean;
  error: unknown;
}

const INITIAL_STATE: State = {
  query: {
    page: 1,
    pageSize: 10,
    orderBy: "recent",
    keyword: "",
  },
  data: {
    itemList: [],
    totalCount: 0,
  },
  loading: false,
  error: null,
};

interface Action {
  type: string;
  payload?: any;
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "SET_QUERY":
      return {
        ...state,
        query: { ...state.query, ...action.payload },
      };
    case "FETCH_DATA_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        loading: false,
        data: {
          itemList: action.payload.isClear
            ? [...action.payload.data.list]
            : [...state.data.itemList, ...action.payload.data.list],
          totalCount: action.payload.totalCount,
        },
      };
    case "FETCH_DATA_FAIL":
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

const useItems = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const loadItemList = async (
    { page, pageSize, orderBy, keyword }: Query,
    isClear?: boolean,
  ) => {
    if (state.loading) {
      return;
    }
    dispatch({ type: "FETCH_DATA_REQUEST" });
    try {
      const data = await getItemList({ page, pageSize, orderBy, keyword });
      dispatch({ type: "FETCH_DATA_SUCCESS", payload: { data, isClear } });
      return data.list;
    } catch (error) {
      // dispatch({
      //   type: "FETCH_DATA_FAILURE",
      //   payload: { error: error.message },
      // });
    }
  };
  const changeQuery = (newQuery: Partial<Query>) => {
    dispatch({ type: "SET_QUERY", payload: newQuery });
  };
  useEffect(() => {
    loadItemList(state.query, true);
  }, [state.query.keyword]);
  return { state, loadItemList, changeQuery };
};

export default useItems;
