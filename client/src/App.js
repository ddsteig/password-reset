import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthContext, AuthProvider } from "./context/AuthContext";
import FourZeroFour from "./pages/FourZeroFour";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import MealPlanPage from "./pages/MealPlanPage";
import SearchFoodPage from "./pages/SearchFoodPage";
import SignUpPage from "./pages/SignUpPage";
import UserPage from "./pages/UserPage";
import Shell from "./Shell";

const UnauthenticatedRoutes = () => (
  <>
    <Switch>
      <Route exact path="/loginPage">
        <LoginPage />
      </Route>
      <Route exact path="/signUpPage">
        <SignUpPage />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
      <Route path="*">
        <FourZeroFour />
      </Route>
    </Switch>
  </>
);

const AuthenticatedRoute = ({ children, ...rest }) => {
  const auth = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={() =>
        auth.isAuthenticated() ? (
          <Shell>{children}</Shell>
        ) : (
          <UnauthenticatedRoutes />
        )
      }
    ></Route>
  );
};

const AppRoutes = () => {
  return (
    <>
      <Switch>
        <AuthenticatedRoute path="/mealPlan">
          <MealPlanPage />
        </AuthenticatedRoute>
        <AuthenticatedRoute path="/searchFood">
          <SearchFoodPage />
        </AuthenticatedRoute>
        <AuthenticatedRoute path="/:user">
          <UserPage />
        </AuthenticatedRoute>
        <UnauthenticatedRoutes />
      </Switch>
    </>
  );
};

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </Router>
    </React.Fragment>
  );
};

export default App;
