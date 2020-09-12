import { NavigationActions } from 'react-navigation';


let _navigator;

function setTopLevelNavigator(navigatorRef) {
  console.log("navigatorRef:",navigatorRef)
  _navigator = navigatorRef;
}

function navigate(routeName,params) {
  // console.log("params:",params)
  // _navigator.dispatch(
  //   NavigationActions.navigate({
  //     type: NavigationActions.NAVIGATE,
  //     routeName,
  //     params,
  //   })
  // );
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}

function goBack(routeName, params) {
  _navigator.dispatch(
    NavigationActions.back({
      routeName,
      params,
    })
  );
}
// add other navigation functions that you need and export them

export default {
  navigate,
  setTopLevelNavigator,
  goBack,
};