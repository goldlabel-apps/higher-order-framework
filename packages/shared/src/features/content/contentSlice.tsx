import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ContentShape {
  data: any;
}

const initialState: ContentShape = {
  data: {
    shape: "ContentShape",
    url: "https",
    list: [
      {
        id: "3ENT4CLcjYU7",
        slug: "welcome",
        pathname: "/",
        title: `Home`,
        excerpt: `Welcome to Listingslab Software`,
        image: `http://listingslab.com/svg/featured/home.svg`,
        order: 1,
        body: `
        
        Featuring

        - Progressive Web App
        - Dapps for Blockchain
        - Firebase
          - Hosting
          - Authenication
        - Integration with other listingslab software
        - Continuous Integration & Deployment. 

        We use React, Node & TypeScript to build Progressive Web Dapps for Blockchain. 
        Our full JavaScript stack which includes Server Side Rendering.

        Wrappers provide interfaces between react and the SSO Service. If there is any work to be done normalising data or sililar, then it gets done in these wrappers`,
      },
      {
        id: "3ENT4CLcjYU0cKFxxy7",
        slug: "work",
        pathname: "/work",
        image: `http://listingslab.com/svg/featured/work.svg`,
        title: `Work`,
        icon: `work`,
        excerpt: `We use React, Node & TypeScript to build Progressive Web Dapps for Blockchain. 
        Our full JavaScript stack which includes Server Side Rendering`,
        order: 10,
      },
      {
        id: "3ENT4CLcjYU0cKFxxx7",
        slug: "life",
        pathname: "/life",
        icon: "life",
        title: "Life",
        image: `http://listingslab.com/svg/featured/life.svg`,
        // excerpt: "Zooming life is the best life",
        body: `Of course ... we don't do that ALL the time`,
        order: 20,
      },
      {
        id: "3ENT4CLcjYU0sadFasdsad7",
        slug: "balance",
        pathname: "/balance",
        icon: "balance",
        title: "Balance",
        body: `Of course ... we don't do that ALL the time`,
        image: `http://listingslab.com/svg/featured/balance.svg`,
        order: 30,
      },
    ],
  },
};

export const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    setContent: (state, action: PayloadAction<any>) => {
      const { key, value } = action.payload;
      state.data = { ...state.data, [key]: value };
    },
  },
});

export const { setContent } = contentSlice.actions;

export default contentSlice.reducer;
