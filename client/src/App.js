import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import MakaleEkle from "./components/MakaleEkle";
import MakaleListesi from "./components/MakaleListesi";
import MakaleDetay from "./components/MakaleDetay";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
  uri: "http://localhost:5000/",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={MakaleListesi} />
          <Route path="/ekle" component={MakaleEkle} />
          <Route path="/makale/:id" component={MakaleDetay} />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
